import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2"; // Importar SweetAlert2

//Api de servidor backend
const API = import.meta.env.VITE_ADDSER_URL;

function CrearServicio() {
  // Inicializacion de estados
  const [servicio, setServicio] = useState("");
  const [descripcion, setDesc] = useState("");
  const [icono, setIcono] = useState("");
  const [respuesta, setRespuesta] = useState("");

  const [mostrarMensaje, setMostrarMensaje] = useState(false);

  // Funcion para cargar un nuevo servicio
  const handleSubmit = async (e) => {
    e.preventDefault();

    // datos a enviar
    const formData = new FormData();
    formData.append("servicio", servicio);
    formData.append("descripcion", descripcion);
    formData.append("icono", icono);

    // Verificar que los campos obligatorios no estén vacíos
    if (!servicio || !descripcion || !icono) {
      setRespuesta("Por favor, completa todos los campos.");
      setMostrarMensaje(true);
      return;
    }

    const articulo = {
      servicio,
      descripcion,
    };

    try {
      const response = await axios.post(`${API}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setRespuesta(response.data);
      setMostrarMensaje(true);

      setTimeout(() => {
        setMostrarMensaje(false);
      }, 3000);

      setServicio("");
      setDesc("");
      setIcono("");

      // Mostrar mensaje de confirmación con SweetAlert2
      Swal.fire({
        icon: "success",
        title: "Producto agregado",
        text: "El producto se ha registrado exitosamente.",
      });
    } catch (error) {
      console.error(error);
      setRespuesta("Ocurrió un error al agregar el producto");

      // Mostrar mensaje de error con SweetAlert2
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Ocurrió un error al agregar el producto.",
      }).then({});
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center my-8 md:px-4 lg:px-8 m-auto py-0 md:py-16 font-poppins bg-Moradote/50 dark:bg-MoradoO/50 mx-4 rounded-2xl gap-8 md:gap-0 dark:border border-MoradoO dark:border-VerdeC/50">
        <div className="max-w-md w-full space-y-8 bg-Moradote p-8 rounded-lg shadow-lg dark:bg-MoradoO border-MoradoO dark:border-VerdeC dark:border text-white">
          <div>
            <h1 className="text-center text-3xl font-semibold tracking-tight text-white dark:text-white">
              Agregar Servicio
            </h1>
          </div>
          <form
            className="mt-8 space-y-6 flex flex-col"
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >
            <label>
              Servicio:
              <input
                type="text"
                value={servicio}
                className="bg-MoradoO/30 border border-MoradoO text-white placeholder:text-white/50 sm:text-sm rounded-lg focus:border-2 focus:border-MoradoO focus:ring-0 block w-full p-2.5 dark:border-VerdeC/50 dark:focus:border-VerdeC"
                onChange={(e) => setServicio(e.target.value)}
              />
            </label>
            <label>
              Descripción:
              <input
                type="text"
                value={descripcion}
                  className="bg-MoradoO/30 border border-MoradoO text-white placeholder:text-white/50 sm:text-sm rounded-lg focus:border-2 focus:border-MoradoO focus:ring-0 block w-full p-2.5 dark:border-VerdeC/50 dark:focus:border-VerdeC"
                onChange={(e) => setDesc(e.target.value)}
              />
            </label>
            <label>
              Icono del Servicio:
              <input
                className="block w-full text-sm text-VerdeO border border-gray-300 rounded-lg cursor-pointer bg-VerdeO dark:text-white focus:outline-none dark:bg-VerdeO dark:border-gray-VerdeO dark:placeholder-VerdeO"
                id="file_input"
                type="file"
                accept="image/png"
                onChange={(e) => {
                  setIcono(e.target.files[0]);
                }}
                name="icono"
              />
            </label>
            <div>
              <button
                type="submit"
                className="py-2 px-4 rounded-md w-full col-span-2  border-b-4 dark:border-VerdeC border-MoradoO hover:bg-MoradoO/50 dark:hover:bg-MoradoC/70 focus-within:bg-MoradoO text-white bg-MoradoO/30 dark:bg-Moradote"
              >
                Agregar Servicio
              </button>
            </div>
          </form>

          {mostrarMensaje && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 mt-6 rounded">
              <p className="text-sm font-bold">{respuesta}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CrearServicio;
