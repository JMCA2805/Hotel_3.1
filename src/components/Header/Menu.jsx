import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Menu = (props) => {
  const location = useLocation();
  const isTokenPresent = document.cookie.includes("token=");

  const { user, loggedIn, logout } = useContext(AuthContext);

  return (
    <>
      <div className="block px-2 md:px-0 py-3 space-y-2 md:space-y-0 md:space-x-2 font-semibold font-poppins text-base">
        <Link
          to="/"
          className="block md:inline-block px-3 py-2 rounded-md text-white bg-MoradoO/70 focus:outline-none focus:text-white hover:border-2 hover:border-VerdeO "
          onClick={props.toggleLVisibility}
        >
          Inicio
        </Link>
        <Link
          to="/Blog"
          className="block md:inline-block px-3 py-2 rounded-md text-white bg-MoradoO/70 focus:outline-none focus:text-white hover:border-2 hover:border-VerdeO "
          onClick={props.toggleLVisibility}
        >
          Blog
        </Link>
        <Link
          to="/Contactos"
          className="block md:inline-block px-3 py-2 rounded-md text-white bg-MoradoO/70 focus:outline-none focus:text-white hover:border-2 hover:border-VerdeO "
          onClick={props.toggleLVisibility}
        >
          Contactos
        </Link>

        {user.rol === "admin" && (
          <>
            <Link
              to="/Inventario"
              className="block md:inline-block px-3 py-2 rounded-md text-white bg-MoradoO/70 focus:outline-none focus:text-white hover:border-2 hover:border-VerdeO "
              onClick={props.toggleLVisibility}
            >
              Inventario
            </Link>

            <Link
              to="/Admin"
              className={`block md:inline-block px-3 py-2 rounded-md text-white bg-MoradoO/70 focus:outline-none focus:text-white hover:border-2 hover:border-VerdeO  ${
                location.pathname === "/Registro" ? "hidden" : ""
              }`}
              onClick={props.toggleLVisibility}
            >
              Admin
            </Link>
          </>
        )}

        {!isTokenPresent && (
          <>
            <Link
              to="/Login"
              className={`block md:inline-block px-3 py-2 rounded-md text-white bg-MoradoO/70 focus:outline-none focus:text-white hover:border-2 hover:border-VerdeO  ${
                location.pathname === "/Login" ? "hidden" : ""
              }`}
              onClick={props.toggleLVisibility}
            >
              Login
            </Link>

            <Link
              to="/Registro"
              className={`block md:inline-block px-3 py-2 rounded-md text-white bg-MoradoO/70 focus:outline-none focus:text-white hover:border-2 hover:border-VerdeO  ${
                location.pathname === "/Registro" ? "hidden" : ""
              }`}
              onClick={props.toggleLVisibility}
            >
              Registro
            </Link>
          </>
        )}

        {isTokenPresent && loggedIn && (
          <Link
            to="/"
            className="block md:inline-block px-3 py-2 rounded-md text-white bg-MoradoO/70 focus:outline-none focus:text-white hover:border-2 hover:border-VerdeO "
            onClick={logout} // Utilizar la función logout para realizar el logout
          >
            Logout
          </Link>
        )}
        {isTokenPresent && loggedIn && (
          <Link
            to="/Pfp"
            className="block md:inline-block px-3 py-2 rounded-md text-white bg-MoradoO/70 focus:outline-none focus:text-white hover:border-2 hover:border-VerdeO "
            onClick={props.toggleLVisibility}
          >
            Perfil
          </Link>
        )}
      </div>
    </>
  );
};

export default Menu;
