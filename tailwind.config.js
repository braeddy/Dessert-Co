/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bakery: {
          // Testo principale e superfici scure (cacao)
          brown: '#4A3426',
          cocoa: '#2E2019',
          // Caramello: tono caldo derivato dal logo
          caramel: '#B07D56',
          // Rosa del logo, in versione chiara e accento
          pink: '#F6D6DA',
          rose: '#D8798A',
          // Azzurro del logo
          blue: '#A6D5E9',
          sky: '#5E9DB8',
          // Sfondi
          cream: '#F8EAD8',
          ivory: '#FCF8F3',
        }
      },
      fontFamily: {
        serif: ['"Fraunces Variable"', 'Playfair Display', 'serif'],
        sans: ['"Manrope Variable"', 'Poppins', 'sans-serif'],
        script: ['"Pinyon Script"', 'cursive'],
      },
      boxShadow: {
        soft: '0 20px 50px -20px rgba(74, 52, 38, 0.25)',
        glow: '0 10px 30px -10px rgba(216, 121, 138, 0.55)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'marquee': 'marquee 40s linear infinite',
        'spin-slow': 'spin 24s linear infinite',
        'fade-in': 'fadeIn 0.3s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      }
    },
  },
  plugins: [],
}
