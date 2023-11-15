import React from "react";

const reviews = [
  {
    icon: "/ruta/al/icono1.png",
    title: "Título de la Reseña 1",
    description: "Descripción de la reseña 1",
    color: "#3F6D4E",
  },
  {
    icon: "/ruta/al/icono2.png",
    title: "Título de la Reseña 2",
    description: "Descripción de la reseña 2",
    color: "#8BD450",
  },
  {
    icon: "/ruta/al/icono3.png",
    title: "Título de la Reseña 3",
    description: "Descripción de la reseña 3",
    color: "#1D1A2F",
  },
  {
    icon: "/ruta/al/icono4.png",
    title: "Título de la Reseña 4",
    description: "Descripción de la reseña 4",
    color: "#965FD4",
  },
  {
    icon: "/ruta/al/icono5.png",
    title: "Título de la Reseña 5",
    description: "Descripción de la reseña 5",
    color: "#734F9A",
  },
  {
    icon: "/ruta/al/icono5.png",
    title: "Título de la Reseña 6",
    description: "Descripción de la reseña 6",
    color: "#734F9A",
  },
];

const ReviewCard = ({ icon, title, description, color }) => {
  return (
    <div
      className={`bg-Moradote dark:bg-MoradoO dark:border dark:border-VerdeC text-white rounded-lg p-4 shadow-md text-center`}
    >
      <img
        className="h-20 w-20 mx-auto mb-2 rounded-full border border-MoradoO dark:border-VerdeC"
        src={icon}
        alt="Icono de Contacto"
      />
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="h-40 rounded-md bg-MoradoC/50 dark:bg-white/10">
        {description}
      </p>
    </div>
  );
};

const ReviewsL = () => {
  return (
    <div className="h-full w-full px-4">
      <div className="py-4 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            icon={review.icon}
            title={review.title}
            description={review.description}
            color={review.color}
          />
        ))}
      </div>
    </div>
  );
};

export default ReviewsL;
