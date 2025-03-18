import { Button } from "@/components/ui/button";
import { Header } from "@/app/ui/layout/header/Header";
import { ProcessCarousel as Carousel } from "@/app/ui/components/carousel/Carousel";
import { PollButton } from "./ui/components/buttons/PollButton";
import { Footer } from "./ui/layout/footer/Footer";

export default function Home() {
  return (
    <main className="w-screen">
      <Header />
      <section className="text-center pt-20 py-32 px-2 md:px-8 flex flex-col justify-center items-center mx-auto">
        <h1 className="text-[#0B3B4C] text-3xl font-bold mb-4">Gestión Médica Inteligente, Segura y Eficiente</h1>
        <p className="mb-5 text-sm text-gray-500 md:w-[70%]">
          Desde consultas más rápidas hasta diagnósticos más precisos, SIOS AmbuCare transforma la atención ambulatoria con IA avanzada, optimizando cada paso del proceso para pacientes y profesionales de la salud.
        </p>
        <Button className="px-7 py-6 rounded-3xl shadow-sm bg-[#0F4C69]"><a href="#polls-section">Tu Opinión Cuenta</a></Button>
      </section>
      <section className="text-center w-full md:w-[80%] 2xl:w-[50%] py-7 px-3 flex flex-col justify-center items-center mx-auto bg-gray-200 rounded-lg shadow-md">
        <h2 className="text-[#0B3B4C] text-[1.2rem] md:text-[1.4rem] font-semibold mb-6 lg:w-[50%]">¡Descubre Cómo SIOS AmbuCare Revoluciona la Atención Médica!</h2>
        <Carousel />
      </section>
      <section id="polls-section" className="text-center w-full py-20 px-2 md:px-4 my-24 flex flex-col justify-center items-center mx-auto bg-gray-50">
        <h3 className="text-[#0B3B4C] text-2xl text-center font-semibold mb-5 md:w-[50%]">Mejora la Atención Médica con Cada Respuesta</h3>
        <p className="text-center text-gray-600 md:w-[60%]">
          Participa en nuestras encuestas y ayúdanos a mejorar SIOS AmbuCare. ¡Tu voz será clave para ofrecer una mejor experiencia de salud! Además, podrás acceder a beneficios exclusivos. ¡Haz clic y comparte tu opinión!
        </p>
        <div className="flex flex-col gap-7 md:flex-row justify-center items-center mt-10">
          <PollButton href="#" text="Participar como Paciente" type="primary" />
          <PollButton href="#" text="Participar como Médico" type="secondary" />
        </div>
      </section>
      <Footer />
    </main>
  );
}
