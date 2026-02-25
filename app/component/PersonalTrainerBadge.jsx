'use client';

export default function PersonalTrainerBadge() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes personalTrainerSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}} />
    <div
      className="fixed bottom-6 left-6 z-40 flex h-32 w-32 items-center justify-center"
      aria-hidden
    >
      {/* SVG: text on a circular path, rotating so text moves in a circle */}
      <svg
        className="absolute inset-0 h-full w-full"
        style={{
          animation: 'personalTrainerSpin 20s linear infinite',
          transformOrigin: '50% 50%',
        }}
        viewBox="0 0 100 100"
        aria-hidden
      >
        <defs>
          <path
            id="circlePath"
            d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
            fill="none"
          />
        </defs>
        <text fill="white" fontFamily="system-ui, sans-serif" fontSize="8" fontWeight="600" letterSpacing="0.15em">
          <textPath href="#circlePath" startOffset="0">
            PERSONAL TRAINER • PERSONAL TRAINER • PERSONAL TRAINER •
          </textPath>
        </text>
      </svg>
      {/* Center weight icon (dumbbell) */}
      <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full sm:h-10 sm:w-10 md:h-12 md:w-12">
        <svg
          className="h-5 w-5 text-white sm:h-6 sm:w-6 md:h-7 md:w-7"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <line x1="6" y1="12" x2="18" y2="12" />
          <circle cx="5" cy="12" r="3" />
          <circle cx="19" cy="12" r="3" />
        </svg>
      </div>
    </div>
    </>
  );
}
