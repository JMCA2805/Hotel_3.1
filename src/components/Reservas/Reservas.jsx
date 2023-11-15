import React, { useState, useContext } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const API = import.meta.env.VITE_RESERVATION_URL;

const ReservationForm = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [cedula, setCedula] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [fechaEntrada, setFechaEntrada] = useState("");
  const [fechaSalida, setFechaSalida] = useState("");
  const [nPersonas, setNPersonas] = useState("");
  const [tHabitacion, setTHabitacion] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { user } = useContext(AuthContext); // Access the user's id from the user context

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Verificar que los campos obligatorios no estén vacíos
    if (
      !nombre ||
      !apellido ||
      !cedula ||
      !correo ||
      !telefono ||
      !fechaEntrada ||
      !fechaSalida ||
      !nPersonas ||
      !tHabitacion
    ) {
      setError("Por favor, completa todos los campos.");
      return;
    }

    const reserva = {
      idUsuario: user.id,
      nombre,
      apellido,
      cedula,
      correo,
      telefono,
      fechaEntrada,
      fechaSalida,
      nPersonas,
      tHabitacion,
    };

    try {
      const response = await axios.post(API, reserva);

      // Mostrar mensaje de confirmación con SweetAlert2
      Swal.fire({
        icon: "success",
        title: "Reserva realizada",
        text: "La reserva se ha realizado exitosamente.",
      }).then(() => {
        navigate("/");
      });
    } catch (error) {
      setError("Ocurrió un error al realizar la reserva");
      console.error(error);

      // Mostrar mensaje de error con SweetAlert2
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Ocurrió un error al realizar la reserva.",
      });
    }
  };

  return (
    <div className="flex justify-center items-center my-8 md:px-4 lg:px-8 m-auto py-0 md:py-16 font-poppins bg-Moradote/50 dark:bg-MoradoO/50 mx-4 rounded-2xl gap-8 md:gap-0 dark:border border-MoradoO dark:border-VerdeC/50">
      <form className="bg-Moradote p-8 rounded-lg shadow-lg w-full max-w-xl dark:bg-MoradoO border-MoradoO dark:border-VerdeC dark:border text-white">
        <h2 className="text-2xl font-semibold mb-6">Reservar</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="block font-medium mb-2" htmlFor="nombre">
              Nombre
            </label>
            <input
              className="w-full p-2 border border-verdeo rounded-md bg-MoradoO/30 border-MoradoO text-white placeholder:text-white/50 focus:border-2 focus:border-MoradoO focus:ring-0 dark:border-VerdeC/50 dark:focus:border-VerdeC"
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
              className="w-full p-2 border border-verdeo rounded-md  bg-MoradoO/30 border-MoradoO text-white placeholder:text-white/50 focus:border-2 focus:border-MoradoO focus:ring-0 dark:border-VerdeC/50 dark:focus:border-VerdeC"
              type="text"
              id="apellido"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-2" htmlFor="cedula">
              Cédula
            </label>
            <input
              className="w-full p-2 border border-verdeo rounded-md  bg-MoradoO/30 border-MoradoO text-white placeholder:text-white/50 focus:border-2 focus:border-MoradoO focus:ring-0 dark:border-VerdeC/50 dark:focus:border-VerdeC"
              type="text"
              id="cedula"
              value={cedula}
              onChange={(e) => setCedula(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-2" htmlFor="correo">
              Correo electrónico
            </label>
            <input
              className="w-full p-2 border border-verdeo rounded-md  bg-MoradoO/30 border-MoradoO text-white placeholder:text-white/50 focus:border-2 focus:border-MoradoO focus:ring-0 dark:border-VerdeC/50 dark:focus:border-VerdeC"
              type="email"
              id="correo"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-2" htmlFor="telefono">
              Teléfono
            </label>
            <input
              className="w-full p-2 border border-verdeo rounded-md  bg-MoradoO/30 border-MoradoO text-white placeholder:text-white/50 focus:border-2 focus:border-MoradoO focus:ring-0 dark:border-VerdeC/50 dark:focus:border-VerdeC"
              type="tel"
              id="telefono"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-2" htmlFor="fechaEntrada">
              Fecha de entrada
            </label>
            <input
              className="w-full p-2 border border-verdeo rounded-md  bg-MoradoO/30 border-MoradoO text-white placeholder:text-white/50 focus:border-2 focus:border-MoradoO focus:ring-0 dark:border-VerdeC/50 dark:focus:border-VerdeC"
              type="date"
              id="fechaEntrada"
              value={fechaEntrada}
              onChange={(e) => setFechaEntrada(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-2" htmlFor="fechaSalida">
              Fecha de salida
            </label>
            <input
              className="w-full p-2 border border-verdeo rounded-md  bg-MoradoO/30 border-MoradoO text-white placeholder:text-white/50 focus:border-2 focus:border-MoradoO focus:ring-0 dark:border-VerdeC/50 dark:focus:border-VerdeC"
              type="date"
              id="fechaSalida"
              value={fechaSalida}
              onChange={(e) => setFechaSalida(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-2" htmlFor="nPersonas">
              Número de personas
            </label>
            <input
              className="w-full p-2 border border-verdeo rounded-md  bg-MoradoO/30 border-MoradoO text-white placeholder:text-white/50 focus:border-2 focus:border-MoradoO focus:ring-0 dark:border-VerdeC/50 dark:focus:border-VerdeC"
              type="number"
              id="nPersonas"
              value={nPersonas}
              onChange={(e) => setNPersonas(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-2" htmlFor="tHabitacion">
              Tipo de habitación
            </label>
            <select
              className="w-full p-2 border border-verdeo rounded-md  bg-MoradoO/30 focus:bg-MoradoO dark:bg-MoradoO  border-MoradoO text-white placeholder:text-white/50 focus:border-2 focus:border-MoradoO focus:ring-0 dark:border-VerdeC/50 dark:focus:border-VerdeC"
              id="tHabitacion"
              value={tHabitacion}
              onChange={(e) => setTHabitacion(e.target.value)}
              required
            >
              <option value="">Seleccionar tipo</option>
              <option value="normal">Normal</option>
              <option value="vip">VIP</option>
              <option value="presidencial">Presidencial</option>
            </select>
          </div>
          {error && (
            <div className="text-red-500 text-sm mb-4 col-span-2">{error}</div>
          )}
          <button
            className="py-2 px-4 rounded-md w-full col-span-2  border-b-4 dark:border-VerdeC border-MoradoO hover:bg-MoradoO/50 dark:hover:bg-MoradoC/70 focus-within:bg-MoradoO text-white bg-MoradoO/30 dark:bg-Moradote"
            type="submit"
            onClick={handleSubmit}
          >
            Reservar
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReservationForm;
