/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        scrol: 'scrol 1s ease-in-out infinite'
      },
      keyframes: {
        scrol: {
          '0%, 100%': {tranform: 'translateX(-1000px)'},
          '100%': {transform: 'translateX(100%)'}
        }
        
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
