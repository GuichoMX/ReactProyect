import PropTypes from "prop-types";

import ListaTareas from "./ListaTareas";

function Cuerpo(props) {
    return (
        <main>
            <ListaTareas {...props} />
        </main>
    )
};

Cuerpo.propTypes = {
    modificarTarea: PropTypes.func.isRequired,
    tareas: PropTypes.arrayOf(PropTypes.shape({
        titulo: PropTypes.string.isRequired,
        hecho: PropTypes.bool.isRequired,
        hora: PropTypes.string.isRequired,
        detalles: PropTypes.array,
    })).isRequired,
};

export default Cuerpo;