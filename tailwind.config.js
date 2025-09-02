/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Grays & Black
        gray: {
          200: "#F2F2F2",
          300: "#D4D4D4", 
          400: "#B1B1B1",
          450: "#898888",
          500: "#696969",
          700: "#323232",
        },
        black: "#212427",
        white: "#fff",
        charcoal: "#232326",
        
        // Neutrals (Warm Grays)
        neutral: {
          200: "#F1EEEA",
          250: "#DCD5CE", 
          300: "#DFD7CD",
          400: "#C4B5A4",
          500: "#AB947E",
          700: "#856E57",
        },
        
        // Greens (Primary & Secondary)
        green: {
          200: "#DCF9E3",
          300: "#A8F0B8",
          400: "#21BF61",
          500: "#197A56",
          700: "#0E3E1B",
        },
        
        // Accents (Highlight Colors)
        accent: {
          200: "#7EF473",
          300: "#71DC68",
        },
        
        // Semantic (Alert & Warning)
        alert: {
          200: "#FCE1DC",
          400: "#D82216",
        },
        warning: {
          200: "#FFFBE8",
          400: "#FFCF24",
        },
        success: {
          200: "#DCF9E3",
          400: "#21BF61",
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontWeight: {
        light: '300',
      },
      spacing: {
        'g': '1.5rem', // 24px - base grid unit
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-gentle': 'pulse-gentle 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2.5s ease-in-out infinite',
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { 
            transform: 'translateY(0px) rotate(0deg)',
            opacity: '0.7'
          },
          '50%': { 
            transform: 'translateY(-10px) rotate(2deg)',
            opacity: '1'
          }
        },
        'pulse-gentle': {
          '0%, 100%': { 
            opacity: '0.3',
            transform: 'scale(1)'
          },
          '50%': { 
            opacity: '0.8',
            transform: 'scale(1.05)'
          }
        },
        glow: {
          '0%': {
            boxShadow: '0 0 5px rgba(126, 244, 115, 0.2), 0 0 10px rgba(126, 244, 115, 0.1)',
          },
          '100%': {
            boxShadow: '0 0 10px rgba(126, 244, 115, 0.4), 0 0 20px rgba(126, 244, 115, 0.2)',
          }
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-1000px 0'
          },
          '100%': {
            backgroundPosition: '1000px 0'
          }
        },
        fadeIn: {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        slideUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        scaleIn: {
          '0%': {
            opacity: '0',
            transform: 'scale(0.9)'
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)'
          }
        }
      },
      backdropBlur: {
        'xs': '2px',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'bounce-gentle': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '1200': '1200ms',
      },
    },
  },
  plugins: [],
}

