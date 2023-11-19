import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const API = import.meta.env.VITE_GETART_URL;
const APIDELETE = import.meta.env.VITE_DELETEART_URL

const ArticuloTable = () => {
  const [articulos, setArticulos] = useState([]);
  const [articuloSeleccionado, setArticuloSeleccionado] = useState(null);
  const [datosActualizados, setDatosActualizados] = useState({});

  useEffect(() => {
    axios
      .get(API)
      .then((response) => {
        if (Array.isArray(response.data)) {
          setArticulos(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  
  const editarArticulo = (articulo) => {
    setArticuloSeleccionado(articulo);
  };


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDatosActualizados({ ...datosActualizados, [name]: value });
  };

  const eliminarArticulo = (titulo) => {
    // Mostrar confirmación con SweetAlert
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Esta acción eliminará al articulo. ¿Deseas continuar?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(titulo);
        axios
          .delete(APIDELETE, { data: { titulo: titulo } })
          .then((response) => {
            // Filtra los articulos y excluye al articulo eliminado
            const articulosActualizados = articulos.filter(
              (articulo) => articulo.titulo !== titulo
            );
            setArticulos(articulosActualizados);
  
            // Mensaje de confirmación
            Swal.fire({
              icon: "success",
              title: "Articulo eliminado",
              showConfirmButton: false,
              timer: 1500,
            });
          })
          .catch((error) => {
            console.error("Error al eliminar el articulo:", error);
  
            // Mensaje de error
            Swal.fire({
              icon: "error",
              title: "Error al eliminar el articulo",
              text:
                "Ocurrió un error al eliminar el articulo. Por favor, inténtalo nuevamente.",
            });
          });
      }
    });
  };

  return (
    <div className="font-[Barlow] mb-8">
      <div className="bg-MoradoC dark:bg-MoradoO rounded-lg p-4 mx-4 mt-4 sm:mx-28 mb-8 border dark:border-VerdeC border-MoradoO">
        <h2 className="text-white text-3xl font-bold text-center">Lista de Artículos</h2>
      </div>
      {articulos.length === 0 ? (
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
                      Título
                    </th>
                    <th scope="col" className="sm:p-2 md:px-6 md:py-4 whitespace-nowrap overflow-y-auto max-h-40">
                      Texto
                    </th>
                    <th scope="col" className="sm:p-2 md:px-6 md:py-3 text-center">
                      Imagen
</th>
                    <th scope="col" className="sm:p-2 md:px-6 md:py-3 text-center">
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {articulos.map((articulo) => (
                    <tr key={articulo.id} className="text-center">
                      <td className="sm:p-2 md:px-6 md:py-4 whitespace-nowrap">
                        {articulo.titulo}
                      </td>
                      <td className="sm:p-2 md:px-6 md:py-4 whitespace-nowrap overflow-y-auto max-h-40">
                        {articulo.texto}
                      </td>
                      <td className="sm:p-2 md:px-6 md:py-4 whitespace-nowrap">
                        <img
                          src={articulo.imagen}
                          alt={articulo.titulo}
                          className="w-20 h-20 object-cover rounded-full mx-auto"
                        />
                      </td>
                      <td className="sm:p-2 md:px-6 md:py-4 whitespace-nowrap">
                        <button
                className="text-white px-4 py-2 rounded-lg mr-2 bg-Moradote focus:outline-none focus:text-white border-b-4 dark:border-VerdeC border-MoradoO hover:bg-Moradote/50 dark:hover:bg-MoradoC/70 focus-within:bg-MoradoO"
                onClick={() => editarArticulo(articulo)}
                        >
                          Editar
                        </button>
                        <button
                className="text-white px-4 py-2 rounded-lg mr-2 bg-Moradote focus:outline-none focus:text-white border-b-4 dark:border-VerdeC border-MoradoO hover:bg-Moradote/50 dark:hover:bg-MoradoC/70 focus-within:bg-MoradoO"
                onClick={() => eliminarArticulo(articulo.titulo)}
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
      {articuloSeleccionado && (
        <div className="bg-MoradoC dark:bg-MoradoO rounded-lg p-4 mx-4 sm:mx-28 mb-8 border dark:border-VerdeC border-MoradoO">
          <h2 className="text-white text-3xl font-bold text-center">Editar Artículo</h2>
          <form className="mt-4 text-white">
            <div className="mb-4">
              <label htmlFor="titulo" className="block text-xl font-bold mb-2">
                Título:
              </label>
              <input
                type="text"
                id="titulo"
                name="titulo"
                value={articuloSeleccionado.titulo}
                onChange={handleInputChange}
                className="w-full px-3 py-2 rounded-lg bg-MoradoO dark:bg-MoradoC border border-MoradoO dark:border-VerdeC focus:outline-none focus:border-VerdeC"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="Texto" className="block text-xl font-bold mb-2">
                Texto:
              </label>
              <input
                type="text"
                id="texto"
                name="texto"
                value={articuloSeleccionado.texto}
                onChange={handleInputChange}
                className="w-full px-3 py-2 rounded-lg bg-MoradoO dark:bg-MoradoC border border-MoradoO dark:border-VerdeC focus:outline-none focus:border-VerdeC"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="imagen" className="block text-xl font-bold mb-2">
                Imagen:
              </label>
              <input
                type="text"
                id="imagen"
                name="imagen"
                value={articuloSeleccionado.imagen}
                onChange={handleInputChange}
                className="w-full px-3 py-2 rounded-lg bg-MoradoO dark:bg-MoradoC border border-MoradoO dark:border-VerdeC focus:outline-none focus:border-VerdeC"
              />
            </div>
            <div className="flex justify-center">
              <button
                type="button"
                className="bg-VerdeC hover:bg-VerdeO text-white font-bold py-2 px-4 rounded mx-1"
                onClick={actualizarArticulo}
              >
                Actualizar
              </button>
              <button
                type="button"
                className="bg-RojoC hover:bg-RojoO text-white font-bold py-2 px-4 rounded mx-1"
                onClick={() => setArticuloSeleccionado(null)}
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