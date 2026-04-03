import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Backgrounds
        bg: '#F7F4F0',
        'bg-warm': '#EFEBE5',
        surface: '#ECEAE5',
        // Text
        text: '#2C2A27',
        'text-muted': '#6B6560',
        'text-light': '#9C9590',
        // Accents
        'accent-rust': '#C4622D',
        'accent-rust-dark': '#A3511F',
        'accent-green': '#5C6B4F',
        'accent-green-dark': '#4A573F',
        // Borders
        border: '#D9D4CC',
        'border-light': '#E8E4DD',
        // Dark & White
        dark: '#2C2A27',
        white: '#ffffff',
      },
      fontFamily: {
        display: ['Merriweather', 'Georgia', 'serif'],
        body: ['Raleway', 'system-ui', 'sans-serif'],
      },
      spacing: {
        // 8px grid
        'grid-1': '0.125rem', // 2px
        'grid-2': '0.25rem',  // 4px
        'grid-4': '0.5rem',   // 8px
        'grid-6': '0.75rem',  // 12px
        'grid-8': '1rem',     // 16px
        'grid-12': '1.5rem',  // 24px
        'grid-16': '2rem',    // 32px
        'grid-24': '3rem',    // 48px
        'grid-32': '4rem',    // 64px
        'grid-40': '5rem',    // 80px
        'grid-48': '6rem',    // 96px
        'grid-64': '8rem',    // 128px
      },
      borderRadius: {
        DEFAULT: '0.25rem', // 4px
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
        'full': '9999px',
      },
      boxShadow: {
        sm: '0 1px 3px rgba(44, 42, 39, 0.08)',
        md: '0 4px 12px rgba(44, 42, 39, 0.10)',
        lg: '0 8px 24px rgba(44, 42, 39, 0.12)',
      },
    },
  },
  plugins: [],
}
export default config