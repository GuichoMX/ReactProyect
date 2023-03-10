import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { TareaType } from "../prop-types";
import Titulo from "./Titulo";

function Encabezado(props) {
  // fecha = miércoles, 25 de enero de 2023
  let fecha = new Intl.DateTimeFormat('es-MX', { dateStyle: 'full', timeZone: 'America/Mexico_City' }).format(new Date());
  // fecha = Miércoles, 25 de enero de 2023
  fecha = fecha.charAt(0).toUpperCase() + fecha.slice(1);

  return (
    <>
      <Titulo mensaje={fecha} />
      <Titulo subtitulo mensaje={`${props.tareas.length} tareas`} />
      <button><Link to="/createtarea">Create Task</Link></button>
    </>
  )
};

Encabezado.propTypes = {
  tareas: PropTypes.arrayOf(TareaType).isRequired,
};

export default Encabezado;