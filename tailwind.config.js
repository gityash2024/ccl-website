/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6B16DB', // The purple color from your design
        secondary: '#FF338B', // The pink color from your design
      },
    },
  },
  plugins: [],
}