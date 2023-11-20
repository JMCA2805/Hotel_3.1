import axios from "axios";
import React, { useEffect, useState } from "react";

const API = import.meta.env.VITE_GETREVIEWS_URL;

// Componente donde se renderiza las reseñas
const ReviewCard = ({ cmntrs }) => {
  return (
    <div
      className={`bg-Moradote dark:bg-MoradoO dark:border dark:border-VerdeC text-white rounded-lg p-4 shadow-md text-center`}
    >
      <img
        className="h-20 w-20 mx-auto mb-2 rounded-full border border-MoradoO dark:border-VerdeC"
        src={"foto"}
        alt="Icono de Contacto"
      />
      <h3 className="text-lg font-bold mb-2">{cmntrs.nombre}</h3>
      <div className="h-40 w-full rounded-md bg-MoradoC/50 dark:bg-white/10  overflow-hidden">
        <p className="p-4 overflow-y-auto h-full break-all text-left">{cmntrs.comentario}</p>
      </div>
    </div>
  );
};

// Componente que contiene las reseñas
const ReviewsL = () => {
  const [comentarios, setComentarios] = useState([{ "": "" }]);

  useEffect(() => {
    // Lógica para obtener los datos de los reservas desde el backend
    axios
      .get(API)
      .then((response) => {
        setComentarios(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="h-full w-full px-4">
      <div className="py-4 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
        {/* Mapeo de la data obtenida del backend para crear las reseñas */}
        {comentarios.map((cmntrs, index) => (
          <ReviewCard key={index} cmntrs={cmntrs} />
        ))}
      </div>
    </div>
  );
};

export default ReviewsL;
