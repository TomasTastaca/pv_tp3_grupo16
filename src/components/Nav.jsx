import { Link } from "react-router-dom";
const Nav = () => {
    return(
        <nav>
            <ul>
                <li><Link to="/Inicio" >Inicio</Link></li>
                <li><Link to="/Proyectos">Proyectos</Link></li>
                <li><Link to="/Perfil">Mi Perfil</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;