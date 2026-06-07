import '../css/detalleProyecto.css'
import { useParams, Link } from 'react-router-dom'
import proyectoService from '../services/proyectoService';
const DetalleProyecto = () => {
//obtener el id de la url
    const { id } = useParams()
//obtener el proyecto por id 
const proyecto = proyectoService.obtenerProyectoPorId(Number(id));
if (!proyecto) {
    return <div>Proyecto no encontrado</div>
}

    return (
        <section className="detalle-container">

            <h2>{proyecto.titulo}</h2>

            <p>{proyecto.descripcion}</p>

            <div className="recursos">
                <a href={proyecto.recursos.pdf}>PDF</a>
                <a href={proyecto.recursos.github}>GitHub</a>
                <a href={proyecto.recursos.drive}>Drive</a>
            </div>

            <div className="equipo">
                <h3>Equipo</h3>

                {proyecto.equipo.map((integrante, index) => (
                    <p key={index}>
                        {integrante.nombre} - {integrante.rol}
                    </p>
                ))}
            </div>
            {/*<button className="btn-volver" onClick={onVolver}>Volver</button>*/}
            <Link to="/Proyectos" className="btn-volver">Volver</Link>
        </section>
    )
}

export default DetalleProyecto;




