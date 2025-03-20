import { Button } from "@/components/ui/button";

export const ProjectDescription = () => {
    return (
        <section className="text-center pt-20 py-32 px-2 md:px-8 flex flex-col justify-center items-center mx-auto">
            <h1 className="text-green-secondary text-4xl font-bold mb-4">Gestión Médica Inteligente, Segura y Eficiente</h1>
            <p className="mb-5 text-sm text-gray-500 md:w-[70%]">
                Desde consultas más rápidas hasta diagnósticos más precisos, SIOS AmbuCare transforma la atención ambulatoria con IA avanzada, optimizando cada paso del proceso para pacientes y profesionales de la salud.
            </p>
            <Button type="button" className="px-7 py-6 rounded-3xl shadow-sm bg-green-primary transition delay-150 duration-300 ease-in-out hover:bg-green-shade-secondary hover:scale-105"><a href="#polls-section">Tu Opinión Cuenta</a></Button>
        </section>
    )
}