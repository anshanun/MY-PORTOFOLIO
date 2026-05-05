"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import { EmojiRating } from "./emoji-rating";
import { SplashedPushNotifications, type NotificationRef } from "./splashed-push-notifications";

type NotificationType = 'success' | 'error' | 'warning' | 'help';

const RATING_TOASTS: Record<number, { type: NotificationType; title: string; content: string }> = {
  1: { type: 'error',   title: 'That bad, huh?',      content: "Sorry to hear that. Your honest feedback helps me improve." },
  2: { type: 'warning', title: 'Room to improve',      content: "Thanks for letting me know. I'll work on making it better!" },
  3: { type: 'help',    title: 'Pretty okay!',         content: "Good to know. Tell me what could make it even better." },
  4: { type: 'success', title: 'Glad you liked it!',   content: "Thanks for the kind rating. Much appreciated!" },
  5: { type: 'success', title: 'You made my day! 🎉',  content: "Amazing! Thank you so much for the love." },
};

export function RatingSection() {
  const notificationRef = useRef<NotificationRef>(null);

  const handleRating = (rating: number) => {
    const toastData = RATING_TOASTS[rating];
    if (toastData && notificationRef.current) {
      notificationRef.current.createNotification(toastData);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } }
  };

  return (
    <section className="py-32 bg-[#F8F9FA] rounded-[3rem] mx-6 mb-24 relative overflow-hidden" id="feedback">
      {/* Decorative background blur */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#CCFF00] rounded-full mix-blend-multiply filter blur-[128px] opacity-20 -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0038FF] rounded-full mix-blend-multiply filter blur-[128px] opacity-10 -z-10" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center z-10"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-white shadow-sm border border-black/5">
            <span className="text-xl">👋</span>
            <span className="text-xs font-bold uppercase tracking-widest text-black/70">Feedback</span>
          </div>
        </motion.div>

        <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4">
          How was your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0038FF] to-[#001A99]">experience?</span>
        </motion.h2>

        <motion.p variants={itemVariants} className="text-black/50 text-lg max-w-lg mb-16">
          Your feedback means a lot! Feel free to rate your visit. Don't worry, I won't cry if it's less than 5 stars. Maybe just a little.
        </motion.p>

        <motion.div variants={itemVariants}>
          <EmojiRating onChange={handleRating} />
        </motion.div>
      </motion.div>

      {/* Toast Notifications */}
      <SplashedPushNotifications ref={notificationRef} timerBgColor="#E5E7EB" timerColor="#0038FF" />
    </section>
  );
}
