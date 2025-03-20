import { PollButton } from "@/app/ui/components/buttons/PollButton"

export const Polls = () => {
    return (
        <section id="polls-section" className="text-center w-full py-20 px-2 md:px-4 my-16 flex flex-col justify-center items-center mx-auto bg-gray-50">
            <h3 className="text-green-secondary text-2xl text-center font-semibold mb-5 md:w-[50%]">Mejora la Atención Médica con Cada Respuesta</h3>
            <p className="text-center text-gray-600 md:w-[60%]">
                Participa en nuestras encuestas y ayúdanos a mejorar SIOS AmbuCare. ¡Tu voz será clave para ofrecer una mejor experiencia de salud! Además, podrás acceder a beneficios exclusivos. ¡Haz clic y comparte tu opinión!
            </p>
            <div className="flex flex-col gap-7 md:flex-row justify-center items-center mt-10">
                <PollButton href="https://forms.gle/2WYp9JZmqBTFb8928" text="Participar como Paciente" type="primary" />
                <PollButton href="https://docs.google.com/forms/d/e/1FAIpQLSdu6QMFBaHbP3dF-wPGIGbB4tHjrG3Fzm22VDxoIdDjJ5FAlA/viewform?usp=dialog" text="Participar como Médico" type="secondary" />
            </div>
        </section>
    )
}