/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        protest:  ["Protest Riot", "sans-serif"],
        abel: ["Abel", "sans-serif"],
      }
    },
  },
  plugins: [],
}

