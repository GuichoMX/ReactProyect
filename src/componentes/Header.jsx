import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { PropertyType } from "../prop-types";
import Titulo from "./Titulo";

function Header(props) {
  // fecha = miércoles, 25 de enero de 2023
  let fecha = new Intl.DateTimeFormat('es-MX', { dateStyle: 'full', timeZone: 'America/Mexico_City' }).format(new Date());
  // fecha = Miércoles, 25 de enero de 2023
  fecha = fecha.charAt(0).toUpperCase() + fecha.slice(1);

  return (
    <>
      <Titulo mensaje={fecha} />
      <Titulo subtitulo mensaje={`${props.properties.length} Propiedades`} />
      <button><Link to="/createproperty">Create Property</Link></button>
    </>
  )
};

Header.propTypes = {
  properties: PropTypes.arrayOf(PropertyType).isRequired,
};

export default Header;