// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default { // <--- MUDANÇA AQUI
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/03-tailwind/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: 'class',
}