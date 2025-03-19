import Head from 'next/head';

const Meta = () => {
  return (
    <Head>
      <title>SIOS Ambucare</title>
      <meta name="description" content="SIOS AmbuCare revoluciona la atención médica con inteligencia artificial. Optimiza consultas, reduce carga administrativa y mejora la precisión diagnóstica mediante IA generativa, reconocimiento de voz y análisis predictivo en EMR." />
      <meta name="keywords" content="Asistente médico IA, inteligencia artificial en salud, optimización de consulta médica, EMR, soporte clínico IA, documentación automatizada en salud, diagnóstico asistido IA" />
      <meta name="author" content="SIOS AmbuCare" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Open Graph */}
      <meta property="og:title" content="SIOS Ambucare" />
      <meta name="keywords" content="Asistente médico IA, inteligencia artificial en salud, optimización de consulta médica, EMR, soporte clínico IA, documentación automatizada en salud, diagnóstico asistido IA, tecnología médica avanzada, reducción de carga administrativa, eficiencia en consulta médica" />
      {/* <meta property="og:image" content={image} /> */}
      <meta property="og:url" content="https://tu-dominio.com" />
      <meta property="og:type" content="website" />

      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

Meta.defaultProps = {
  title: "SIOS AmbuCare - Asistente Inteligente para Médicos",
  description: "Optimiza las consultas médicas con SIOS AmbuCare: IA generativa, reconocimiento de voz y análisis predictivo para reducir carga administrativa y mejorar la precisión clínica.",
//   image: ""
};

export default Meta;