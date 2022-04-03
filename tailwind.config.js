module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      colors: {
        primary: {
          100: '#E6F6FE',
          200: '#C0EAFC',
          300: '#9ADDFB',
          400: '#4FC3F7',
          500: '#03A9F4',
          600: '#0398DC',
          700: '#026592',
          800: '#014C6E',
          900: '#013349',
        },
        gray: {
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#718096',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
        },
      },
      lineHeight: {
        hero: '4.5rem',
      },
      height: {
        '9': '3.25rem',
      },
      animation: {
        'bounce-opening': 'bounce_opening 1.3s infinite',
        slide_line: 'slide_line 7s infinite',
        slide_line_2: 'slide_line2 7s infinite'
      },
      keyframes: {
        bounce_opening: {
          '0%, 100%': { transform: 'translateY(-70%)', animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)' },
          '50%': { transform: 'translateY(0)', animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)' },
        },
        slide_line: {
          '0%, 100%': { transform: 'translateX(-50%)' },
          '50%': { transform: 'translateX(0)'},
        },
        slide_line2: {
          '0%, 100%': { transform: 'translateX(20%)' },
          '50%': { transform: 'translateX(0)'},
        }
      },
      backgroundImage: {
        features: "url('/assets/images/bg-features.png')",
      }
    },
  },
  variants: {},
  plugins: [],
};
