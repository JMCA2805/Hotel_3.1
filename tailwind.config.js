/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  //DarkMode
  darkMode: "class",
  theme: {
    //Configuración de los responsive
    screens: {
      lt: { min: "300px", max: "480px" },
      sm: { min: "481px", max: "575px" },
      md: { min: "576px", max: "991px" },
      lg: { min: "992px", max: "1199px" },
      xl: { min: "1200px", max: "1440px" },
      "2xl": { min: "1441px" },
    },
    extend: {
      colors: {
        //Colores personalizados
        //black:#0000000,
      },
    },
  },
  plugins: [],
};
