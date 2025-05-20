module.exports = {
<<<<<<< HEAD
  darkMode: 'class', // Enable dark mode via class strategy
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
=======
<<<<<<< HEAD
  darkMode:'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
=======
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js"
>>>>>>> 882a2b0147df18b51d85ad399d5319d951a42726
>>>>>>> 40b0a5f599f6aedae29c9d08243b46b6f79be509
  ],
  theme: {
    extend: {
      colors: {
        brand: '#121827', // Custom color
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};