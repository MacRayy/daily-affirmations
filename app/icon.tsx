import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = {
  width: 32,
  height: 32,
}

export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        background: 'linear-gradient(135deg, #7C3AED 0%, #8B5CF6 50%, #A78BFA 100%)',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Sun rays */}
      <div
        style={{
          position: 'absolute',
          top: '4px',
          width: '2px',
          height: '6px',
          background: 'rgba(255,255,255,0.9)',
          borderRadius: '1px',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '6px',
          left: '7px',
          width: '2px',
          height: '5px',
          background: 'rgba(255,255,255,0.85)',
          borderRadius: '1px',
          transform: 'rotate(-35deg)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '6px',
          right: '7px',
          width: '2px',
          height: '5px',
          background: 'rgba(255,255,255,0.85)',
          borderRadius: '1px',
          transform: 'rotate(35deg)',
        }}
      />

      {/* Rising sun (half circle) */}
      <div
        style={{
          position: 'absolute',
          top: '10px',
          width: '18px',
          height: '9px',
          background: 'white',
          borderRadius: '9px 9px 0 0',
        }}
      />

      {/* Horizon line */}
      <div
        style={{
          position: 'absolute',
          top: '18px',
          width: '22px',
          height: '2px',
          background: 'rgba(255,255,255,0.9)',
          borderRadius: '1px',
        }}
      />

      {/* Reflection lines */}
      <div
        style={{
          position: 'absolute',
          top: '22px',
          width: '14px',
          height: '1.5px',
          background: 'rgba(255,255,255,0.5)',
          borderRadius: '1px',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '25px',
          width: '8px',
          height: '1.5px',
          background: 'rgba(255,255,255,0.3)',
          borderRadius: '1px',
        }}
      />
    </div>,
    {
      ...size,
    },
  )
}
