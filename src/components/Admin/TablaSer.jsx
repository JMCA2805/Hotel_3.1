import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const API = import.meta.env.VITE_GETSER_URL;
const APIDELETE = import.meta.env.VITE_DELSER_URL;

const TablaSer = () => {
  const [servicios, setServicios] = useState([]);

  useEffect(() => {
    // Lógica para obtener los datos de los servicios desde el backend
    axios
      .get(API)
      .then((response) => {
        setServicios(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const eliminarServicio = (ser) => {
    // Mostrar confirmación con SweetAlert
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Esta acción eliminará el servicio. ¿Deseas continuar?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(APIDELETE, { data: {
            servicio: ser,
          }})
          .then((response) => {
            // Filtra los servicios y excluye la servicio eliminada
            const datosActualizados = servicios.filter(
              (servicio) => servicio.servicio !== ser
            );
            setServicios(datosActualizados);

            // Mensaje de confirmación
            Swal.fire({
              icon: "success",
              title: "servicio eliminada",
              showConfirmButton: false,
              timer: 1500,
            });
          })
          .catch((error) => {
            console.error("Error al eliminar el servicio:", error);

            // Mensaje de error
            Swal.fire({
              icon: "error",
              title: "Error al eliminar el servicio",
              text: "Ocurrió un error al eliminar el servicio. Por favor, inténtalo nuevamente.",
            });
          });
      }
    });
  };

  return (
    <div className="font-[Barlow] mb-8">
      <div className="bg-MoradoC dark:bg-MoradoO rounded-lg p-4 mx-4 mt-4 sm:mx-28 mb-8 border dark:border-VerdeC border-MoradoO">
        <h2 className="text-white text-3xl font-bold text-center">
          Lista de Servicios
        </h2>
      </div>
      {servicios.length === 0 ? (
        <div className="flex w-full justify-center items-center text-white">
          <p>No hay servicios disponibles.</p>
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
                      Servicio
                    </th>
                    <th
                      scope="col"
                      className="sm:p-2 md:px-6 md:py-3 text-center"
                    >
                      Descripcion
                    </th>
                    <th
                      scope="col"
                      className="sm:p-2 md:px-6 md:py-3 text-center"
                    >
                      Icono
                    </th>
                    <th
                      scope="col"
                      className="sm:p-2 md:px-6 md:py-3 text-center"
                    >
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Array.isArray(servicios) ? (
                    servicios.map((servicio,index) => (
                      <tr key={servicio.index}>
                        <td className="sm:p-2 md:px-6 md:py-3 text-center">
                          {servicio.servicio}
                        </td>
                        <td className="sm:p-2 md:px-6 md:py-3 text-center">
                          {servicio.descripcion}
                        </td>
                        <td className="sm:p-2 md:px-6 md:py-3 text-center">
                          <img
                            src={servicio.imagen}
                            alt={servicio.servicio}
                            className="w-20 h-20 object-cover rounded-full mx-auto"
                          />
                        </td>
                        <td className="sm:p-2 md:px-6 md:py-3 text-center">
                          <div className="flex items-center">
                            <button
                              className="text-white px-4 py-2 rounded-lg mr-2 bg-Moradote focus:outline-none focus:text-white border-b-4 dark:border-VerdeC border-MoradoO hover:bg-Moradote/50 dark:hover:bg-MoradoC/70 focus-within:bg-MoradoO"
                              onClick={() => {
                                //accion
                              }}
                            >
                              Editar
                            </button>
                            <button
                              className="text-white px-4 py-2 rounded-lg mr-2 bg-Moradote focus:outline-none focus:text-white border-b-4 dark:border-VerdeC border-MoradoO hover:bg-Moradote/50 dark:hover:bg-MoradoC/70 focus-within:bg-MoradoO"
                              onClick={() => {
                                eliminarServicio(servicio.servicio);
                              }}
                            >
                              Borrar
                            </button>
                            {/* Otros botones de acción */}
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="7">Cargando servicios...</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TablaSer;
