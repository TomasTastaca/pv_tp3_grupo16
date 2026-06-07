import { useState, useEffect, useRef } from "react"
import proyectoService from "../services/proyectoService" 
import ProyectoCard from "../components/ProyectoCard.jsx"
import DetalleProyecto from "./DetalleProyecto.jsx"
import RegistroActividad from "../components/RegistroActividad.jsx"
import FormularioProyecto from "../components/FormularioProyecto.jsx"
const ListaProyectos = () => {
    //estado para los proyectos
    const [proyectos, setProyectos] = useState(proyectoService.obtenerProyectos());
    // estado para eliminar proyectos
    const handleEliminar = (id) => {
        proyectoService.eliminarProyecto(id);
        setProyectos(proyectoService.obtenerProyectos());
    }
    //estado para agregar proyectos del FormularioProyecto
    const handleAgregar = (nuevoProyecto) => {
        proyectoService.agregarProyecto(nuevoProyecto);
        setProyectos(proyectoService.obtenerProyectos());
    }
    
    //estado para la fecha de actualización
    const [fechaActualizacion, setFechaActualizacion] = useState(null);
    
    //bandera para controlar la primera carga y no sea bucle infinito
    const primeraCarga = useRef(true);
 
    //estado para la busqueda
    const [busqueda, setBusqueda] = useState("");

    const handleBuscar = (e) => {

        const texto = e.target.value;

        setBusqueda(texto);
    };

    const proyectosFiltrados = proyectos.filter(p =>
    p.titulo.toLowerCase().includes(busqueda.toLowerCase()));
    
    useEffect(() => {
    // Si es la primera carga, cambiamos la bandera y salimos
    if (primeraCarga.current) {
        primeraCarga.current = false;
        return; 
    }

    // CAMBIO: Quitamos la doble seguridad que causaba el bloqueo. 
    // Ahora cualquier cambio real en el estado 'proyectos' dispara la actualización del cartel.
    console.log("¡El useEffect se ejecutó por una acción real!");
    const ahora = new Date();
    
    const dia = String(ahora.getDate()).padStart(2, '0');
    const mes = String(ahora.getMonth() + 1).padStart(2, '0'); 
    const anio = ahora.getFullYear();
    const horas = String(ahora.getHours()).padStart(2, '0');
    const minutos = String(ahora.getMinutes()).padStart(2, '0');

    const fecha = `${dia}/${mes}/${anio} a las ${horas}:${minutos} hs.`;
    
    setFechaActualizacion(fecha);
}, [proyectos]);
   


    

    return(
        <div className="container">
            <h2>Lista de Proyectos Educativos</h2>
             {/*buscar proyectos*/}
            <input
                type="text"
                placeholder="Buscar proyecto..."
                value={busqueda}
                onChange={handleBuscar}
                className="input-busqueda"
            />
           {/*agregar proyectos-formulario*/}
           {/*formulario de proyecto*/}
           <FormularioProyecto onAgregar={handleAgregar} />
           
            {/*obtener proyectos*/}
            <section className="grid-proyectos">
                {proyectosFiltrados.map(p=>(
                  <ProyectoCard key={p.id}
                   proyecto={p} 
                   onEliminar={handleEliminar}/>
                ))}
            </section>
            <div>
                {<RegistroActividad fecha={fechaActualizacion} />}
            </div>
        </div>
    );
}
export default ListaProyectos;