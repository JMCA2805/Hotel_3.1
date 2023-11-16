// HeaderPrueba.jsx
import React, { useEffect, useState } from "react";
import Menu from "./Menu";
import Loader from "./Loader";
import { IconContext } from "react-icons";
import { FaMoon, FaSun } from "react-icons/fa6";
import { useDark } from "../../context/DarkModeProvider";
import { Link } from "react-router-dom";

function Header(props) {
  // Estados del componente menu
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [loading, setLoading] = useState(false);

  // Funcion de visibilidad del loader
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

  // Funcion de cambio de tema
  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    // Barra de navegacion
    <nav className="bg-MoradoC dark:bg-black">
      <div className="w-full flex items-center h-16 px-4 shadow-lg font-poppins dark:border-b dark:border-white/30">
        {/* Logo */}
        <Link to={"/"} className="flex-shrink-0 font-extrabold tracking-wider text-white text-2xl">
          <img
            className="h-14 inline hover:cursor-pointer mx-px"
            src="logo.png"
            alt="Logo-Hotel-Águila"
          />
          Hotel Águila
        </Link>

        <div className="flex gap-2 h-full justify-end items-center w-full">
          {/* Menu */}
          <div className="hidden md:block">
            <Menu toggleLVisibility={toggleLVisibility} />
          </div>

          {/* Botón de DarkMode */}
          <div className="rounded-full text-white bg-Moradote focus:outline-none focus:text-white border-b-4 dark:border-VerdeC border-MoradoO hover:bg-Moradote/50 dark:hover:bg-MoradoC/70 focus-within:bg-MoradoO h-10 w-10 ">
            <IconContext.Provider
              value={{
                color: "white",
                size: "20px",
                className: "w-auto h-auto p-0 m-0",
              }}
            >
              <button
                onClick={handleChangeTheme}
                className="flex justify-center items-center w-full h-full dark:border dark:border-VerdeO rounded-full"
              >
                {theme === "dark" ? <FaSun /> : <FaMoon />}
              </button>
            </IconContext.Provider>
          </div>
        </div>
        
      {/*Menu desplegable movil*/}
        <button
          type="button"
          className="md:hidden bg-Moradote inline-flex items-center justify-center p-2 rounded-full text-white hover:bg-gray-700 focus:outline-none transition duration-150 ease-in-out ml-2 border-b-4 dark:border-VerdeC border-MoradoO hover:bg-Moradote/50 dark:hover:bg-MoradoC/70 focus-within:bg-MoradoO"
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

      {/* Loaders*/}
      {loading && <Loader />}
    </nav>
  );
}

export default Header;
