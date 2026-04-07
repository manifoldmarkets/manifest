/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-body)', 'serif'],
        sans: ['var(--font-sans)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
        heading: ['var(--font-heading)', 'sans-serif'],
        cinzel: ['var(--font-cinzel)', 'serif'],
        'cinzel-decorative': ['var(--font-cinzel-decorative)', 'serif'],
        baskerville: ['var(--font-libre-baskerville)', 'serif'],
      },
      colors: {
        // 2025 legacy
        ink: {
          0: 'rgb(255 255 255 / <alpha-value>)',
          100: 'rgb(236 237 248 / <alpha-value>)',
          900: 'rgb(22 21 55 / <alpha-value>)',
        },
        canvas: {
          0: 'rgb(253 254 255 / <alpha-value>)',
        },
        primary: {
          400: 'rgb(165 180 252 / <alpha-value>)',
          600: 'rgb(129 140 248 / <alpha-value>)',
          700: 'rgb(99 102 241 / <alpha-value>)',
          800: 'rgb(80 82 237 / <alpha-value>)',
          900: 'rgb(60 63 231 / <alpha-value>)',
        },
        // 2026
        m26: {
          parchment: '#f0e8df',
          cream: '#f5f0eb',
          'lav-light': '#ddd5ea',
          lav: '#c8bdd6',
          'lav-mid': '#a99bc2',
          purple: '#6b5b8d',
          'purple-deep': '#4a3a6b',
          'purple-dark': '#2e1f4d',
          btn: '#7b6b9e',
          'btn-hover': '#6a5a8d',
          muted: '#6b5b7d',
          card: '#8b80b8',
        },
      },
      keyframes: {
        'm26-fade-up': {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'm26-fade-up': 'm26-fade-up 0.8s ease-out both',
        'm26-fade-up-1': 'm26-fade-up 0.8s ease-out 0.15s both',
        'm26-fade-up-2': 'm26-fade-up 0.8s ease-out 0.3s both',
        'm26-fade-up-3': 'm26-fade-up 0.8s ease-out 0.45s both',
      },
    },
  },
  plugins: [],
}
