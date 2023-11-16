/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    "./src/components/**/*.{js,jsx,ts,tsx}",

  ],
  //DarkMode
  darkMode: "class",
  theme: {
    //Configuración de los responsive

    extend: {
      display: ['group-focus'],
      opacity: ['group-focus'],
      inset: ['group-focus'],
          colors: {
        //Colores personalizados
        VerdeO: '#3F6D4E',
        VerdeC: '#8BD450',
        MoradoO: '#1D1A2F',
        MoradoC: '#965FD4',
        Moradote: '#734F9A',
      },
      fontFamily: {
        poppins: ['Poppins', 'Arial', 'sans-serif'],
      },
    },
  },
    plugins: [
    require('flowbite/plugin')

  ],
};
