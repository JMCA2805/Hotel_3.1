import React, { useState, useContext } from "react";
import axios from "axios";
import { Link, useNavigate} from "react-router-dom";
import Swal from 'sweetalert2';
import AuthProvider, {AuthContext} from "../context/AuthProvider";// Ruta relativa al archivo AuthProvider


const API = import.meta.env.VITE_LOGIN_URL;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { getDecodedData } = useContext(AuthContext); // Obtener la función getDecodedData del contexto



  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
  
    try {
      const response = await axios.post(API, {
        correo: email,
        contraseña: password,
      });
  
      const { token } = response.data.usuario;
  
      // Guardar el token como una cookie
      document.cookie = `token=${token}; path=/`;
  
      Swal.fire({
        icon: 'success',
        title: 'Inicio de sesión exitoso',
        text: '¡Bienvenido!',
      }).then(() => {
        getDecodedData();
        navigate("/")
        
      });
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
  
      Swal.fire({
        icon: 'error',
        title: 'Error al iniciar sesión',
        text: 'Por favor, verifica tus credenciales e intenta nuevamente.',
      });
    }
  };

  return (
    <section className="bg-MoradoO dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white mb-7"
        >
          <img className="h-40 inline " src="./logo.png" alt="" />
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Accede a tu cuenta
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-verdeo focus:border-rojo block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Contraseña
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-verdeo focus:border-rojo block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-MoradoC text-white bg-verdeo hover:bg-rojo focus:ring-4 focus:outline-none focus:shadow-verdeo dark:bg-verdeo dark:hover:bg-primary-600 dark:focus:shadow-primary-500 rounded-lg py-3.5 font-semibold text-center"
              >
                Ingresar
              </button>
            </form>
          </div>
          <div className="flex items-center justify-center p-4 bg-gray-100 border-t dark:bg-gray-900 dark:border-gray-700">
            <span className="text-sm text-gray-600 dark:text-gray-200">
              ¿No tienes una cuenta?{" "}
              <Link
                to="/"
                className="text-verdeo font-bold hover:text-rojo dark:text-verdeo"
              >
                Registro
              </Link>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
