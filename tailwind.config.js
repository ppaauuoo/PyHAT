/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/templates/**/*.{html, jinja}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "dracula","cupcake","aqua"],
  },
}

