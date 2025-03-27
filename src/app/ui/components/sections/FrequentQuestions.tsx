import { FAQ } from "@/app/ui/components/faq/FAQ"

export const FrequentQuestions = () => {
    return (
        <section className="w-[80%] 2xl:w-[50%] py-5 px-2 md:px-4 my-16 flex flex-col gap-4 mx-auto">
            <h3 className="text-green-absent text-left text-[1.7rem] md:text-2xl font-semibold mb-2">Preguntas frecuentes</h3>
            <FAQ />
        </section>
    )
}