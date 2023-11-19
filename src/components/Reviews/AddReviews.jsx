import { Modal } from "flowbite-react";

export default function AddReviews({ openModal, handleModalSet }) {

  const Añadir = ()=>{

  }
  
  return (
    <>
      <Modal
        dismissible
        show={openModal}
        onClose={handleModalSet}
        position={"center"}
        size={"md"}
      >
        {/* Modal Body */}
        <div className="bg-Moradote dark:bg-black w-full rounded-lg text-white font-poppins">
          {/* Modal Header */}
          <div className="flex w-full h-20 items-center justify-center border-b dark:border-VerdeC/50 border-MoradoO ">
            <span className="text-xl font-bold">Añadir Reseña</span>
          </div>
          {/* Contenido */}
          <div className="w-full h-full flex flex-col p-8">
            <div className="w-full flex p-4 text-center justify-center font-bold">
              <span>¿Que te pareció nuestro hotel?</span>
            </div>
            <textarea
              name="Comentarios"
              className="bg-MoradoO/30 border border-MoradoO text-white placeholder:text-white/50 sm:text-sm rounded-lg focus:border-2 focus:border-MoradoO focus:ring-0 block w-full p-4 dark:border-VerdeC/50 dark:focus:border-VerdeC h-60"
            />
          </div>
          {/* Modal Footer */}
          <div className="flex bottom-0 w-full h-20 items-center border-t dark:border-VerdeC/50 border-MoradoO rounded-b-xl">
            <div className="gap-8 flex justify-center w-full h-10">
              <button
                onClick={Añadir}
                className="inline-block rounded-md bg-Moradote focus:outline-none focus:text-white border-b-4 dark:border-VerdeC border-MoradoO hover:bg-MoradoC dark:hover:bg-MoradoC focus-within:bg-MoradoO "
              >
                <div className="flex rounded-md dark:border dark:border-VerdeO w-full h-full px-3 py-2 text-white font-bold justify-center">
                  Añadir
                </div>
              </button>
              <button
                onClick={handleModalSet}
                className="inline-block rounded-md bg-Moradote focus:outline-none focus:text-white border-b-4 dark:border-VerdeC border-MoradoO hover:bg-MoradoC dark:hover:bg-MoradoC focus-within:bg-MoradoO "
              >
                <div className="flex rounded-md dark:border dark:border-VerdeO w-full h-full px-3 py-2 text-white font-bold justify-center">
                  Cancelar
                </div>
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
