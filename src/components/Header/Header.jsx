// HeaderPrueba.jsx
import React, { useEffect, useState } from "react";
import Menu from "./Menu";
import Loader from "./Loader";
import { IconContext } from "react-icons";
import { FaMoon, FaSun } from "react-icons/fa6";
import { useDark } from "../../context/DarkModeProvider";

function Header(props) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleLVisibility = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  //Modo Oscuro y Claro
  const { theme, setTheme } = useDark();
  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  // El componente Header representa la barra de navegación en la parte superior de la página.

  // El estado showMobileMenu se utiliza para mostrar o ocultar el menú en dispositivos móviles cuando se hace clic en el botón de menú.

  // La función toggleHeroVisibility se activa cuando se hace clic en un elemento del menú y se encarga de mostrar un componente adicional (no mostrado en el código proporcionado). También activa el Loader durante 3 segundos para simular una carga.

  // La función toggleTablaVisibility se activa cuando se hace clic en otro elemento del menú y se encarga de mostrar otro componente (no mostrado en el código proporcionado). También activa el Loader durante 3 segundos para simular una carga.

  return (
    <nav className="bg-MoradoC dark:bg-black">
      <div className="w-full flex items-center h-16 px-4 shadow-lg dark:shadow-VerdeO/50 font-poppins">
        <div className="flex-shrink-0 font-bold tracking-wider text-white text-xl">
          <img
            className="h-14 inline hover:cursor-pointer mx-px"
            src="public/logo.png"
            alt="Logo-Hotel-Águila"
          />
          Hotel Águila
        </div>

        <div className="flex gap-2 h-full justify-end items-center w-full">
          <div className="hidden md:block">
            <Menu toggleLVisibility={toggleLVisibility} />
          </div>
          <div className="rounded-full text-white bg-MoradoO/70 focus:outline-none focus:text-white hover:border-2 hover:border-VerdeO h-10 w-10 ">
            <IconContext.Provider
              value={{
                color: "white",
                size: "20px",
                className: "w-auto h-auto p-0 m-0",
              }}
            >
              <button
                onClick={handleChangeTheme}
                className="flex justify-center items-center w-full h-full"
              >
                {theme === "dark" ? <FaSun /> : <FaMoon />}
              </button>
            </IconContext.Provider>
          </div>
        </div>

        <button
          type="button"
          className="md:hidden bg-MoradoO/70 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out ml-2"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          <svg
            className="h-6 w-6"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      <div className="md:hidden">
        {showMobileMenu && <Menu toggleLVisibility={toggleLVisibility} />}
      </div>
      {/* El bloque de código anterior representa el menú desplegable para dispositivos móviles. Se muestra solo cuando showMobileMenu es verdadero. */}
      {loading && <Loader />}
      {/* El componente Loader se muestra si loading es verdadero, lo que indica que se está realizando una carga. */}
    </nav>
  );
}

export default Header;
