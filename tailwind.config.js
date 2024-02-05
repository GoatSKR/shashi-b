/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        OSWALD: ["Oswald", "sans-serif"],
        ROBOTO: ["Roboto", "sans-serif"]
  
      }
    },
  },
  plugins: [],
}

