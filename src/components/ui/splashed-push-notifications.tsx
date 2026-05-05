"use client";

import { forwardRef, useImperativeHandle, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "motion/react";
import { X, CheckCircle, AlertTriangle, Info, AlertCircle } from "lucide-react";

export type NotificationType = 'success' | 'error' | 'warning' | 'help';

interface NotificationItem {
  id: string;
  type: NotificationType;
  title: string;
  content: string;
}

export interface NotificationRef {
  createNotification: (data: Omit<NotificationItem, 'id'>) => void;
  createRtlNotification: (data: Omit<NotificationItem, 'id'>) => void;
}

interface SplashedPushNotificationsProps {
  timerBgColor?: string;
  timerColor?: string;
}

const TYPE_CONFIG = {
  success: { color: '#03a65a', icon: CheckCircle },
  error:   { color: '#db3056', icon: AlertCircle },
  warning: { color: '#fc8621', icon: AlertTriangle },
  help:    { color: '#0070e0', icon: Info },
};

export const SplashedPushNotifications = forwardRef<NotificationRef, SplashedPushNotificationsProps>(
  ({ timerBgColor = "#E5E7EB", timerColor = "#0038FF" }, ref) => {
    const [ltrNotifications, setLtrNotifications] = useState<NotificationItem[]>([]);
    const [rtlNotifications, setRtlNotifications] = useState<NotificationItem[]>([]);

    useImperativeHandle(ref, () => ({
      createNotification: (data) => {
        const id = Math.random().toString(36).substring(2, 9);
        setLtrNotifications(prev => [...prev, { ...data, id }]);
      },
      createRtlNotification: (data) => {
        const id = Math.random().toString(36).substring(2, 9);
        setRtlNotifications(prev => [...prev, { ...data, id }]);
      }
    }));

    const removeLtr = (id: string) => {
      setLtrNotifications(prev => prev.filter(n => n.id !== id));
    };

    const removeRtl = (id: string) => {
      setRtlNotifications(prev => prev.filter(n => n.id !== id));
    };

    // Render using createPortal to ensure fixed positioning works correctly outside parallax transforms
    return createPortal(
      <>
        {/* LTR Container (Bottom Right) */}
        <div className="fixed bottom-6 right-6 z-[99999] flex flex-col gap-4 max-w-sm w-full pointer-events-none">
          <AnimatePresence>
            {ltrNotifications.map(notification => (
              <NotificationCard 
                key={notification.id} 
                item={notification} 
                onRemove={() => removeLtr(notification.id)}
                isRtl={false}
                timerBgColor={timerBgColor}
                timerColor={timerColor}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* RTL Container (Bottom Left) */}
        <div className="fixed bottom-6 left-6 z-[99999] flex flex-col gap-4 max-w-sm w-full pointer-events-none">
          <AnimatePresence>
            {rtlNotifications.map(notification => (
              <NotificationCard 
                key={notification.id} 
                item={notification} 
                onRemove={() => removeRtl(notification.id)}
                isRtl={true}
                timerBgColor={timerBgColor}
                timerColor={timerColor}
              />
            ))}
          </AnimatePresence>
        </div>
      </>,
      document.body
    );
  }
);

SplashedPushNotifications.displayName = 'SplashedPushNotifications';

function NotificationCard({ 
  item, 
  onRemove, 
  isRtl,
  timerBgColor,
  timerColor
}: { 
  item: NotificationItem; 
  onRemove: () => void; 
  isRtl: boolean;
  timerBgColor: string;
  timerColor: string;
}) {
  const [isPaused, setIsPaused] = useState(false);
  const config = TYPE_CONFIG[item.type];
  const Icon = config.icon;

  const animationName = `timerShrink-${item.id}`;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: isRtl ? -50 : 50, scale: 0.9 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
      className="pointer-events-auto relative w-full bg-white rounded-2xl shadow-xl overflow-hidden border border-black/5"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <style>{`
        @keyframes ${animationName} {
          from { width: 100%; }
          to { width: 0%; }
        }
      `}</style>

      <div className={`flex items-start p-4 ${isRtl ? 'flex-row-reverse text-right' : 'flex-row'}`}>
        <div className={`shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-opacity-10`} style={{ backgroundColor: `${config.color}20`, color: config.color }}>
          <Icon className="w-5 h-5" />
        </div>
        
        <div className={`flex-1 mx-4 ${isRtl ? 'text-right' : 'text-left'}`}>
          <h4 className="font-bold text-black mb-1 text-sm">{item.title}</h4>
          <p className="text-black/60 text-xs leading-relaxed">{item.content}</p>
        </div>

        <button 
          onClick={onRemove}
          className="shrink-0 p-1 text-black/40 hover:text-black hover:bg-black/5 rounded-full transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="h-1 w-full" style={{ backgroundColor: timerBgColor }}>
        <div 
          className="h-full"
          style={{ 
            backgroundColor: timerColor,
            animation: `${animationName} 5s linear forwards`,
            animationPlayState: isPaused ? 'paused' : 'running'
          }}
          onAnimationEnd={onRemove}
        />
      </div>
    </motion.div>
  );
}
