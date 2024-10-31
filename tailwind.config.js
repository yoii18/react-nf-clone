/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'nsans-light': ['NSans Light'],
        'nsans-regular': ['NSans Regular'],
        'nsans-medium': ['NSans Medium'],
        'nsans-bold': ['NSans Bold']
      }
    },
  },
  plugins: [],
}

