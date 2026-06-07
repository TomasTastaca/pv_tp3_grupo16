import '../css/detalleProyecto.css'

const DetalleProyecto = ({proyecto,onVolver}) => {

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
            <button className="btn-volver" onClick={onVolver}>Volver</button>
        </section>
    )
}

export default DetalleProyecto;




