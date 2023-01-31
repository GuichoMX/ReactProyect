import PropTypes from "prop-types";

const Tarea = {
    titulo: PropTypes.string.isRequired,
    hecho: PropTypes.bool.isRequired,
    hora: PropTypes.string.isRequired,
    detalles: PropTypes.array,
};

const TareaType = PropTypes.shape(Tarea);

export {
    Tarea,
    TareaType,
}