import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import Loader from "./Header/Loader";

const Footer = () => {
  const location = useLocation();
  const isTokenPresent = document.cookie.includes("token=");
  const { user } = useContext(AuthContext);

  const [loading, setLoading] = useState(false);

  const toggleLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  return (
    <div>
      <footer className="p-4 bg-verdeo md:p-8 lg:p-10 dark:bg-gray-800 font-[Barlow]">

        <div className="mx-auto max-w-screen-xl text-center font-bold">
          {/* Logo */}
          <a
            href="#"
            className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img className="h-40 inline" src="./logo.png" alt="" />
          </a>
          {/* Descripción */}
          <p className="my-6 text-white dark:text-gray-400">
            Un gran hotel para los venezolanos.
          </p>
          {/* Enlaces */}
          <ul className="flex flex-wrap justify-center items-center mb-6 text-white space-x-4 md:space-x-6">
            {/* Utilizar la clase space-x-6 */}
            <li>
              <Link to="/" className="hover:underline hover:text-rojo" onClick={toggleLoading}>
                Inicio
              </Link>{" "}
            </li>
            {!isTokenPresent && (
              <>
                <li>
                  <Link
                    to="/Registro"
                    className="hover:underline hover:text-rojo"
                  >
                    Registro
                  </Link>
                </li>
                <li>
                  <Link to="/Login" className="hover:underline hover:text-rojo">
                    Login
                  </Link>
                </li>
              </>
            )}
            {isTokenPresent && user?.rol === "admin" && (
              <>
                <li>
                  <Link
                    to="/Inventario"
                    className="hover:underline hover:text-rojo"
                  >
                    Inventario
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Admin"
                    className={`hover:underline hover:text-rojo ${
                      location.pathname === "/Registro" ? "hidden" : ""
                    }`}
                  >
                    Admin
                  </Link>
                </li>
              </>
            )}
          </ul>
          {/* Derechos de autor */}
          <span className="text-sm text-white sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="#" className="hover:underline">
              JMLJ™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;