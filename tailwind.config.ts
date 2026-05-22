import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand Primary — Red (Action / CTA)
        brand: {
          red: '#F71A25',
          'red-dark': '#d4111b',
          'red-darker': '#b00e16',
          'red-light': '#fff0f1',
          'red-muted': '#fde8e9',
          // Brand Secondary — Light Blue (Trust / Healthcare)
          blue: '#2FBADE',
          'blue-dark': '#1aa0c0',
          'blue-darker': '#1587a3',
          'blue-light': '#e8f8fd',
          'blue-muted': '#d0f0fb',
        },
        // Keep teal for backwards compat (unused after migration)
        teal: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
          950: '#042f2e',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 24px rgba(47,186,222,0.10)',
        'card-hover': '0 8px 40px rgba(47,186,222,0.20)',
        navbar: '0 2px 20px rgba(0,0,0,0.08)',
        'cta-red': '0 4px 24px rgba(247,26,37,0.25)',
        'cta-red-hover': '0 8px 32px rgba(247,26,37,0.35)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #2FBADE 0%, #1aa0c0 100%)',
        'gradient-cta': 'linear-gradient(135deg, #2FBADE 0%, #1587a3 100%)',
        'gradient-light': 'linear-gradient(135deg, #e8f8fd 0%, #d0f0fb 100%)',
        'gradient-red': 'linear-gradient(135deg, #F71A25 0%, #d4111b 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4,0,0.6,1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
