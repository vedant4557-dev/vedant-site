import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-dm-mono)', 'monospace'],
      },
      colors: {
        brand: {
          gold: '#c9a84c',
          accent: '#e8d5b0',
          warm: '#f0e6d3',
          teal: '#4ecdc4',
          coral: '#ff6b6b',
          sage: '#7fad8f',
        },
        dark: {
          bg: '#0a0a0a',
          surface: '#111114',
          elevated: '#1a1a1f',
          card: '#1e1e24',
          border: 'rgba(255,255,255,0.08)',
        },
      },
      animation: {
        'spin-slow': 'spin 25s linear infinite',
        'fade-up': 'fadeUp 0.7s ease forwards',
        'scroll-pulse': 'scrollPulse 2s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        scrollPulse: {
          '0%, 100%': { opacity: '0.3', transform: 'scaleX(1)' },
          '50%': { opacity: '1', transform: 'scaleX(1.3)' },
        },
      },
      backdropBlur: {
        xs: '4px',
      },
    },
  },
  plugins: [],
}

export default config
