import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, ClipboardCheck, Hospital, ShieldUser, Users } from "lucide-react"

export const ProposalBenefits = () => {
    return (
        <section className="py-5 w-[80%] my-16 flex flex-col gap-1 mx-auto">
            <h3 className="text-green-secondary text-[1.8rem] text-left font-bold">Soluciones para todos los actores del sistema de salud</h3>
            <p className="text-base text-gray-600">
                SIOS AmbuCare ayuda a médicos, pacientes e instituciones de salud en Colombia que quieren optimizar la documentación clínica y priorizar la atención de pacientes para reducir la carga administrativa y los errores en la información médica, y mejorar la eficiencia en la atención con tiempos de respuesta más rápidos y diagnósticos más precisos.
            </p>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
                <Card>
                    <CardHeader>
                        <Users className="h-10 w-10 text-primary" />
                        <CardTitle>Para médicos</CardTitle>
                        <CardDescription>Optimice su tiempo y mejore su precisión clínica.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2 text-[0.9rem]">
                        <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                            <span>Menos tiempo en tareas administrativas.</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                            <span>Mayor precisión en la documentación clínica</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                            <span>Menos estrés y mejor calidad de vida laboral.</span>
                        </div>
                    </CardContent>
                </Card>

                {/* Pacientes */}
                <Card>
                    <CardHeader>
                        <ShieldUser className="h-10 w-10 text-primary mb-2" />
                        <CardTitle>Para pacientes</CardTitle>
                        <CardDescription>Mejore su experiencia sanitaria y seguimiento.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2 text-[0.9rem]">
                        <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                            <span>Atención médica ágil según la prioridad de su estado de salud.</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                            <span>Diagnósticos más confiables gracias a información médica precisa.</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                            <span>Mejor experiencia y seguimiento de su historial médico.</span>
                        </div>
                    </CardContent>
                </Card>

                {/* Instituciones de Salud */}
                <Card>
                    <CardHeader>
                        <Hospital className="h-10 w-10 text-primary mb-2" />
                        <CardTitle>Para instituciones de salud</CardTitle>
                        <CardDescription>Optimice la gestión, eficiencia y recursos hospitalarios.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2 text-[0.9rem]">
                        <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                            <span>Mayor eficiencia operativa.</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                            <span>Cumplimiento normativo mejorado con documentación precisa.</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                            <span>Mayor satisfacción de pacientes y médicos, mejorando la reputación del centro de salud.</span>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}