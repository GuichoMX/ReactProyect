import PropTypes from "prop-types";

import Titulo from "./Titulo";
import Toggle from "./Toggle";

function Encabezado(props) {
  // fecha = miércoles, 25 de enero de 2023
  let fecha = new Intl.DateTimeFormat('es-MX', { dateStyle: 'full', timeZone: 'America/Mexico_City' }).format(new Date());
  // fecha = Miércoles, 25 de enero de 2023
  fecha = fecha.charAt(0).toUpperCase() + fecha.slice(1);

  return (
    <>
      <Titulo mensaje={fecha} />
      <Titulo subtitulo mensaje={`${props.tareas.length} tareas`} />
      <Toggle toggle={props.toggle} setToggle={props.setToggle} />
    </>
  )
};

Encabezado.propTypes = {
  toggle: PropTypes.string.isRequired,
  setToggle: PropTypes.func.isRequired,
  tareas: PropTypes.arrayOf(PropTypes.shape({
    titulo: PropTypes.string.isRequired,
    hecho: PropTypes.bool.isRequired,
    hora: PropTypes.string.isRequired,
    detalles: PropTypes.array,
  })).isRequired,
};

export default Encabezado;