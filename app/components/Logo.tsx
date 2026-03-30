export default function Logo({ className = 'w-10 h-10' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background circle */}
      <circle cx="50" cy="50" r="48" fill="url(#logoGradient)" />

      {/* Inner glow circle */}
      <circle cx="50" cy="50" r="40" fill="url(#innerGlow)" opacity="0.3" />

      {/* Sun rays */}
      <g opacity="0.95">
        {/* Center ray (top) */}
        <path d="M50 18 L53 30 L50 28 L47 30 Z" fill="white" />

        {/* Angled rays */}
        <path d="M68 24 L62 34 L60 31 L64 29 Z" fill="white" opacity="0.9" />
        <path d="M32 24 L38 34 L40 31 L36 29 Z" fill="white" opacity="0.9" />

        <path d="M78 38 L66 40 L65 37 L74 34 Z" fill="white" opacity="0.85" />
        <path d="M22 38 L34 40 L35 37 L26 34 Z" fill="white" opacity="0.85" />

        <path d="M82 54 L70 52 L70 49 L80 48 Z" fill="white" opacity="0.8" />
        <path d="M18 54 L30 52 L30 49 L20 48 Z" fill="white" opacity="0.8" />
      </g>

      {/* Rising sun (half circle) */}
      <path d="M26 58 Q26 38 50 38 Q74 38 74 58" fill="white" opacity="0.95" />

      {/* Horizon line */}
      <rect x="20" y="56" width="60" height="3" rx="1.5" fill="white" opacity="0.9" />

      {/* Reflection lines below horizon */}
      <rect x="30" y="63" width="40" height="2" rx="1" fill="white" opacity="0.5" />
      <rect x="36" y="69" width="28" height="2" rx="1" fill="white" opacity="0.35" />
      <rect x="42" y="75" width="16" height="2" rx="1" fill="white" opacity="0.2" />

      {/* Gradient definitions */}
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7C3AED" />
          <stop offset="50%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#A78BFA" />
        </linearGradient>
        <radialGradient id="innerGlow" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
    </svg>
  )
}
