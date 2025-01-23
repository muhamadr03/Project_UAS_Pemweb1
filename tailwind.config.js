/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flyonui/dist/js/accordion.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
    require("flyonui"),
    require("flyonui/plugin")
  ],
}