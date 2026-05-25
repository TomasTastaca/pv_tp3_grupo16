import { useState } from "react";

const FormularioProyecto = ({onAgregar}) => {

    const [formulario, setFormulario] = useState({
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

    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormulario({...formulario,[name]: value});
    };

    const handleSubmit = (e) => {

        e.preventDefault();

        if (formulario.titulo.trim() === "") return;

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

        onAgregar(nuevoProyecto);

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

    return (
        <div className="form-container">

            <form onSubmit={handleSubmit} className="form-agregar">

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
                    required
                >
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
    );
};

export default FormularioProyecto;