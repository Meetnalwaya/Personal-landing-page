/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {

      fontFamily: {
      sans: ['Satoshi', 'sans-serif'],
      },

      backdropBlur: {
        'xs': '2px',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'scale-in': 'scaleIn 0.6s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        glow: {
          '0%': { filter: 'drop-shadow(0 0 3px rgba(255, 255, 255, 0.3))' },
          '100%': { filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.6))' },
        },
      },
    },
  },
  plugins: [],
}
