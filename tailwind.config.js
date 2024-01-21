/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transform: {
        scrolls: "scrolls 30s ease-in-out infinite",
      },
      keyframes: {
        scrolls: {
          "0%, 12.5%": { tranform: "translateX(1000px)" },
          "12.5%, 25% ": { tranform: "translateX(1000px)" },
          "25%, 37.5%": { tranform: "translateX(1000px)" },
          "37.5%, 50%": { tranform: "translateX(1000px)" },
          "50%, 62.5%": { tranform: "translateX(1000px)" },
          "62.5%, 75%": { tranform: "translateX(1000px)" },
          "75%, 87.5%": { tranform: "translateX(1000px)" },
          "87.5%, 100%": { tranform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
