/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        "indent": 'inset 3px 10px 15px 5px rgb(0 0 0 / 0.1)'
      }
    },
  },
  plugins: [],
}

// 'inset 0 50px 25px -24px rgb(0 0 0 / 0.3)'