import { useState } from "react"
import proyectoService from "../services/proyectoService"

const ListaProyectos = () => {
    //estado para los obtener proyectos
    const [proyectos, setProyectos] = useState(proyectoService.obtenerProyectos());
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