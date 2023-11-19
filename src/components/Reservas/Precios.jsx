import React, { useEffect, useState } from 'react';

const API = import.meta.env.VITE_GETHAB_URL;

const HabitacionCard = ({ nombre, description, tarifa, comodidades, imagen}) => {
    return (
      <div className="flex flex-col p-6 mx-auto max-w-lg text-center rounded-lg shadow xl:p-8 text-white dark:bg-MoradoO border-MoradoO dark:border-VerdeC dark:border bg-Moradote">
        <h3 className="mb-4 text-2xl font-semibold">{nombre}</h3>
        <p className="font-light text-white/80 sm:text-lg dark:text-gray-400">{description}</p>
        <div className="flex justify-center items-baseline my-8">
          <span className="mr-2 text-5xl font-extrabold">${tarifa}</span>
          <span className="text-white/80 dark:text-gray-400">/dia</span>
        </div>
        <ul role="list" className="mb-8 space-y-4 text-left">
          {comodidades.map((comodidad, index) => (
            <li key={index} className="flex items-center space-x-3">
              <svg className="flex-shrink-0 w-5 h-5 text-VerdeC dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
              </svg>
              <span>{comodidad}</span>
            </li>
          ))}
        </ul>
        <img className="rounded-t-lg h-96" src={imagen} alt="imagen del producto" />
        <a href="#" className='mt-5'>Ver reseñas</a>
      </div>
    );
};

const Precios = () => {
    const [habitaciones, setHabitaciones] = useState([]);
  
    useEffect(() => {

      const obtenerHabitaciones = async () => {
        try {
          const response = await fetch(`${API}`);
          const data = await response.json();
          setHabitaciones(data);
        } catch (error) {
          console.error('Error al obtener las habitaciones:', error);
        }
      };
  
      obtenerHabitaciones();
    }, []);
  
    return (
        <section className="min-h-screen my-8 md:px-4 lg:px-8 m-auto py-8 md:py-16 font-poppins bg-Moradote/50 dark:bg-MoradoO/50 mx-4 rounded-2xl gap-12 md:gap-0 dark:border border-MoradoO dark:border-VerdeC/50">
        <div className="py-8 px-4 mx-auto lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white dark:text-white">Tabla de Precios</h2>
            </div>
            <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                {habitaciones.map((habitacion, index) => (
                <HabitacionCard
                    key={index}
                    nombre={habitacion.nombre}
                    description={habitacion.descripcion}
                    tarifa={habitacion.tarifa}
                    comodidades={habitacion.comodidades}
                    imagen={habitacion.imagen}
                />
                ))}
            </div>
      </div>
      </section>
    );
  };
  
  export default Precios;