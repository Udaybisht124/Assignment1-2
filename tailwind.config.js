const flowbiteReact = require("flowbite-react/plugin/tailwindcss");

module.exports = {
  darkMode: 'class', // Enable dark mode via class strategy
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    ".flowbite-react/class-list.json"
  ],
  theme: {
    extend: {
      colors: {
        brand: '#121827', // Custom color
      },
    },
  },
  plugins: [require('flowbite/plugin'), flowbiteReact],
};