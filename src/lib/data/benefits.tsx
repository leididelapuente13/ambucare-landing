import { Hospital, ShieldUser, Users } from "lucide-react";

interface Benefit {
    icon: React.ReactNode;
    title: string;
    description: string;
    benefits: string[];
}

export const benefits: Benefit[] = [
    {
        icon: <Users className="h-10 w-10 text-primary" />,
        title: "Para médicos",
        description: "Optimice su tiempo y mejore su precisión clínica.",
        benefits: [
            "Menos tiempo en tareas administrativas.",
            "Mayor precisión en la documentación clínica",
            "Menos estrés y mejor calidad de vida laboral."
        ]
    },
    {
        icon: <ShieldUser className="h-10 w-10 text-primary mb-2" />,
        title: "Para pacientes",
        description: "Mejore su experiencia sanitaria y seguimiento.",
        benefits: [
            "Atención médica ágil según la prioridad de su estado de salud.",
            "Diagnósticos más confiables gracias a información médica precisa.",
            "Mejor experiencia y seguimiento de su historial médico."
        ]
    },
    {
        icon: <Hospital className="h-10 w-10 text-primary mb-2" />
        ,
        title: "Para instituciones de salud",
        description: "Optimice la gestión, eficiencia y recursos hospitalarios.",
        benefits: [
            "Mayor eficiencia operativa.",
            "Cumplimiento normativo mejorado con documentación precisa.",
            "Mayor satisfacción de pacientes y médicos, mejorando la reputación del centro de salud."
        ]
    }
]