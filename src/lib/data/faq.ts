interface faq {
    question: string
    answer: string
}

export const faqs : faq[] = [
    {
        question: "¿Qué es SIOS AmbuCare y cómo funciona?",
        answer: "SIOS AmbuCare es un asistente inteligente basado en IA diseñado para optimizar las consultas médicas. Utiliza reconocimiento de voz, modelos predictivos y análisis de datos en tiempo real para reducir la carga administrativa y mejorar la eficiencia operativa en entornos clínicos."
    },
    {
        question: "¿SIOS AmbuCare reemplaza a los médicos?",
        answer: "No. SIOS AmbuCare es un asistente que complementa el trabajo del médico. No toma decisiones, sino que proporciona información basada en IA para mejorar la precisión en diagnósticos, documentación clínica y sugerencias de tratamiento."
    },
    {
        question: "¿Cómo ayuda SIOS AmbuCare a los médicos en su trabajo diario?",
        answer: "Reduce el tiempo de documentación clínica, permitiendo que el médico se enfoque en el paciente. Minimiza la carga administrativa y el estrés laboral. Proporciona acceso rápido a información clínica actualizada en tiempo real. Facilita una consulta más fluida al permitir la transcripción automática de voz y la organización de datos en el EMR."
    },
    {
        question: "¿Qué beneficios ofrece a los pacientes?",
        answer: "Consultas más cálidas y centradas en el paciente, con mayor interacción con el médico. Diagnósticos más rápidos y precisos gracias al análisis predictivo de la IA. Recomendaciones de seguimiento personalizadas basadas en el historial médico."
    },
    {
        question: "¿Cómo se integra SIOS AmbuCare con los sistemas electrónicos de salud (EMR)?",
        answer: "SIOS AmbuCare se conecta a los sistemas de historias clínicas electrónicas (EMR) mediante APIs seguras. Extrae y organiza automáticamente la información del paciente para que el médico tenga un resumen clínico listo antes de la consulta."
    },
    {
        question: "¿Cómo funciona el sistema de priorización de pacientes?",
        answer: "Antes de la consulta, la IA analiza el historial clínico y el motivo de consulta del paciente para asignarle un nivel de prioridad. Esto permite optimizar el flujo de atención en clínicas y hospitales, asegurando que los casos más urgentes sean atendidos primero."
    },
    {
        question: "¿SIOS AmbuCare puede sugerir diagnósticos y tratamientos?",
        answer: "Sí. La IA analiza los síntomas del paciente y su historial médico para sugerir posibles diagnósticos basados en guías clínicas y protocolos médicos. Sin embargo, el médico siempre tiene la última palabra para validar la recomendación."
    },
    {
        question: "¿Es seguro el uso de IA en el diagnóstico médico?",
        answer: "Sí. SIOS AmbuCare no sustituye la decisión del médico, sino que actúa como un asistente basado en evidencia científica. Además, cumple con regulaciones de seguridad como HIPAA y GDPR para garantizar la privacidad de los datos."
    },
    {
        question: "¿Qué se necesita para implementar SIOS AmbuCare en una clínica u hospital?",
        answer: "Conexión a internet estable.Un sistema de historia clínica electrónica (EMR) compatible. Un período de adaptación donde los médicos aprenden a integrar la IA en su flujo de trabajo."
    },
]
