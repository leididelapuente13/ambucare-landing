import { ProcessCarousel as Carousel } from "@/app/ui/components/carousel/Carousel";

export const ProposalOfValue = () => {
    return (
        <section className="text-center w-full md:w-[80%] 2xl:w-[50%] py-7 px-3 flex flex-col justify-center items-center mx-auto bg-gray-200 rounded-lg shadow-md">
            <h2 className="text-green-secondary font-bold text-[1.2rem] md:text-[1.4rem] mb-6 lg:w-[50%]">¡Descubre Cómo SIOS AmbuCare Revoluciona la Atención Médica!</h2>
            <Carousel />
        </section>
    )
}