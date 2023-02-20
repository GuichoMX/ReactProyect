import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { UserType } from "../prop-types";
import Titulo from "./Titulo";

function HeaderUser(props) {
  // fecha = miércoles, 25 de enero de 2023
  let fecha = new Intl.DateTimeFormat('es-MX', { dateStyle: 'full', timeZone: 'America/Mexico_City' }).format(new Date());
  // fecha = Miércoles, 25 de enero de 2023
  fecha = fecha.charAt(0).toUpperCase() + fecha.slice(1);

  return (
    <>
      <Titulo mensaje={fecha} />
      <Titulo subtitulo mensaje={`${props.users.length} Usuarios`} />
      <button><Link to="/createuser">Create User</Link></button>
    </>
  )
};

HeaderUser.propTypes = {
  users: PropTypes.arrayOf(UserType).isRequired,
};

export default HeaderUser;