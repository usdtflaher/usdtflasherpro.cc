/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00FFB3',
        accent: '#FFD700',
        background: '#0D0D0F',
        'card-bg': '#131417',
        'text-primary': '#FFFFFF',
        'text-secondary': '#A0A0A5',
        'button-text': '#000000',
        success: '#00FF94',
        danger: '#FF4C4C',
        info: '#007BFF',
        'footer-bg': '#0A0A0D',
        'input-bg': '#1E1E22',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'heading-1': '3rem',
        'heading-2': '2.25rem',
        'heading-3': '1.5rem',
        'body': '1rem',
        'button': '1rem',
      },
      fontWeight: {
        'heading': 700,
        'body': 400,
      },
      spacing: {
        '4': '4px',
        '8': '8px',
        '16': '16px',
        '24': '24px',
        '32': '32px',
        '48': '48px',
        '64': '64px',
      },
      maxWidth: {
        'container': '1280px',
      },
      borderRadius: {
        'card': '12px',
        'button': '8px',
      },
      boxShadow: {
        'button': '0 0 10px rgba(0,255,179,0.6)',
        'card': '0 2px 10px rgba(0,0,0,0.3)',
        'glow': '0 0 20px rgba(0,255,179,0.3)',
      },
      animation: {
        'pulse-glow': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
} 