

import React, { useEffect, useState} from 'react';
import axios from 'axios';


//Conexión al Backend a traves de localhost
const API = import.meta.env.VITE_GETART_URL
  
export default function Article() {
  const [articulos, setArticulos] = useState([]);

  useEffect(() => {
    axios.get(API)
      .then(response => {
        if (Array.isArray(response.data)) {
          setArticulos(response.data);
        } else {
          setArticulos([]);
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  console.log(articulos)

  return (
    <>
      {articulos.map(articulo => (
        <div className="sm:p-10 p-4 md:p-4 flex w-full flex-col md:flex-row h-full font-poppins dark:border dark:border-VerdeC bg-Moradote dark:bg-MoradoO text-white rounded-2xl md:gap-0 gap-8 mb-4" key={articulo.id}>
          <div className="w-full md:w-1/3 items-center flex">
            <img
              className="w-full rounded-2xl"
              src={articulo.imagen}
              alt="Articulo_image"
            />
          </div>
          <div className="w-full md:w-2/3 md:mx-4 rounded-2xl border border-MoradoO dark:border-VerdeC p-2">
            <div className="w-full flex justify-center xl:text-3xl lg:text-2xl md:text-lg font-bold text-base px-4">
              <h2>{articulo.titulo}</h2>
            </div>
            <div className="w-full mt-4 px-4 xl:text-lg min-[1024px]:text-sm min-[1200px]:text-base md:text-[10px] text-[11px]">
              <p>{articulo.texto}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}