/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/*.js",
    "./pages/dashboard/*.js",

    "./src/components/*.js",
    "./src/components/Dashboard/*.js",
  ],
  theme: {
    extend: {
      colors: {
        main: "#330099",
        secondary: "#990033",
        accent: "#FF9900",
        "accent--pink": "#FF3399",
        "accent-yellow": "#FFFF00",
      },
    },
  },
  plugins: [],
};
