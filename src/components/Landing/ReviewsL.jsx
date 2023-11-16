import React from "react";

const reviews = [
  {
    foto: "/persona1.jpg",
    nombrep: "Mark Heathcliff",
    descripcion: "Este hotel es realmente impresionante. Desde el momento en que entré, fui recibido con una cálida bienvenida por el personal. La habitación era espaciosa y estaba impecablemente limpia. El desayuno buffet ofrecía una amplia variedad de opciones deliciosas. La ubicación también es perfecta, cerca de varias atracciones turísticas. Definitivamente, este hotel es una opción excelente para hospedarse.",
    color: "#3F6D4E",
  },
  {
    foto: "/persona2.jpeg",
    nombrep: "Walter White",
    descripcion: "Me alojé en este hotel durante un viaje de negocios y quedé muy satisfecho con mi experiencia. El personal del hotel fue profesional y eficiente, y me brindaron todas las comodidades que necesitaba para trabajar. La conexión wifi era rápida y confiable, lo cual fue fundamental para mí. La habitación era tranquila y confortable, lo que me permitió descansar adecuadamente después de largas jornadas de trabajo. Definitivamente recomendaría este hotel a otros viajeros de negocios.",
    color: "#8BD450",
  },
  {
    foto: "/persona3.jpeg",
    nombrep: "María Hernandez",
    descripcion: "Mi estadía en este hotel fue absolutamente maravillosa. El personal fue extremadamente amable y atento, siempre dispuesto a ayudar. La habitación era espaciosa, cómoda y estaba impecablemente limpia. La ubicación del hotel es inmejorable, cerca de las principales atracciones turísticas de la ciudad. Además, el desayuno buffet ofrecía una amplia variedad de opciones deliciosas. Recomiendo este hotel sin ninguna duda.",
    color: "#1D1A2F",
  },
  {
    foto: "/persona4.jpeg",
    nombrep: "Patrick Bateman",
    descripcion: "Recientemente me hospedé en este hotel con mi familia y tuvimos una experiencia fantástica. El personal fue muy amable y servicial, especialmente con los niños. Las instalaciones estaban bien cuidadas y ofrecían muchas opciones de entretenimiento, como una piscina y un parque infantil. La habitación familiar era espaciosa y cómoda, con todas las comodidades necesarias. Además, la ubicación era conveniente, cerca de restaurantes y tiendas. Sin duda, recomendaría este hotel a familias que deseen tener unas vacaciones agradables.",
    color: "#965FD4",
  },
  {
    foto: "/persona5.jpeg",
    nombrep: "Bruno Díaz",
    descripcion: "Mi estancia en este hotel fue simplemente perfecta. El personal fue excepcionalmente amable y servicial, siempre dispuesto a hacer todo lo posible para que mi estancia fuera agradable. La habitación era lujosa y elegante, con una vista impresionante de la ciudad. El hotel también ofrecía excelentes servicios, como un gimnasio bien equipado y un spa relajante. La ubicación era excelente, cerca de varios puntos de interés y restaurantes. Recomiendo encarecidamente este hotel para aquellos que buscan una experiencia de lujo y comodidad.",
    color: "#734F9A",
  },
  {
    foto: "/persona6.jpeg",
    nombrep: "Samuel de Luque",
    descripcion: "Mi estancia en este hotel fue excepcional. El personal fue amable y servicial desde el momento en que llegué. La habitación era amplia y estaba impecablemente limpia, con una decoración elegante. El desayuno ofrecía una amplia variedad de platos deliciosos, y el servicio de habitaciones era rápido y eficiente. Además, la ubicación del hotel era perfecta, cerca de las principales atracciones turísticas y con fácil acceso al transporte público. Recomiendo este hotel a cualquiera que visite la ciudad. ¡No se arrepentirán!",
    color: "#734F9A",
  },
];

const ReviewCard = ({ foto, nombrep, descripcion, color }) => {
  return (
    <div
      className={`bg-Moradote dark:bg-MoradoO dark:border dark:border-VerdeC text-white rounded-lg p-4 shadow-md text-center`}
    >
      <img
        className="h-20 w-20 mx-auto mb-2 rounded-full border border-MoradoO dark:border-VerdeC"
        src={foto}
        alt="Icono de Contacto"
      />
      <h3 className="text-lg font-bold mb-2">{nombrep}</h3>
      <p className="h-40 overflow-y-auto rounded-md bg-MoradoC/50 dark:bg-white/10">
        {descripcion}
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
            foto={review.foto}
            nombrep={review.nombrep}
            descripcion={review.descripcion}
            color={review.color}
          />
        ))}
      </div>
    </div>
  );
};

export default ReviewsL;
