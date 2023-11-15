import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_REGISTER_URL;

const RegisterForm = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [confirmContraseña, setConfirmContraseña] = useState("");
  const [contraseñasMatch, setContraseñasMatch] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Verificar que los campos obligatorios no estén vacíos
    if (!nombre || !apellido || !correo || !contraseña || !confirmContraseña) {
      setError("Por favor, completa todos los campos.");
      return;
    }

    if (contraseña !== confirmContraseña) {
      setContraseñasMatch(false);
      return;
    }

    const usuario = {
      nombre,
      apellido,
      correo,
      contraseña,
    };

    try {
      const response = await axios.post(API, usuario);

      // Mostrar mensaje de confirmación con SweetAlert2
      Swal.fire({
        icon: "success",
        title: "Usuario registrado",
        text: "El usuario se ha registrado exitosamente.",
      }).then(() => {
        navigate("/");
      });
    } catch (error) {
      setError("Ocurrió un error al registrar el usuario");
      console.error(error);

      // Mostrar mensaje de error con SweetAlert2
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Ocurrió un error al registrar el usuario.",
      });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-MoradoO dark:bg-black p-4">
      <form
        className="bg-Moradote p-8 rounded-lg shadow-lg w-96 dark:bg-MoradoO dark:border-VerdeC dark:border text-white"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-semibold mb-6">Registro</h2>
        <div className="mb-4">
          <label className="block font-medium mb-2" htmlFor="nombre">
            Nombre
          </label>
          <input
            className="w-full p-2 border rounded-md bg-MoradoO/30 border-MoradoO text-white placeholder:text-white/50 sm:text-sm focus:border-2 focus:border-MoradoO focus:ring-0 dark:border-VerdeC/50 dark:focus:border-VerdeC"
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-2" htmlFor="apellido">
            Apellido
          </label>
          <input
            className="w-full p-2 border rounded-md  bg-MoradoO/30 border-MoradoO text-white placeholder:text-white/50 sm:text-sm focus:border-2 focus:border-MoradoO focus:ring-0 dark:border-VerdeC/50 dark:focus:border-VerdeC"
            type="text"
            id="apellido"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-2" htmlFor="correo">
            Correo electrónico
          </label>
          <input
            className="w-full p-2 border rounded-md  bg-MoradoO/30 border-MoradoO text-white placeholder:text-white/50 sm:text-sm focus:border-2 focus:border-MoradoO focus:ring-0 dark:border-VerdeC/50 dark:focus:border-VerdeC"
            type="email"
            id="correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-2" htmlFor="contraseña">
            Contraseña
          </label>
          <input
            className="w-full p-2 border rounded-md  bg-MoradoO/30 border-MoradoO text-white placeholder:text-white/50 sm:text-sm focus:border-2 focus:border-MoradoO focus:ring-0 dark:border-VerdeC/50 dark:focus:border-VerdeC"
            type="password"
            id="contraseña"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block font-medium mb-2 "
            htmlFor="confirmContraseña"
          >
            Confirmar Contraseña
          </label>
          <input
            className={`w-full p-2 border rounded-md  bg-MoradoO/30 text-white placeholder:text-white/50 sm:text-sm focus:border-2 focus:ring-0 ${
              contraseñasMatch ? "dark:border-VerdeC/50 dark:focus:border-VerdeC  focus:border-MoradoO  border-MoradoO" : "border-red-500/50  focus:border-red-500"
            }`}
            type="password"
            id="confirmContraseña"
            value={confirmContraseña}
            onChange={(e) => {
              setConfirmContraseña(e.target.value);
              setContraseñasMatch(true);
            }}
            required
          />
          {!contraseñasMatch && (
            <p className="text-red-500 text-sm mt-1">
              Las contraseñas no coinciden.
            </p>
          )}
        </div>
        {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
        <button
          className="py-2 px-4 rounded-md w-full border-b-4 dark:border-VerdeC border-MoradoO hover:bg-MoradoO/50 dark:hover:bg-MoradoC/70 focus-within:bg-MoradoO text-white bg-MoradoO/30 dark:bg-Moradote"
          type="submit"
        >
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
