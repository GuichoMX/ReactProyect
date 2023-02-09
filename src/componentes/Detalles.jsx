import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { Tarea } from "../prop-types";

const Detalles = (props) => {
    const { id } = useParams();
    const tarea = props.tareas.find(tarea => tarea.id === Number(id));

    if (tarea === undefined) {
        return null;
    }

    return (
        <>
            <div>Título de la tarea: {tarea.titulo}</div>
            {
                tarea.detalles.map((detalle, indice) => <p key={indice}>{detalle}</p>)
            }
        </>
    )
}

Detalles.propTypes = {
    tareas: PropTypes.arrayOf(PropTypes.shape({...Tarea})).isRequired,
}

export default Detalles;