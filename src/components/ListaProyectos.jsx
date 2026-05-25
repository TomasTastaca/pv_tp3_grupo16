import { useState, useEffect, useRef } from "react"
import proyectoService from "../services/proyectoService" 
import ProyectoCard from "./ProyectoCard.jsx"
import DetalleProyecto from "./DetalleProyecto.jsx"
import RegistroActividad from "./RegistroActividad.jsx"

const ListaProyectos = () => {
    //estado para los proyectos
    const [proyectos, setProyectos] = useState(proyectoService.obtenerProyectos());
    // estado para eliminar proyectos
    const handleEliminar = (id) => {
        proyectoService.eliminarProyecto(id);
        setProyectos(proyectoService.obtenerProyectos());
    }
    //estado para seleccionar proyecto
    const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);
    //estado para la fecha de actualización
    const [fechaActualizacion, setFechaActualizacion] = useState(null);
    
    //bandera para controlar la primera carga y no sea bucle infinito
    const primeraCarga = useRef(true);


    //estado para el formulario-agregar proyectos
    const [formulario ,setFormulario] = useState(
    {titulo: "",
    categoria: "", 
    estado: "En curso",
    descripcion: "",
    pdf: "",
    github: "",
    drive: "",
    integrante: "",
    rol: ""
}
            )      
    const handleChange = (e)=> {
      const {name,value} = e.target;
      setFormulario({...formulario,[name]:value});
      console.log(formulario);

    }
const handleAgregar = (e) => {

    e.preventDefault();

    if(formulario.titulo.trim() === "") return;

    const nuevoProyecto = {

        titulo: formulario.titulo,
        categoria: formulario.categoria,
        estado: formulario.estado,

        descripcion: formulario.descripcion,

        recursos: {
            pdf: formulario.pdf,
            github: formulario.github,
            drive: formulario.drive
        },

        equipo: [
            {
                nombre: formulario.integrante,
                rol: formulario.rol
            }
        ]
    };

    proyectoService.agregarProyecto(nuevoProyecto);

    setProyectos(proyectoService.obtenerProyectos());

    setFormulario({
        titulo: "",
        categoria: "",
        estado: "En curso",

        descripcion: "",

        pdf: "",
        github: "",
        drive: "",

        integrante: "",
        rol: ""
    });
};
    //estado para la busqueda
    const [busqueda, setBusqueda] = useState("");

    const handleBuscar = (e) => {

        const texto = e.target.value;

        setBusqueda(texto);

        if(texto.trim() === ""){
            setProyectos(proyectoService.obtenerProyectos());
        }else{
            setProyectos(proyectoService.buscarProyecto(texto));
        }

    };
    //ver detalle del proyecto
    const handleVerDetalle =(id) =>{
        const proyecto = proyectoService.obtenerProyectoPorId(id);
        setProyectoSeleccionado(proyecto);
        console.log(proyecto);
    } 
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
   


    //renderizado condicional
    if (proyectoSeleccionado) {
        return (
            <DetalleProyecto    
                proyecto={proyectoSeleccionado}
                onVolver={() => setProyectoSeleccionado(null)}
            />
        //si hay un proyecto seleccionado, mostrar el detalle
        );
    }

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
             <div className="form-container">
                <form onSubmit={handleAgregar} className="form-agregar">
                    <input 
                        type="text"
                        name="titulo"
                        placeholder="Título del proyecto" 
                        value={formulario.titulo}
                        onChange={handleChange}
                        required 
                    />
                   <select
                     name="categoria"
                     value={formulario.categoria}
                     onChange={handleChange}
                     required
                    >
                     <option value="">Seleccionar Categoría</option>

                     <option value="Tecnología Educativa">Tecnología Educativa</option>

                     <option value="Inclusión Educativa">Inclusión Educativa</option>

                     <option value="Aprendizaje basado en proyectos">Aprendizaje basado en proyectos</option>

                     <option value="Innovación Educativa">Innovación Educativa</option>

                    </select>

                    <select 
                    name="estado"
                    value={formulario.estado} 
                    onChange={handleChange}
                    required>
                        <option value="En curso">En curso</option>
                        <option value="Finalizado">Finalizado</option>
                    </select>
                    
                <input
                    type="text"
                    name="descripcion"
                    placeholder="Descripción del proyecto"
                    value={formulario.descripcion}
                    onChange={handleChange}
                    className="input-descripcion"
                    required
                />
                <input
                    type="text"
                    name="pdf"
                    placeholder="Link PDF"
                    value={formulario.pdf}
                    onChange={handleChange}
                />

                <input
                    type="text" 
                    name="github"
                    placeholder="Link GitHub"
                    value={formulario.github}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="drive"
                    placeholder="Link Drive"
                    value={formulario.drive}
                    onChange={handleChange}
                />  
                <input
                    type="text"
                    name="integrante"
                    placeholder="Nombre integrante"
                    value={formulario.integrante}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="rol"
                    placeholder="Rol integrante"
                    value={formulario.rol}
                    onChange={handleChange}
                />
                <button type="submit" className="btn-add">Agregar Proyecto</button>
                </form>
            </div>

           {/*listado de tarjetas */}
            {/*obtener proyectos*/}
            <section className="grid-proyectos">
                <div>
                    {proyectos.map(p=>(
                      <ProyectoCard key={p.id} proyecto={p} onVerDetalle={handleVerDetalle} onEliminar={handleEliminar}/>
                    ))}
                </div>
            </section>
            <div>
                {<RegistroActividad fecha={fechaActualizacion} />}
            </div>
        </div>
    );
}
export default ListaProyectos;