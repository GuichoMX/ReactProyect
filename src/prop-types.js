import PropTypes from "prop-types";

const Tarea = {
    id: PropTypes.number.isRequired,
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