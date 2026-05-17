const proyectoService = ( () => {
    let proyectos = [
          {
            id: 1,
            titulo: "Aula del Futuro",
            categoria: "Tecnología Educativa",
            estado: "En curso",
            descripcion: "Este proyecto busca incorporar tecnologías digitales modernas en instituciones educativas para mejorar la experiencia de aprendizaje de estudiantes y docentes mediante el uso de pizarras interactivas y realidad aumentada.\n\nAdemás, se implementarán plataformas colaborativas y metodologías innovadoras que permitan fortalecer el trabajo en equipo, asegurando que la enseñanza sea dinámica y adaptada a la era digital.",
            recursos: { pdf:"https://www.adobe.com/" , github: "https://github.com/", drive: "https://drive.google.com/" },
            equipo: [
                { nombre: "Luis", rol: "Especialista en EdTech" },
                { nombre: "Jesica", rol: "Diseñadora Tecno-Pedagógica" },
                { nombre: "Luciana", rol: "Gestora de Innovación" }
            ]
        },
        {
            id: 2,
            titulo: "Aprender Sin Fronteras",
            categoria: "Inclusión Educativa",
            estado: "Finalizado",
            descripcion: "Aprender Sin Fronteras tiene como objetivo principal garantizar el acceso igualitario a recursos educativos digitales para estudiantes que se encuentran en diferentes contextos sociales y geográficos.\n\nEl proyecto incorpora herramientas de asistencia, contenidos adaptados para diversas capacidades y plataformas interactivas que favorecen la participación activa y el aprendizaje colaborativo en entornos vulnerables.",
            recursos: { pdf: "https://www.adobe.com/", github: "https://github.com/", drive: "https://drive.google.com/" },
            equipo: [
                { nombre: "Raul", rol: "Coordinador de Inclusión" },
                { nombre: "Daniel", rol: "Especialista en Accesibilidad Digital" }
            ]
        },
        
            
        {
            id: 3,
            titulo: "Mentes en Acción",
            categoria: "Aprendizaje basado en proyectos",
            estado: "Finalizado",
            descripcion: "Este proyecto promueve metodologías activas centradas en la resolución de problemas reales, permitiendo que los estudiantes tomen el liderazgo de su propio proceso de formación mediante la investigación.\n\nTambién busca fortalecer habilidades blandas como la comunicación asertiva, el pensamiento crítico y la creatividad a través de experiencias prácticas que conectan la teoría con el mundo laboral actual.",
            recursos: { pdf:"https://www.adobe.com/", github: "https://github.com/", drive: "https://drive.google.com/" },
            equipo: [
                { nombre: "Alejandro", rol: "Facilitador de Metodologías Activas" },
                { nombre: "Sabrina", rol: "Tutora de Proyectos Colaborativos" }
            ]
        },
        {
            id: 4,
            titulo: "Educa+ Innovación",
            categoria: "Innovación educativa",
            estado: "En curso",
            descripcion: "Educa+ Innovación busca modernizar las prácticas pedagógicas tradicionales mediante el uso de tecnologías emergentes como la inteligencia artificial aplicada a la tutoría personalizada de los alumnos.\n\nEl proyecto incorpora modelos de aprendizaje híbrido y actividades gamificadas orientadas a mejorar la motivación y la participación estudiantil, reduciendo significativamente las tasas de abandono escolar.",
            recursos: { pdf: "https://www.adobe.com/", github: "https://github.com/", drive: "https://drive.google.com/"},
            equipo: [
                { nombre: "Valeria", rol: "Consultora de Transformación Digital" },
                { nombre: "Damaris", rol: "Analista de Tendencias Educativas" }
            ]
        },
        {
            id: 5,
            titulo: "Puentes de Conocimiento",
            categoria: "Inclusión Educativa",
            estado: "Finalizado",
            descripcion: "Puentes de Conocimiento tiene como propósito fortalecer la comunicación y el intercambio de saberes entre distintas instituciones educativas de todo el país utilizando redes seguras de alta velocidad.\n\nSe desarrollarán laboratorios virtuales compartidos y repositorios de recursos digitales abiertos que favorezcan la interacción constante, el aprendizaje entre pares y la construcción colectiva de conocimiento.",
            recursos: { pdf: "https://www.adobe.com/", github: "https://github.com/", drive: "https://drive.google.com/" },
            equipo: [
                { nombre: "Mariano", rol: "Vinculador Interinstitucional" },
                { nombre: "Jose", rol: "Moderador de Redes de Aprendizaje" }
            ]
        }
    ]
    //obtener todos los proyectos
    const obtenerProyectos = () => [...proyectos];

     //agregar proyecto
    const agregarProyecto = (nuevo) => {
        proyectos.push(nuevo);
    };
 // eliminar Proyecto
 const eliminarProyecto = (id) => {
        proyectos = proyectos.filter(proyecto => proyecto.id !== id)
    } 


    //buscar proyecto por titulo
    const buscarProyecto = (texto) => {

        return proyectos.filter(p => p.titulo.toLowerCase().includes(texto.toLowerCase()));

    };
    return {obtenerProyectos, buscarProyecto, agregarProyecto, eliminarProyecto};
})();

export default proyectoService;