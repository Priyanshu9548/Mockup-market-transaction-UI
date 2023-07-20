/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {rotate: {
      90: "90deg",
      270: "270deg",
    },},
  },
  plugins: [],
}