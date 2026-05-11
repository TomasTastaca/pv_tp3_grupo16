const proyectoService = ( () => {
    let proyectos = [

        {id: 1, titulo: "Aula del Futuro", categoria: "Tecnología Educativa", estado: "En curso"},
        {id: 2, titulo: "Aprender Sin Fronteras", categoria: "Inclusión Educativa", estado: "Finalizado"},
        {id: 3, titulo: "Mentes en Acción", categoria: "Aprendizaje basado en proyectos", estado: "Finalizado"},
        {id: 4, titulo: "Educa+ Innovación", categoria: "Innovación educativa", estado: "En curso"},
        {id: 5, titulo: "Puentes de Conocimiento", categoria: "Inclusión Educativa", estado: "Finalizado"}
    ];
    //obtener todos los proyectos
    const obtenerProyectos = () => [...proyectos];

     //agregar proyecto
    const agregarProyecto = (nuevo) => {
        proyectos.push(nuevo);
    };

    //buscar proyecto por titulo
    const buscarProyecto = (texto) => {

        return proyectos.filter(p => p.titulo.toLowerCase().includes(texto.toLowerCase()));

    };
    return {obtenerProyectos, buscarProyecto, agregarProyecto};
})();

export default proyectoService;