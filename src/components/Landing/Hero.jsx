import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

export default function Hero() {
  const { loggedIn } = useContext(AuthContext);

  return (
    <section className="bg-[url('/exterior-oscuro.png')] bg-cover bg-center dark:bg-gray-900 font-poppins bg-fixed sm:bg-center">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        {/* Contenido principal */}
        <div className="mr-auto place-self-center lg:col-span-7">
          {/* Título */}
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight text-white leading-none md:text-5xl xl:text-7xl dark:text-white">
            Hotel Águila
          </h1>
          {/* Descripción */}
          <p className="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-1xl dark:text-white">
            Te invitamos a descubrir la hospitalidad y el encanto de nuestro
            hotel. ¡Reserva ahora y déjanos hacer de tu estadía una experiencia
            inolvidable!.
          </p>
          {/* Botones */}

          {loggedIn && (
            <Link
              to={"/Reserva"}
              className="inline-block rounded-md bg-Moradote focus:outline-none focus:text-white border-b-4 dark:border-VerdeC border-MoradoO hover:bg-MoradoC dark:hover:bg-MoradoC focus-within:bg-MoradoO "
            >
              <div className="flex rounded-md dark:border dark:border-VerdeO w-full h-full px-3 py-2 text-white font-bold">
                Reservar
              </div>
            </Link>
          )}

          { !loggedIn && (
            <>
              <Link
                to={"/Login"}
                className="inline-block rounded-md bg-Moradote focus:outline-none focus:text-white border-b-4 dark:border-VerdeC border-MoradoO hover:bg-MoradoC dark:hover:bg-MoradoC focus-within:bg-MoradoO mr-4 "
              >
                <div className="flex rounded-md dark:border dark:border-VerdeO w-full h-full px-3 py-2 text-white font-bold">
                  Login
                </div>
              </Link>
              <Link
                to={"/Registro"}
                className="inline-block rounded-md bg-Moradote focus:outline-none focus:text-white border-b-4 dark:border-VerdeC border-MoradoO hover:bg-MoradoC dark:hover:bg-MoradoC focus-within:bg-MoradoO "
              >
                <div className="flex rounded-md dark:border dark:border-VerdeO w-full h-full px-3 py-2 text-white font-bold">
                  Registro
                </div>
              </Link>
            </>
          )}
        </div>
        {/* Imagen */}
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img src="logo.png" alt="mockup" />
        </div>
      </div>
    </section>
  );
}
