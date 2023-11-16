import React from "react";
import { FaHotel, FaUtensils } from "react-icons/fa";
import {
  FaBroom,
  FaMasksTheater,
  FaMattressPillow,
  FaWifi,
} from "react-icons/fa6";

export default function Services() {
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
          <div className="flex flex-col items-center">
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <FaHotel className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" />
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Habitaciones de Lujo
            </h3>
            <p className="text-white dark:text-gray-400">
              Habitaciones elegantes y confortables con servicio de limpieza
              diario y amenities de alta calidad.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <FaUtensils className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" />
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Restaurante gourmet
            </h3>
            <p className="text-white dark:text-gray-400">
              Ofreciendo una exquisita selección de platos internacionales y
              locales, con un ambiente refinado y servicio de primera clase.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <FaMattressPillow className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" />
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Spa y centro de bienestar
            </h3>
            <p className="text-white dark:text-gray-400">
              Un lugar de relajación y rejuvenecimiento con tratamientos de
              belleza, masajes y servicios de cuidado personal.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <FaMasksTheater className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" />
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Salón de Eventos y Banquetes
            </h3>
            <p className="text-white dark:text-gray-400">
              Espacios elegantes para celebrar bodas, conferencias, reuniones de
              negocios y otros eventos especiales.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <FaBroom className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" />
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Atención las 24 horas
            </h3>
            <p className="text-white dark:text-gray-400">
              Atención personalizada para organizar excursiones, reservar
              entradas a espectáculos, conseguir transporte y cualquier otra
              necesidad que los huéspedes puedan tener.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <FaWifi className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" />
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Wi-Fi e Internet Gratuito
            </h3>
            <p className="text-white dark:text-gray-400">
              Conexión a internet de alta velocidad disponible en todo el hotel
              para que los huéspedes puedan estar siempre conectados.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
