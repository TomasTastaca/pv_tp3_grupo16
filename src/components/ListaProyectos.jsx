import { useState } from "react"
import proyectoService from "../services/proyectoService"

const ListaProyectos = () => {
    //estado para los obtener proyectos
    const [proyectos, setProyectos] = useState(proyectoService.obtenerProyectos());
     //estado para agregar proyectos
    const [titulo, setTitulo] = useState("");
    const [categoria, setCategoria] = useState("");
    const [estado, setEstado] = useState("En curso");

    const manejarAgregar = (e) => {
        e.preventDefault();
        
       
        const nuevo = {
            id: Date.now(), 
            titulo,
            categoria,
            estado
        };

        
        proyectoService.agregarProyecto(nuevo);
        setProyectos(proyectoService.obtenerProyectos());

        
        setTitulo("");
        setCategoria("");
    };
    
    //estado para la busqueda proyectos
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
             {/*agregar proyectos*/}
             <div className="form-container">
                <form onSubmit={manejarAgregar} className="form-agregar">
                    <input 
                        type="text" 
                        placeholder="Título del proyecto" 
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                        required 
                    />
                   <select
                     value={categoria}
                    onChange={(e) => setCategoria(e.target.value)}
                    required
>
                     <option value="">Seleccionar Categoría</option>

                     <option value="Tecnología Educativa">Tecnología Educativa</option>

                     <option value="Inclusión Educativa">Inclusión Educativa</option>

                     <option value="Aprendizaje basado en proyectos">Aprendizaje basado en proyectos</option>

                     <option value="Innovación Educativa">Innovación Educativa</option>

                    </select>

                    <select value={estado} onChange={(e) => setEstado(e.target.value)}>
                        <option value="En curso">En curso</option>
                        <option value="Finalizado">Finalizado</option>
                    </select>
                    <button type="submit" className="btn-add">Agregar Proyecto</button>
                </form>
            </div>

            {/* lista de proyectos */}
            <section className="grid-proyectos">
                <div>
                    {proyectos.map(p=>(
                        <article key={p.id} className="card">
                            <div className="card-content">
                                <h3>{p.titulo}</h3>
                                <p><strong>Categoria:</strong>{p.categoria}</p>
                                <span className={`badge ${p.estado === "Finalizado" ? "done" : "process"}`}>
                                    {p.estado}
                                </span>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    );
}
export default ListaProyectos;