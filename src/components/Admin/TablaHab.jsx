import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const API = import.meta.env.VITE_GETHAB_URL;
const APIDELETE = import.meta.env.VITE_DELETEHAB_URL
const APIEDIT = import.meta.env.VITE_EDITHAB_URL

const ArticuloTable = () => {
  const [habitaciones, setHabitaciones] = useState([]);
  const [habitacionSeleccionada, setHabitacionSeleccionada] = useState(null);
  const [datosActualizados, setDatosActualizados] = useState({});
  const [imagen, setImagen] = useState('');


  useEffect(() => {
    axios
      .get(API)
      .then((response) => {
        if (Array.isArray(response.data)) {
          setHabitaciones(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDatosActualizados({ ...datosActualizados, [name]: value });
  };

  const editarArticulo = (habitacion) => {
    setHabitacionSeleccionada(habitacion);
    setDatosActualizados({ ...habitacion });
  };

  const actualizarHabitacion = (event) => {
    event.preventDefault(); // Evita que la página se reinicie por defecto

    const formData = new FormData();
    formData.append("nombre", datosActualizados.nombre);
    formData.append("nombreviejo", habitacionSeleccionada.nombre)
    formData.append("descripcion", datosActualizados.descripcion);
    formData.append("tarifa", datosActualizados.tarifa);
    formData.append("cantidad", datosActualizados.cantidad);
    formData.append("imagen", imagen);
  

    axios
    .put(APIEDIT, formData)
    .then((response) => {
      // Obtener la URL de la imagen actualizada del cuerpo de la respuesta

      const imagenActualizada = response.data.imagen;
  
      const habitacionesActualizadas = habitaciones.map((habitacion) => {
        if (habitacion.nombre === habitacionSeleccionada.nombre) {
          // Actualizar todos los datos de la habitación seleccionada
          return {
            ...habitacion,
            nombre: datosActualizados.nombre,
            descripcion: datosActualizados.descripcion,
            tarifa: datosActualizados.tarifa,
            cantidad: datosActualizados.cantidad,
            imagen: imagenActualizada,
          };
        }
        return habitacion;
      });
  
      setHabitaciones(habitacionesActualizadas);

        setHabitacionSeleccionada(null);
        setDatosActualizados({});

        // Mensaje de confirmación
        Swal.fire({
          icon: "success",
          title: "Habitación actualizada",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.error("Error al actualizar la habitación:", error);

        // Mensaje de error
        Swal.fire({
          icon: "error",
          title: "Error al actualizar la habitación",
          text: "Ocurrió un error al actualizar los datos dla habitación. Por favor, inténtalo nuevamente.",
        });
      });
  };
  

  const eliminarArticulo = (nombre) => {
    // Mostrar confirmación con SweetAlert
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Esta acción eliminará la habitación. ¿Deseas continuar?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(APIDELETE, { data: { nombre: nombre } })
          .then((response) => {
            // Filtra los articulos y excluye al articulo eliminado
            const habitacionesActualizadas = habitaciones.filter(
              (habitacion) => habitacion.nombre !== nombre
            );
            setHabitaciones(habitacionesActualizadas);
  
            // Mensaje de confirmación
            Swal.fire({
              icon: "success",
              title: "Habitación eliminada",
              showConfirmButton: false,
              timer: 1500,
            });
          })
          .catch((error) => {
            console.error("Error al eliminar la habitación:", error);
  
            // Mensaje de error
            Swal.fire({
              icon: "error",
              title: "Error al eliminar la habitación",
              text:
                "Ocurrió un error al eliminar la habitación. Por favor, inténtalo nuevamente.",
            });
          });
      }
    });
  };

  return (
    <div className="font-[Barlow] mb-8">
      <div className="bg-MoradoC dark:bg-MoradoO rounded-lg p-4 mx-4 mt-4 sm:mx-28 mb-8 border dark:border-VerdeC border-MoradoO">
        <h2 className="text-white text-3xl font-bold text-center">Lista de Habitaciones</h2>
      </div>
      {habitaciones.length === 0 ? (
        <div className="flex w-full justify-center items-center text-white">
          <p>No hay artículos disponibles.</p>
        </div>
      ) : (
        <div className="w-full px-10 h-full">
          <div className="overflow-x-auto p-8 w-full h-full rounded-xl dark:bg-MoradoO/50 bg-Moradote/50">
            <div className="inline-block min-w-full shadow rounded-xl overflow-hidden h-full dark:border-VerdeC border border-MoradoO">
              <table className="min-w-full leading-normal sm:text-xs md:text-sm text-left text-white dark:text-white mb-6">
                <thead className="text-white bg-MoradoC dark:bg-MoradoO dark:text-white border-b dark:border-VerdeC border-MoradoO">
                  <tr className="text-center">
                    <th scope="col" className="sm:p-2 md:px-6 md:py-3 text-center">
                      Nombre
                    </th>
                    <th scope="col" className="sm:p-2 md:px-6 md:py-4 whitespace-nowrap overflow-y-auto max-h-40">
                      Descripción
                    </th>
                    <th scope="col" className="sm:p-2 md:px-6 md:py-4 whitespace-nowrap overflow-y-auto max-h-40">
                      Comodidades
                    </th>
                    <th scope="col" className="sm:p-2 md:px-6 md:py-4 whitespace-nowrap overflow-y-auto max-h-40">
                      Tarifa
                    </th>
                    <th scope="col" className="sm:p-2 md:px-6 md:py-4 whitespace-nowrap overflow-y-auto max-h-40">
                      Limite de Personas
                    </th>
                    <th scope="col" className="sm:p-2 md:px-6 md:py-4 whitespace-nowrap overflow-y-auto max-h-40">
                      Reviews
                    </th>
                    <th scope="col" className="sm:p-2 md:px-6 md:py-3 text-center">
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {habitaciones.map((habitacion) => (
                    <tr key={habitacion.id} className="text-center">
                      <td className="sm:p-2 md:px-6 md:py-4 whitespace-nowrap">
                        {habitacion.nombre}
                      </td>
                      <td className="sm:p-2 md:px-6 md:py-4 whitespace-nowrap overflow-y-auto max-h-40">
                        {habitacion.descripcion}
                      </td>
                      <td className="sm:p-2 md:px-6 md:py-4 whitespace-nowrap overflow-y-auto max-h-40">
        <ul className="list-disc list-inside">
          {habitacion.comodidades.map((comodidad) => (
            <li key={comodidad}>{comodidad}</li>
          ))}
        </ul>
      </td>
                      <td className="sm:p-2 md:px-6 md:py-4 whitespace-nowrap overflow-y-auto max-h-40">
                        {habitacion.tarifa}
                      </td>
                      <td className="sm:p-2 md:px-6 md:py-4 whitespace-nowrap overflow-y-auto max-h-40">
                        {habitacion.cantidad}
                      </td>
                      <td className="sm:p-2 md:px-6 md:py-4 whitespace-nowrap">
                        <img
                          src={habitacion.imagen}
                          alt={habitacion.nombre}
                          className="w-20 h-20 object-cover rounded-full mx-auto"
                        />
                      </td>
                      <td className="sm:p-2 md:px-6 md:py-4 whitespace-nowrap">
                        <button
                className="text-white px-4 py-2 rounded-lg mr-2 bg-Moradote focus:outline-none focus:text-white border-b-4 dark:border-VerdeC border-MoradoO hover:bg-Moradote/50 dark:hover:bg-MoradoC/70 focus-within:bg-MoradoO"
                onClick={() => editarArticulo(habitacion)}
                        >
                          Editar
                        </button>
                        <button
                className="text-white px-4 py-2 rounded-lg mr-2 bg-Moradote focus:outline-none focus:text-white border-b-4 dark:border-VerdeC border-MoradoO hover:bg-Moradote/50 dark:hover:bg-MoradoC/70 focus-within:bg-MoradoO"
                onClick={() => eliminarArticulo(habitacion.nombre)}
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
      {habitacionSeleccionada && (
       <div className="bg-MoradoC dark:bg-MoradoO rounded-lg p-4 mx-4 sm:mx-28 mb-8 border dark:border-VerdeC border-MoradoO">
       <h2 className="text-white text-3xl font-bold text-center">Editar Artículo</h2>
       <form className="mt-4 text-white">
         <div className="mb-4">
           <label htmlFor="nombre" className="block text-xl font-bold mb-2">
             Título:
           </label>
           <input
             type="text"
             id="nombre"
             name="nombre"
             value={datosActualizados.nombre || ""}
             onChange={handleInputChange}
             className="w-full px-3 py-2 rounded-lg bg-MoradoO dark:bg-MoradoC border border-MoradoO dark:border-VerdeC focus:outline-none focus:border-VerdeC"
           />
         </div>
         <div className="mb-4">
           <label htmlFor="descripcion" className="block text-xl font-bold mb-2">
             Descripcion:
           </label>
           <input
             type="text"
             id="descripcion"
             name="descripcion"
             value={datosActualizados.descripcion || ""}
             onChange={handleInputChange}
             className="w-full px-3 py-2 rounded-lg bg-MoradoO dark:bg-MoradoC border border-MoradoO dark:border-VerdeC focus:outline-none focus:border-VerdeC"
           />
         </div>
         <div className="mb-4">
           <label htmlFor="tarifa" className="block text-xl font-bold mb-2">
             Tarifa:
           </label>
           <input
             type="text"
             id="tarifa"
             name="tarifa"
             value={datosActualizados.tarifa || ""}
             onChange={handleInputChange}
             className="w-full px-3 py-2 rounded-lg bg-MoradoO dark:bg-MoradoC border border-MoradoO dark:border-VerdeC focus:outline-none focus:border-VerdeC"
           />
         </div>
         <div className="mb-4">
           <label htmlFor="cantidad" className="block text-xl font-bold mb-2">
             Limite de Personas:
           </label>
           <input
             type="text"
             id="cantidad"
             name="cantidad"
             value={datosActualizados.cantidad || ""}
             onChange={handleInputChange}
             className="w-full px-3 py-2 rounded-lg bg-MoradoO dark:bg-MoradoC border border-MoradoO dark:border-VerdeC focus:outline-none focus:border-VerdeC"
           />
         </div>
         
         <div className="mb-4">
           <label>
             Foto dla habitación:
             <input
               className="block w-full text-sm text-VerdeO border border-gray-300 rounded-lg cursor-pointer bg-VerdeO dark:text-white focus:outline-none dark:bg-VerdeO dark:border-gray-VerdeO dark:placeholder-VerdeO"
               id="file_input"
               type="file"
               onChange={(e) => {
                 setImagen(e.target.files[0]);
               }}
               name="imagen"
             />
           </label>
         </div>
            <div className="flex justify-center">
              <button
                type="button"
                className="bg-VerdeC hover:bg-VerdeO text-white font-bold py-2 px-4 rounded mx-1"
                onClick={actualizarHabitacion}
              >
                Actualizar
              </button>
              <button
                type="button"
                className="bg-RojoC hover:bg-RojoO text-white font-bold py-2 px-4 rounded mx-1"
                onClick={() => setHabitacionSeleccionada(null)}
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ArticuloTable;