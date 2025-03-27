import { Modal } from "../../components/modal/Modal"

export const Footer = () => {
  return (
    <footer className="bg-green-secondary py-7 px-5 flex items-center flex-col gap-3 md:flex-row md:justify-between">
      <div className="w-fit md:w-fit">
        <p className="text-xs text-gray-100">¿Tienes más preguntas?, contáctanos a través de nuestro WhatsApp <a href="http://" target="_blank" className="underline font-bold">Contacto</a></p>
      </div>
      <Modal />
    </footer>
  )
}