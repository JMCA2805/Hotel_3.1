import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

function Resumen() {
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="flex flex-col md:flex-row max-w h-[800px] md:h-[500px] md:px-4 lg:px-8 m-auto py-8 md:py-16 font-poppins bg-Moradote dark:bg-MoradoO mx-4 my-4 text-white rounded-2xl gap-8 md:gap-0 dark:border dark:border-VerdeC">
      <div className="w-full md:w-1/2 px-8 md:px-0 h-1/2 md:h-full">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full md:ml-4 ml-0 h-full rounded-2xl bg-center bg-cover duration-500 dark:border dark:border-VerdeC"
        ></div>
        {/* Left Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className="flex top-4 justify-center py-2">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl cursor-pointer"
            >
                <RxDotFilled />
              
            </div>
          ))}
        </div>
      </div>
      <div className="w-full h-1/2 md:h-full md:w-1/2 p-8 md:p-0 mr-0 md:px-0 md:pl-16 md:mr-6 ">
        <h1 className="lg:text-3xl font-bold mb-4 sm:text-2xl text-2xl">
          Un Símbolo de Coro
        </h1>
        <p className="lg:text-lg  min-[900px]:text-md min-[400px]:text-sm min-[300px]:text-xs">
          El Hotel Águila era un lugar emblemático en Coro, Venezuela, conocido
          por su elegancia y servicio impecable. Fundado hace más de cien años,
          el hotel era famoso por su belleza y comodidades, así como por su
          historia como refugio para disidentes políticos durante la dictadura.
          A pesar de la crisis económica, el hotel seguía siendo un lugar
          especial para muchos, que recordaban con cariño los momentos felices
          que habían vivido entre sus paredes. Aunque su futuro era incierto,
          siempre permanecería en la memoria de quienes lo conocieron en su
          época dorada.{" "}
        </p>
      </div>
    </div>
  );
}

export default Resumen;
