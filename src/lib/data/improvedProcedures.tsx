import { HighLight } from "@/app/ui/components/highlight/HighLight";
import { JSX } from "react";

interface ImprovedProcedure {
    title: string;
    description: JSX.Element;
    imagepath: string;
}

export const improvedProcedures: ImprovedProcedure[] = [
    {
        title: "Registro Ágil y Sin Complicaciones",
        description:
            <p>
                Dile adiós a las largas filas. Con un sistema de <HighLight>registro rápido y seguro</HighLight>, la identidad del paciente se valida en segundos, recuperando automáticamente su historial médico. Esto permite a los centros de salud <HighLight>optimizar sus tiempos de atención</HighLight> y garantizar un <HighLight>flujo eficiente de pacientes</HighLight>, brindando una <HighLight>mejor experiencia</HighLight> tanto para pacientes como para el personal médico.
            </p>,
        imagepath: '/assets/images/step1.jpg'
    },
    {
        title: "Priorización Inteligente para una Atención Eficiente",
        description:
            <p>
                Un <HighLight>asistente inteligente</HighLight> analiza síntomas y antecedentes en tiempo real, <HighLight>ayudando al equipo médico a asignar prioridades de manera precisa</HighLight>. Esto permite <HighLight>reducir los tiempos de espera</HighLight>, <HighLight>optimizar recursos</HighLight> y garantizar que cada paciente reciba la <HighLight>atención adecuada en el momento justo</HighLight>. Más eficiencia para los profesionales, mejor experiencia para los pacientes y una <HighLight>gestión más fluida para las instituciones</HighLight>.
            </p>,
        imagepath: '/assets/images/step2.jpg'
    },
    {
        title: "Información Médica Organizada y Accesible",
        description:
            <p>
                Antes de que el paciente entre a consulta, <HighLight>el asistente inteligente extrae y organiza su historial clínico</HighLight>, incluyendo antecedentes, medicaciones activas y notas previas. Esto permite a los profesionales de la salud tomar <HighLight>decisiones más rápidas y precisas</HighLight>, mejorando la calidad de la atención y reduciendo la carga administrativa. <HighLight>Menos tiempo buscando información, más tiempo dedicado al cuidado del paciente</HighLight>.
            </p>,
        imagepath: '/assets/images/step3.jpg'
    },
    {
        title: "Consulta sin Interrupciones, Atención más Humana",
        description:
            <p>
                Un <HighLight>asistente de voz</HighLight> en tiempo real transcribe con precisión la información dictada por el médico en el formulario de la consulta. Al actualizar el historial médico sin necesidad de escritura manual, <HighLight>reduce la carga administrativa y la fatiga</HighLight>, permitiendo a los profesionales de la salud ofrecer una <HighLight>atención más cercana y personalizada</HighLight>. Los pacientes se sentirán realmente escuchados, con un médico presente y plenamente enfocado en su bienestar.
            </p>,
        imagepath: '/assets/images/step4.jpg'
    },
    {
        title: "Decisiones Médicas Más Precisas",
        description:
            <p>
                Mientras el profesional de la salud conversa con el paciente, el <HighLight>asistente inteligente</HighLight> analiza los síntomas en tiempo real y <HighLight>sugiere posibles diagnósticos y tratamientos</HighLight> basados en las <HighLight>Guías de Atención Clínica.</HighLight> Esta herramienta <HighLight>no reemplaza la experiencia médica</HighLight>, sino que la potencia, ofreciendo información relevante y personalizada.
            </p>,
        imagepath: '/assets/images/step5.jpg'
    },
    {
        title: "Seguridad y Precisión en Cada Receta",
        description:
            <p>
                Cuando se necesita recetar un medicamento, el asistente inteligente revisa automáticamente el historial del paciente, detecta posibles interacciones y verifica contraindicaciones, asegurando <HighLight>una prescripción más segura y ajustada a cada caso</HighLight>.
            </p>,
        imagepath: '/assets/images/step6.jpg'
    },
    {
        title: "Precisión y Confianza en Cada Consulta",
        description:
            <p>
                Cuando se requiere un estudio o prueba complementaria, el asistente inteligente <HighLight>analiza los síntomas y antecedentes del paciente</HighLight> para sugerir los apoyos diagnósticos más adecuados. <HighLight>Basado en guías clínicas actualizadas</HighLight>, este sistema proporciona <HighLight>recomendaciones precisas al Profesional de la Salud</HighLight>, asegurando que cada decisión esté respaldada por datos confiables.
            </p>,
        imagepath: '/assets/images/step7.jpg'
    },
    {
        title: "Cuidado Personalizado y Seguimiento Inteligente",
        description:
            <p>
                Al finalizar la consulta, el asistente inteligente <HighLight>genera un plan de cuidado adaptado a cada paciente</HighLight>. Desde instrucciones detalladas hasta recordatorios de seguimiento, este sistema <HighLight>garantiza que la atención no termine al salir del consultorio</HighLight>.
            </p>,
        imagepath: '/assets/images/step8.jpg'
    },
    // {
    //     title: "Citas Sin Complicaciones: Continuidad de Atención Inteligente",
    //     description: "Antes de finalizar la consulta, un asistente inteligente sugiere y gestiona la próxima cita de manera rápida y eficiente."
    // }
];
