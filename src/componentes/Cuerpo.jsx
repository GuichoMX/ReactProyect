import PropTypes from "prop-types";
import { TareaType } from "../prop-types";

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
    tareas: PropTypes.arrayOf(TareaType).isRequired,
};

export default Cuerpo;