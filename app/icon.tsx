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
        background: 'linear-gradient(to bottom right, #8B5CF6, #EC4899)',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '8px',
      }}
    >
      <div
        style={{
          color: 'white',
          fontSize: 20,
          fontWeight: 'bold',
        }}
      >
        ✨
      </div>
    </div>,
    {
      ...size,
    },
  )
}
