/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.html",
     "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // borderColor: {
      //   input: '#e2e8f0', // Light gray for input borders
      // },
      // colors: {
      //   background: '#f7fafc', // Very light gray for backgrounds
      // },
    },
  },
  plugins: [],
}

