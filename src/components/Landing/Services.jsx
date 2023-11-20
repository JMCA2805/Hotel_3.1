import axios from "axios";
import React, { useEffect, useState } from "react";

// Api del servidor backend
const API = import.meta.env.VITE_GETSER_URL;

export default function Services() {
  // Estados
  const [servicios, setServicios] = useState([{"":""}]);
  useEffect(() => {
    // Lógica para obtener los datos de los reservas desde el backend
    axios
      .get(API)
      .then((response) => {
        setServicios(response.data);
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <section className="flex max-w h-full m-auto py-4 md:py-8 lg:py-16 font-poppins bg-Moradote dark:bg-MoradoO mx-4 my-4 text-white rounded-2xl dark:border dark:border-VerdeC">
      <div className="py-2 md:py-4 lg:py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="w-full mb-8 lg:mb-16 flex flex-col items-center">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white text-center">
            Servicios del Hotel
          </h2>
          <p className="text-white sm:text-xl dark:text-gray-400">
            Nuestro objetivo es garantizar que cada huésped disfrute de una
            estancia inolvidable con todos los servicios que puedan necesitar a
            su disposición.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {/* Seccion que muestra y condiciona si mostrar o no os servicios */}
          {servicios != ""
            ? servicios.map((servicio, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                    <img
                      src={servicio.imagen}
                      className="w-6 h-6 text-primary-600 lg:w-8 lg:h-8 dark:text-primary-300"
                    />
                  </div>
                  <h3 className="mb-2 text-xl font-bold dark:text-white">
                    {servicio.servicio}
                  </h3>
                  <p className="text-white dark:text-gray-400">
                    {servicio.descripcion}
                  </p>
                </div>
              ))
            : null}
        </div>
      </div>
    </section>
  );
}
