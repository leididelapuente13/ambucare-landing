import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { benefits } from "@/lib/data/benefits"
import { CheckCircle } from "lucide-react"

export const ProposalBenefits = () => {
    return (
        <section className="py-5 w-[80%] 2xl:w-[50%] my-16 flex flex-col gap-1 mx-auto">
            <h3 className="text-green-absent text-[1.8rem] text-left font-bold">Soluciones para todos los actores del sistema de salud</h3>
            <p className="text-base text-gray-600">
                SIOS AmbuCare ayuda a médicos, pacientes e instituciones de salud en Colombia que quieren optimizar la documentación clínica y priorizar la atención de pacientes para reducir la carga administrativa y los errores en la información médica, y mejorar la eficiencia en la atención con tiempos de respuesta más rápidos y diagnósticos más precisos.
            </p>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
                {
                    benefits.map(({ icon, title, description, benefits }) => (
                        <Card key={title}>
                            <CardHeader>
                                {icon}
                                <CardTitle className="text-[#12516e]">{title}</CardTitle>
                                <CardDescription>{description}</CardDescription>
                            </CardHeader>
                            {
                                benefits.map((benefit) => (
                                    <CardContent className="space-y-2 text-[0.9rem]" key={benefit}>
                                        <div className="flex items-center gap-2">
                                            <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                                            <span>{benefit}</span>
                                        </div>
                                    </CardContent>
                                ))
                            }
                        </Card>
                    ))
                }
            </div>
        </section>
    )
}



           




