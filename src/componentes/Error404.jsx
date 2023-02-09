import { Link } from "react-router-dom";

const Error404 = () => (
    <>
        <h1>Ruta no encontrada, nada que desplegar</h1>
        <Link to="/">Página principal</Link>
    </>
)

export default Error404;