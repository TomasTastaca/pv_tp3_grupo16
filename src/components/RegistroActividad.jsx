//import React from "react";

const RegistroActividad = ({fecha}) => {

    return (
        <div className="registro-actividad">
            <p>
                <strong>Última actualización de la lista:</strong> {fecha}
            </p>
        </div>
    );
};
export default RegistroActividad;