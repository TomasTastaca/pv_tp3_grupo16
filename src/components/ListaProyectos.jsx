import { useState } from "react"
import proyectoService from "../services/proyectoService"

const ListaProyectos = () => {
    const [proyectos, setProyectos] = useState(proyectoService.obtenerProyectos());


    return(
        <div className="container">
            <h2>Gestión de Proyectos Educativos</h2>

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