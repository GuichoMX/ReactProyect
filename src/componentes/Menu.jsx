import { Link } from "react-router-dom";

const Menu = () => (
    <nav>
        <ul>
            <li>
                <Link to="/">Página pricipal</Link>
            </li>
            <li>
                <Link to="/tareas">Tareas</Link>
            </li>
            <li>
                <Link to="/properties">Properties</Link>
            </li>
            <li>
                <Link to="/users">Properties</Link>
            </li>
            <li>
                <Link to="/acercade">Acerca de</Link>
            </li>
            <li>
                <Link to="/createtarea">Crear nueva tarea</Link>
            </li>
            <li>
                <Link to="/createproperty">Crear nueva Propiedad</Link>
            </li>
            <li>
                <Link to="/createuser">Crear nueva Propiedad</Link>
            </li>
            <li>
                <Link to="/otrarutaquenoexiste">Otra ruta que no existe</Link>
            </li>
        </ul>
    </nav>
)

export default Menu;