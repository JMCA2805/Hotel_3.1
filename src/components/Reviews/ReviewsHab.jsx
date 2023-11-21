import axios from "axios";
import React, { useEffect, useState } from "react";

const API2 = import.meta.env.VITE_GETHAB_URL;
const API3 = import.meta.env.VITE_FILREVIEWSHABT_URL;

// Componente donde se renderiza las reseñas
const ReviewCard = ({ cmntrs }) => {
  return (
    <div
      className={`bg-Moradote dark:bg-MoradoO dark:border dark:border-VerdeC text-white rounded-lg p-4 shadow-md text-center`}
    >
      <img
        className="h-20 w-20 mx-auto mb-2 rounded-full border border-MoradoO dark:border-VerdeC"
        src={"/usuario.png"}
        alt="Icono de Contacto"
      />
      <h3 className="text-lg font-bold mb-2">
        {cmntrs.nombre + " (" + cmntrs.tipo + ")"}
      </h3>
      <div className="h-40 w-full rounded-md bg-MoradoC/50 dark:bg-white/10  overflow-hidden">
        <p className="p-4 overflow-y-auto h-full break-all text-left">
          {cmntrs.comentario}
        </p>
      </div>
    </div>
  );
};

// Componente que contiene las reseñas
const ReviewsHab = () => {
  const [comentarios, setComentarios] = useState([{ "": "" }]);
  const [habitaciones, setHabitaciones] = useState("");
  const [th, setTH] = useState("");

  const fetchHabitaciones = async () => {
    try {
      const response = await axios.get(`${API2}`);
      const habitaciones = response.data;
      return habitaciones;
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  useEffect(() => {
    // Lógica para obtener los datos de los reservas desde el backend

    const fetchHabitacionesData = async () => {
      const habitacionesData = await fetchHabitaciones();
      setHabitaciones(habitacionesData);
    };

    fetchHabitacionesData();
  }, []);

  useEffect(() => {
    // Lógica para obtener los datos de los reservas desde el backend
    axios
      .post(API3, { tipo: th })
      .then((response) => {
        setComentarios(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [th]);

  return (
    <div className="h-full w-full px-4">
      <div className="w-full flex justify-center items-center text-xl font-poppins p-2">
        
      <h1 className="text-white">Selecciona un tipo de habitación para ver sus comentarios</h1>
      </div>
      <select
        className="w-full p-2 border border-verdeo rounded-md bg-MoradoO/30 focus:bg-MoradoO dark:bg-MoradoO border-MoradoO text-white placeholder:text-white/50 focus:border-2 focus:border-MoradoO focus:ring-0 dark:border-VerdeC/50 dark:focus:border-VerdeC"
        id="Habitacion"
        onChange={(e) => setTH(e.target.value)}
        required
      >
        {typeof habitaciones == "string" ? (
          <option value={habitaciones}></option>
        ) : (
          <>
            <option value="">Seleccionar tipo</option>
            {habitaciones.map((habitacion, index) => (
              <option value={habitacion.nombre} key={index}>
                {habitacion.nombre}
              </option>
            ))}
          </>
        )}
      </select>
      <div className="py-4 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
        {/* Mapeo de la data obtenida del backend para crear las reseñas */}
        {comentarios == [{ "": "" }] ? (
          <>
            <h1 className="text-white">Selecciona un tipo de habitación</h1>
          </>
        ) : (
          <>
            {comentarios.map((cmntrs, index) => (
              <ReviewCard key={index} cmntrs={cmntrs} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default ReviewsHab;
