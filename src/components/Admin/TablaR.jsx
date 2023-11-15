import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const API = import.meta.env.VITE_GETRESERVAS_URL;
const APIEDIT = import.meta.env.VITE_EDIT_URL;


const TablaR = () => {
  const [reservas, setReservas] = useState([]);
  const [reservaSeleccionada, setReservaSeleccionada] = useState(null);
  const [datosActualizados, setDatosActualizados] = useState({}); 

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
    setReservaSeleccionada(reserva);
    setDatosActualizados({ ...reserva });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDatosActualizados({ ...datosActualizados, [name]: value });
  };

  const actualizarUsuario = (event) => {
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
        icon: 'success',
        title: 'Reserva actualizado',
        showConfirmButton: false,
        timer: 1500,
      });
    })
    .catch((error) => {
      console.error('Error al actualizar el reserva:', error);

      // Mensaje de error
      Swal.fire({
        icon: 'error',
        title: 'Error al actualizar el reserva',
        text: 'Ocurrió un error al actualizar los datos del reserva. Por favor, inténtalo nuevamente.',
      });
    });
};

  return (
    <div className="overflow-x-auto font-[Barlow] mb-8">
              <div className="bg-MoradoC dark:bg-MoradoO rounded-lg p-4 mx-4 mt-4 sm:mx-28 mb-8">
          <h2 className="text-white text-3xl font-bold text-center">Lista de Reservas</h2>
        </div>
      {reservas.length === 0 ? (
        <p>No hay reservas disponibles.</p>
      ) : (
        <table className="sm:text-xs md:text-sm text-left text-white dark:text-white mb-6  mx-10">
          <thead className="text-white bg-MoradoC dark:bg-MoradoO dark:text-white">
            <tr className="text-center">
              <th scope="col" className="sm:p-2 md:px-6 md:py-3 text-center">
                Nombre
              </th>
              <th scope="col" className="sm:p-2 md:px-6 md:py-3 text-center">
                Apellido
              </th>
              <th scope="col" className="sm:p-2 md:px-6 md:py-3 text-center">
                Correo
              </th>
              <th scope="col" className="sm:p-2 md:px-6 md:py-3 text-center">
                Cedula
              </th>
              <th scope="col" className="sm:p-2 md:px-6 md:py-3 text-center">
                Teléfono
              </th>
              <th scope="col" className="sm:p-2 md:px-6 md:py-3 text-center">
                Fecha de Entrada
              </th>
              <th scope="col" className="sm:p-2 md:px-6 md:py-3 text-center">
                Fecha de Salida
              </th>
              <th scope="col" className="sm:p-2 md:px-6 md:py-3 text-center">
                Numero de Personas
              </th>
              <th scope="col" className="sm:p-2 md:px-6 md:py-3 text-center">
                Tipo de Habitación
              </th>
              <th scope="col" className="sm:p-2 md:px-6 md:py-3 text-center">
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
                    {reserva.fechaEntrada}
                  </td>
                  <td className="sm:p-2 md:px-6 md:py-3 text-center">
                    {reserva.fechaSalida}
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
                        className="text-white bg-verdeo hover:bg-blue-800 px-4 py-2 rounded-lg mr-2"
                        onClick={() => editarReserva(reserva)}
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
      )}

{reservaSeleccionada && (
  <div className="mx-24 font-[Barlow]">
    <h2 className="text-lg font-semibold">Editar reserva</h2>
    <form>
      <div className="flex flex-col mt-2">
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={datosActualizados.nombre || ""}
          onChange={handleInputChange}
          className="border border-gray-300 p-2 rounded-md"
        />
      </div>
      <div className="flex flex-col mt-2">
        <label htmlFor="apellido">Apellido:</label>
        <input
          type="text"
          id="apellido"
          name="apellido"
          value={datosActualizados.apellido || ""}
          onChange={handleInputChange}
          className="border border-gray-300 p-2 rounded-md"
        />
      </div>
      <div className="flex flex-col mt-2">
        <label htmlFor="cedula">Cédula:</label>
        <input
          type="text"
          id="cedula"
          name="cedula"
          value={datosActualizados.cedula || ""}
          onChange={handleInputChange}
          className="border border-gray-300 p-2 rounded-md"
        />
      </div>
      {/* Otros campos de reserva */}
      <div className="flex mt-4">
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded-lg mr-2"
          onClick={actualizarReserva}
        >
          Guardar
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-lg"
          onClick={cancelarEdicion}
        >
          Cancelar
        </button>
      </div>
    </form>
  </div>
)}  </div>
  );
};

export default TablaR;