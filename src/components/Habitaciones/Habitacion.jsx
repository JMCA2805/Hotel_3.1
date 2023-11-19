import React from 'react';

const Habitacion = () => {
  const NombredeH = 'Habitación Ejemplo';
  const Precio = 100;
  const Rating = 4;
  const Imagen = 'url_de_la_imagen';
  const DescripciónH = 'Descripción de la habitación';
  const ComodidadesH = 'Comodidades de la habitación';
  const roomPriceNumber = 100;
  const ServiciosH = ['Servicio 1', 'Servicio 2', 'Servicio 3'];

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex items-center mb-4">
        <div className="flex-shrink-0 w-12 h-12 bg-green-400 text-white flex items-center justify-center rounded-full mr-3">
          {NombredeH.charAt(0)}
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-800">{NombredeH}</h2>
          <div className="flex items-center mt-1">
            <span className="text-gray-600 mr-1">${Precio}</span>
            <div className="flex items-center">
              {[...Array(Rating)].map((_, index) => (
                <svg
                  key={index}
                  className="w-4 h-4 text-yellow-500 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M10 0L13.09 6.19L19.8 7.18L15.46 11.31L16.64 18.81L10 15.69L3.36 18.81L4.54 11.31L0.2 7.18L6.91 6.19L10 0Z"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  />
                </svg>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-cover bg-center h-64 mb-4"
        style={{ backgroundImage: `url(${Imagen})` }}
      ></div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Descripción</h3>
        <p className="text-gray-700 mb-4">{DescripciónH}</p>
        <h3 className="text-lg font-semibold mb-2">Comodidades</h3>
        <p className="text-gray-700 mb-4">{ComodidadesH}</p>
        <h3 className="text-lg font-semibold mb-2">Precio</h3>
        <p className="text-gray-700 mb-4">${roomPriceNumber}</p>
        <h3 className="text-lg font-semibold mb-2">Servicios</h3>
        <ul className="list-disc pl-6">
          {ServiciosH.map((service, index) => (
            <li key={index} className="text-gray-700">
              {service}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Habitacion;