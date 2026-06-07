import "../css/proyectoCard.css";
import { Link } from "react-router-dom";
const ProyectoCard = ({proyecto, onEliminar}) => { //quito onVerDetalle porque no se usa
    const {id, titulo, categoria, estado} = proyecto;

    return(
        <article className="card">
            <div className="card-content">
                <h3>{titulo}</h3>
                <p><strong>Categoria:</strong>{categoria}</p>
                    <span className={`badge ${estado === "Finalizado" ? "done" : "process"}`}>
                        {estado}
                    </span>
            </div>
            <div className="card-actions">
                <Link to={`/Proyectos/${id}`}>Ver Detalle</Link>
                <button className="btn-delete" onClick={() => onEliminar(id)}>Eliminar</button>
            </div>
        </article>
    );
        
}
export default ProyectoCard;