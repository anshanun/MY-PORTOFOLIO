export function AnimatedLetterText({ text, letterToReplace, className = "" }: { text: string, letterToReplace: string, className?: string }) {
  const parts = text.split(new RegExp(`(${letterToReplace})`, 'i'));
  let replaced = false;

  return (
    <h2 className={`font-black tracking-tighter m-0 p-0 leading-[0.8] ${className}`} style={{ fontFamily: '"Arial Black", Impact, sans-serif' }}>
      {parts.map((part, i) => {
        if (!replaced && part.toLowerCase() === letterToReplace.toLowerCase()) {
          replaced = true;
          return (
            <span key={i} className="inline-flex items-center justify-center align-baseline relative" style={{ width: '0.8em', height: '0.8em' }}>
              <svg viewBox="0 0 100 100" className="w-full h-full absolute inset-0 drop-shadow-2xl">
                <defs>
                  <linearGradient id="diamondGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#CCFF00" />
                    <stop offset="100%" stopColor="#88AA00" />
                  </linearGradient>
                  <linearGradient id="diamondShine" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="rgba(255,255,255,0.8)" />
                    <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                  </linearGradient>
                  <filter id="diamondGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                  <filter id="innerShadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feOffset dx="0" dy="8"/>
                    <feGaussianBlur stdDeviation="6" result="offset-blur"/>
                    <feComposite operator="out" in="SourceGraphic" in2="offset-blur" result="inverse"/>
                    <feFlood floodColor="black" floodOpacity="0.4" result="color"/>
                    <feComposite operator="in" in="color" in2="inverse" result="shadow"/>
                    <feComposite operator="over" in="shadow" in2="SourceGraphic"/>
                  </filter>
                </defs>
                {/* Outer shape (scalloped/flower) */}
                <path d="M50 5 C60 5 65 15 75 15 C85 15 90 25 90 35 C90 45 95 50 95 50 C95 50 90 55 90 65 C90 75 85 85 75 85 C65 85 60 95 50 95 C40 95 35 85 25 85 C15 85 10 75 10 65 C10 55 5 50 5 50 C5 50 10 45 10 35 C10 25 15 15 25 15 C35 15 40 5 50 5 Z" 
                  fill="#000" filter="url(#innerShadow)" />
                {/* Rotating Diamond */}
                <g className="animate-diamond-rotate" style={{ transformOrigin: '50px 50px' }}>
                  <path d="M50 25 L70 50 L50 75 L30 50 Z" fill="url(#diamondGradient)" filter="url(#diamondGlow)" />
                  <path d="M50 25 L70 50 L30 50 Z" fill="url(#diamondShine)" opacity="0.5" />
                </g>
              </svg>
            </span>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </h2>
  );
}
