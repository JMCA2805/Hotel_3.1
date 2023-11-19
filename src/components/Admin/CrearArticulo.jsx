import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'; // Importar SweetAlert2

const API = import.meta.env.VITE_ADDART_URL;

function CrearArticulo() {
  const [titulo, setTitulo] = useState('');
  const [texto, setTexto] = useState('');
  const [imagen, setImagen] = useState('');
  const [respuesta, setRespuesta] = useState('');

  const [mostrarMensaje, setMostrarMensaje] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('titulo', titulo);
    formData.append('texto', texto);
    formData.append('imagen', imagen);

    // Verificar que los campos obligatorios no estén vacíos
    if ( !titulo || !texto  || !imagen) {
      setRespuesta('Por favor, completa todos los campos.');
      setMostrarMensaje(true);
      return;
    }

    const articulo = {
      titulo,
      texto,
    };

    console.log(imagen)

    try {
      const response = await axios.post(`${API}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setRespuesta(response.data);
      setMostrarMensaje(true);

      setTimeout(() => {
        setMostrarMensaje(false);
      }, 3000);

      setTitulo('');
      setTexto('');
      setImagen('');

      // Mostrar mensaje de confirmación con SweetAlert2
      Swal.fire({
        icon: 'success',
        title: 'Producto agregado',
        text: 'El producto se ha registrado exitosamente.',
      });
    } catch (error) {
      console.error(error);
      setRespuesta('Ocurrió un error al agregar el producto');

      // Mostrar mensaje de error con SweetAlert2
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Ocurrió un error al agregar el producto.',
      }).then({
        
      });
    }
  };

  return (
    <div>
    <div className="flex justify-center items-center my-8 md:px-4 lg:px-8 m-auto py-0 md:py-16 font-poppins bg-Moradote/50 dark:bg-MoradoO/50 mx-4 rounded-2xl gap-8 md:gap-0 dark:border border-MoradoO dark:border-VerdeC/50">
        <div className="max-w-md w-full space-y-8 bg-Moradote p-8 rounded-lg shadow-lg dark:bg-MoradoO border-MoradoO dark:border-VerdeC dark:border text-white">
          <div>
            <h1 className="text-center text-3xl font-semibold tracking-tight text-white dark:text-white">Agregar Articulo</h1>
          </div>
          <form className="mt-8 space-y-6 flex flex-col" onSubmit={handleSubmit} encType="multipart/form-data">

            <label>
              Titulo:
              <input
                type="text"
                value={titulo}
                className="w-full rounded-lg text-black"
                onChange={(e) => setTitulo(e.target.value)}
              />
            </label>
            <label>
              Texto:
              <input
                type="text"
                value={texto}
                className="w-full rounded-lg text-black"
                onChange={(e) => setTexto(e.target.value)}
              />
            </label>
            <label>
              Foto del Articulo:
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
            <div>
              <button
                type="submit"
                className="py-2 px-4 rounded-md w-full col-span-2  border-b-4 dark:border-VerdeC border-MoradoO hover:bg-MoradoO/50 dark:hover:bg-MoradoC/70 focus-within:bg-MoradoO text-white bg-MoradoO/30 dark:bg-Moradote"
                >
                Agregar Articulo
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

export default CrearArticulo;