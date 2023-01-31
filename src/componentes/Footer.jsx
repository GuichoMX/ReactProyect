import PropTypes from "prop-types"

const Footer = props => <footer>Aquí mi footer</footer>

Footer.protoTypes = {
    mensaje: PropTypes.string.isRequired,
    fecha: PropTypes.instanceOf(Date).isRequired,
}