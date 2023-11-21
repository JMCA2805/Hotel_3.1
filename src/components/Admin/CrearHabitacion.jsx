import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'; // Importar SweetAlert2

const API = import.meta.env.VITE_ADDHAB_URL;

function CrearHabitacion() {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [tarifa, setTarifa] = useState(0);
  const [comodidades, setComodidades] = useState(['']);
  const [candidadMax, setCantidadMax] = useState(0);
  const [imagen, setImagen] = useState('');
  const [respuesta, setRespuesta] = useState('');
  const [mostrarMensaje, setMostrarMensaje] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('nombre', nombre);
    formData.append('descripcion', descripcion);
    formData.append('comodidades', JSON.stringify(comodidades));
    formData.append('imagen', imagen);
    formData.append('tarifa', tarifa);
    formData.append('cantidad', candidadMax);

    // Verificar que los campos obligatorios no estén vacíos
    if ( !nombre || !descripcion || !imagen || !tarifa || !comodidades || !candidadMax ) {
      setRespuesta('Por favor, completa todos los campos.');
      setMostrarMensaje(true);
      return;
    }

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

      setNombre('');
      setDescripcion('');
      setTarifa('');
      setCantidadMax('')
      setComodidades(['']);
      setImagen('');


      // Mostrar mensaje de confirmación con SweetAlert2
      Swal.fire({
        icon: 'success',
        title: 'Habitacion agregada',
        text: 'La Habitación se ha registrado exitosamente.',
      });
    } catch (error) {
      console.error(error);
      setRespuesta('Ocurrió un error al agregar la Habitación');

      // Mostrar mensaje de error con SweetAlert2
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Ocurrió un error al agregar la Habitación',
      }).then({
        
      });
    }
  };

  const handleComodidadChange = (index, valor) => {
    const nuevasComodidades = [...comodidades];
    nuevasComodidades[index] = valor;
    setComodidades(nuevasComodidades);
  };
  
  const handleAgregarComodidad = () => {
    setComodidades([...comodidades, '']);
  };
  
  const handleEliminarComodidad = (index) => {
    const nuevasComodidades = [...comodidades];
    nuevasComodidades.splice(index, 1);
    setComodidades(nuevasComodidades);
  };

  return (
    <div>
    <div className="flex justify-center items-center my-8 md:px-4 lg:px-8 m-auto py-0 md:py-16 font-poppins bg-Moradote/50 dark:bg-MoradoO/50 mx-4 rounded-2xl gap-8 md:gap-0 dark:border border-MoradoO dark:border-VerdeC/50">
        <div className="max-w-md w-full space-y-8 bg-Moradote p-8 rounded-lg shadow-lg dark:bg-MoradoO border-MoradoO dark:border-VerdeC dark:border text-white">
          <div>
            <h1 className="text-center text-3xl font-semibold tracking-tight text-white dark:text-white">Agregar Habitación</h1>
          </div>
          <form className="mt-8 space-y-6 flex flex-col" onSubmit={handleSubmit} encType="multipart/form-data">

            <label>
              Nombre:
              <input
                type="text"
                value={nombre}
                className="w-full rounded-lg text-black"
                onChange={(e) => setNombre(e.target.value)}
              />
            </label>
            <label>
              Descripción:
              <input
                type="text"
                value={descripcion}
                className="w-full rounded-lg text-black"
                onChange={(e) => setDescripcion(e.target.value)}
              />
            </label>
            <label>
              Comodidades:
              {comodidades.map((comodidad, index) => (
                <div key={index} className="flex items-center mb-2">
                  <span className="font-bold mr-2">{index + 1}</span>
                  <input
              type="text"
              value={comodidad}
              className="w-full rounded-lg text-black mr-2"
              onChange={(e) => handleComodidadChange(index, e.target.value)}
            />
                  {index > 0 && (
                    <button
                      type="button"
                      onClick={() => handleEliminarComodidad(index)}
                      className="text-red-500 bg-transparent border border-red-500 rounded-full px-2 py-1"
                    >
                      x
                    </button>
                  )}
                  {index === comodidades.length - 1 && (
                    <button
                      type="button"
                      onClick={handleAgregarComodidad}
                      className="text-green-500 bg-transparent border border-green-500 rounded-full px-2 py-1 ml-2"
                    >
                      +
                    </button>
                  )}
                </div>
              ))}
            </label>

            <label>
              Tarifa:
              <input
                type="number"
                value={tarifa}
                className="w-full rounded-lg text-black"
                onChange={(e) => setTarifa(e.target.value)}
                min="1"
              />
            </label>

            <label>
              Máximo de personas:
              <input
                type="number"
                value={candidadMax}
                className="w-full rounded-lg text-black"
                onChange={(e) => setCantidadMax(e.target.value)}
                min="1"
              />
            </label>

            <label>
              Foto de la Habitación:
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
                Agregar Habitacion
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

export default CrearHabitacion;