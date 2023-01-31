import PropTypes from "prop-types";

function Titulo(props) {
    if (props.subtitulo) {
        return <h3>{props.mensaje}</h3>
    }

    return <h1>{props.mensaje}</h1>
;}

Titulo.propTypes = {
    subtitulo: PropTypes.bool,
    mensaje: PropTypes.string.isRequired,
};

export default Titulo;