import { useState } from "react"
import proyectoService from "../services/proyectoService" 
import ProyectoCard from "./ProyectoCard.jsx"
import DetalleProyecto from "./DetalleProyecto.jsx"
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
    //estado para el formulario-agregar proyectos
    const [formulario ,setFormulario] = useState(
    {titulo: "",
    categoria: "", 
    estado: "En curso"}
            )      
    const handleChange = (e)=> {
      const {name,value} = e.target;
      setFormulario({...formulario,[name]:value});
      console.log(formulario);
    }
    const handleAgregar = (e) => {
     e.preventDefault();
     if (formulario.titulo === " ") return;
           
     proyectoService.agregarProyecto(formulario);
     setFormulario({titulo: "", categoria: "", estado: "En curso"});
     setProyectos(proyectoService.obtenerProyectos());

 }
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
        </div>
    );
}
export default ListaProyectos;