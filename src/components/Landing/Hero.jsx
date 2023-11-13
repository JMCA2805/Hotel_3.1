import React, { Component } from 'react'

export default class Hero extends Component {
  render() {
    return (
        <section className="bg-[url('/exterior-oscuro.png')] bg-cover bg-center dark:bg-gray-900 font-poppins bg-fixed sm:bg-center">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            {/* Contenido principal */}
            <div className="mr-auto place-self-center lg:col-span-7">
                {/* Título */}
                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight text-white leading-none md:text-5xl xl:text-7xl dark:text-white">Hotel Águila</h1>
                {/* Descripción */}
                <p className="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-1xl dark:text-white">Te invitamos a descubrir la hospitalidad y el encanto de nuestro hotel. ¡Reserva ahora y déjanos hacer de tu estadía una experiencia inolvidable!.</p>
                {/* Botones */}

                <a href="#" className=" text-white bg-Moradote inline-flex items-center justify-center hover:bg-MoradoO px-5 py-3 text-base font-medium text-center  border border-gray-300 rounded-lg hover:bg-rojo hover:text-white focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                    Inicio
                </a> 
            </div>  
            {/* Imagen */}  
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                <img src="logo.png" alt="mockup"/>
            </div>                
        </div>
    </section>
    )
  }
}