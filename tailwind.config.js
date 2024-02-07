/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      xl: { max: "1444px" },
      lg: { max: "1280px" },
      md: { max: "1024px" },
      sm: { max: "600px" },
    },
    extend: {
      colors: {
        pri: "#fff",
        sec: "#000",
        thi: "#00000f",
        fou: "#00001f",
        fif: "#092f5f",
        six: "#ff1900",
      },

      keyframes: {
        ScrollsX: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        ScrollsX: "ScrollsX 10s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
