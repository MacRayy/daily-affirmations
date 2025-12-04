export default function Logo({ className = 'w-10 h-10' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer circle - peaceful background */}
      <circle cx="50" cy="50" r="48" fill="url(#gradient)" />

      {/* Sparkle/Star effect */}
      <path
        d="M50 20 L52 35 L67 35 L55 44 L60 58 L50 48 L40 58 L45 44 L33 35 L48 35 Z"
        fill="white"
        opacity="0.9"
      />

      {/* Small dots for energy */}
      <circle cx="30" cy="30" r="3" fill="white" opacity="0.7" />
      <circle cx="70" cy="30" r="3" fill="white" opacity="0.7" />
      <circle cx="30" cy="70" r="3" fill="white" opacity="0.7" />
      <circle cx="70" cy="70" r="3" fill="white" opacity="0.7" />

      {/* Gradient definition */}
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#EC4899" />
        </linearGradient>
      </defs>
    </svg>
  )
}
