import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const API = import.meta.env.VITE_GETRESERVAS_URL;
const APIEDIT = import.meta.env.VITE_EDIT_URL;

const TablaR = () => {
  const [reservas, setReservas] = useState([]);
  const [reservaSeleccionada, setReservaSeleccionada] = useState(null);
  const [datosActualizados, setDatosActualizados] = useState({});

  const [fechaI, setFechaI] = useState("");
  const [fechaF, setFechaF] = useState("");

  useEffect(() => {
    // Lógica para obtener los datos de los reservas desde el backend
    axios
      .get(API)
      .then((response) => {
        setReservas(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const editarReserva = (reserva) => {
    console.log(reserva);
    setReservaSeleccionada(reserva);
    setDatosActualizados({ ...reserva });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDatosActualizados({ ...datosActualizados, [name]: value });
  };

  const FechaTrans = (fecha) => {
    const fechaFormateada = new Date(fecha).toISOString().slice(0, 10);
    return fechaFormateada;
  };
  const actualizarReserva = (event) => {
    event.preventDefault(); // Evita que la página se reinicie por defecto

    axios
      .put(APIEDIT, {
        correo: reservaSeleccionada.correo,
        datosActualizados,
      })
      .then((response) => {
        const reservasActualizadas = reservas.map((reserva) => {
          if (reserva.correo === reservaSeleccionada.correo) {
            return { ...reserva, ...datosActualizados };
          }
          return reserva;
        });
        setReservas(reservasActualizadas);

        setReservaSeleccionada(null);
        setDatosActualizados({});

        // Mensaje de confirmación
        Swal.fire({
          icon: "success",
          title: "Reserva actualizado",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.error("Error al actualizar el reserva:", error);

        // Mensaje de error
        Swal.fire({
          icon: "error",
          title: "Error al actualizar el reserva",
          text: "Ocurrió un error al actualizar los datos del reserva. Por favor, inténtalo nuevamente.",
        });
      });
  };

  return (
    <div className="font-[Barlow] mb-8">
      <div className="bg-MoradoC dark:bg-MoradoO rounded-lg p-4 mx-4 mt-4 sm:mx-28 mb-8 border dark:border-VerdeC border-MoradoO">
        <h2 className="text-white text-3xl font-bold text-center">
          Lista de Reservas
        </h2>
      </div>
      {reservas.length === 0 ? (
        <div className="flex w-full justify-center items-center text-white">
          <p>No hay reservas disponibles.</p>
        </div>
      ) : (
        <div className="w-full px-10 h-full">
          <div className="overflow-x-auto p-8 w-full h-full rounded-xl dark:bg-MoradoO/50 bg-Moradote/50">
            <div className="inline-block min-w-full shadow rounded-xl overflow-hidden h-full dark:border-VerdeC border border-MoradoO">
              <table className="min-w-full leading-normal  sm:text-xs md:text-sm text-left text-white dark:text-white mb-6">
                <thead className="text-white bg-MoradoC dark:bg-MoradoO dark:text-white border-b dark:border-VerdeC border-MoradoO">
                  <tr className="text-center">
                    <th
                      scope="col"
                      className="sm:p-2 md:px-6 md:py-3 text-center"
                    >
                      Nombre
                    </th>
                    <th
                      scope="col"
                      className="sm:p-2 md:px-6 md:py-3 text-center"
                    >
                      Apellido
                    </th>
                    <th
                      scope="col"
                      className="sm:p-2 md:px-6 md:py-3 text-center"
                    >
                      Correo
                    </th>
                    <th
                      scope="col"
                      className="sm:p-2 md:px-6 md:py-3 text-center"
                    >
                      Cedula
                    </th>
                    <th
                      scope="col"
                      className="sm:p-2 md:px-6 md:py-3 text-center"
                    >
                      Teléfono
                    </th>
                    <th
                      scope="col"
                      className="sm:p-2 md:px-6 md:py-3 text-center"
                    >
                      Fecha de Entrada
                    </th>
                    <th
                      scope="col"
                      className="sm:p-2 md:px-6 md:py-3 text-center"
                    >
                      Fecha de Salida
                    </th>
                    <th
                      scope="col"
                      className="sm:p-2 md:px-6 md:py-3 text-center"
                    >
                      Numero de Personas
                    </th>
                    <th
                      scope="col"
                      className="sm:p-2 md:px-6 md:py-3 text-center"
                    >
                      Tipo de Habitación
                    </th>
                    <th
                      scope="col"
                      className="sm:p-2 md:px-6 md:py-3 text-center"
                    >
                      Opciones
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Array.isArray(reservas) ? (
                    reservas.map((reserva) => (
                      <tr key={reserva.id}>
                        <td className="sm:p-2 md:px-6 md:py-3 text-center">
                          {reserva.nombre}
                        </td>
                        <td className="sm:p-2 md:px-6 md:py-3 text-center">
                          {reserva.apellido}
                        </td>
                        <td className="sm:p-2 md:px-6 md:py-3 text-center">
                          {reserva.correo}
                        </td>
                        <td className="sm:p-2 md:px-6 md:py-3 text-center">
                          {reserva.cedula}
                        </td>
                        <td className="sm:p-2 md:px-6 md:py-3 text-center">
                          {reserva.telefono}
                        </td>
                        <td className="sm:p-2 md:px-6 md:py-3 text-center">
                          {FechaTrans(reserva.fechaEntrada)}
                        </td>
                        <td className="sm:p-2 md:px-6 md:py-3 text-center">
                          {FechaTrans(reserva.fechaSalida)}
                        </td>
                        <td className="sm:p-2 md:px-6 md:py-3 text-center">
                          {reserva.nPersonas}
                        </td>
                        <td className="sm:p-2 md:px-6 md:py-3 text-center">
                          {reserva.tHabitacion}
                        </td>
                        <td className="sm:p-2 md:px-6 md:py-3 text-center">
                          <div className="flex items-center">
                            <button
                              className="text-white px-4 py-2 rounded-lg mr-2 bg-Moradote focus:outline-none focus:text-white border-b-4 dark:border-VerdeC border-MoradoO hover:bg-Moradote/50 dark:hover:bg-MoradoC/70 focus-within:bg-MoradoO"
                              onClick={() => {
                                editarReserva(reserva);
                                setFechaI(FechaTrans(reserva.fechaEntrada));
                                setFechaF(FechaTrans(reserva.fechaSalida));
                              }}
                            >
                              Editar
                            </button>
                            {/* Otros botones de acción */}
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="7">Cargando reservas...</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
      {reservaSeleccionada && (
        <div className="mx-24 font-[Barlow] bg-MoradoC dark:bg-MoradoO rounded-lg p-4 text-white mt-8 border dark:border-VerdeC border-MoradoO">
          <h2 className="text-lg font-semibold">Editar reserva</h2>
          <form>
            <div className="grid grid-cols-2 gap-4">
              <div className="mb-4">
                <label className="block font-medium mb-2" htmlFor="nombre">
                  Nombre
                </label>
                <input
                  className="w-full p-2 border border-verdeo rounded-md bg-MoradoO/30 border-MoradoO text-white placeholder:text-white/50 focus:border-2 focus:border-MoradoO focus:ring-0 dark:border-VerdeC/50 dark:focus:border-VerdeC"
                  type="text"
                  id="nombre"
                  value={datosActualizados.nombre || ""}
                  onChange={handleInputChange}
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
                  value={datosActualizados.apellido || ""}
                  onChange={handleInputChange}
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
                  value={datosActualizados.cedula || ""}
                  onChange={handleInputChange}
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
                  value={datosActualizados.correo || ""}
                  onChange={handleInputChange}
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
                  value={datosActualizados.telefono || ""}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block font-medium mb-2"
                  htmlFor="fechaEntrada"
                >
                  Fecha de entrada
                </label>
                <input
                  className="w-full p-2 border border-verdeo rounded-md  bg-MoradoO/30 border-MoradoO text-white placeholder:text-white/50 focus:border-2 focus:border-MoradoO focus:ring-0 dark:border-VerdeC/50 dark:focus:border-VerdeC"
                  type="date"
                  id="fechaEntrada"
                  value={fechaI || ""}
                  onChange={handleInputChange}
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
                  value={fechaF || ""}
                  onChange={handleInputChange}
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
                  value={datosActualizados.nPersonas || ""}
                  onChange={handleInputChange}
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
                  value={datosActualizados.tHabitacion || ""}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Seleccionar tipo</option>
                  <option value="normal">Normal</option>
                  <option value="vip">VIP</option>
                  <option value="presidencial">Presidencial</option>
                </select>
              </div>
            </div>
            {/* Otros campos de reserva */}
            <div className="flex mt-4">
              <button
                type="submit"
                className="text-white px-4 py-2 rounded-lg mr-2 bg-Moradote focus:outline-none focus:text-white border-b-4 dark:border-VerdeC border-MoradoO hover:bg-Moradote/50 dark:hover:bg-MoradoC/70 focus-within:bg-MoradoO"
                onClick={() => {
                  setReservaSeleccionada(null);
                }}
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="text-white px-4 py-2 rounded-lg mr-2 bg-Moradote focus:outline-none focus:text-white border-b-4 dark:border-VerdeC border-MoradoO hover:bg-Moradote/50 dark:hover:bg-MoradoC/70 focus-within:bg-MoradoO"
                onClick={actualizarReserva}
              >
                Guardar
              </button>
            </div>
          </form>
        </div>
      )}{" "}
    </div>
  );
};

export default TablaR;
