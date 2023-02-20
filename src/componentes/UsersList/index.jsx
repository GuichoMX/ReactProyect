import PropTypes from "prop-types";

import User from "../User"
import { UserType } from "../../prop-types";

function UsersList(props) {
  return (
    <ul className="no-bullets">
      <main class="main">
        <div class="hero-propiedades">
          <div class="hero-contenedor">
            <h1>Mis Usuarios</h1>
          </div>
        </div>
        <div id="usuarios" class="usuarios">
          <div class="usuarios-caja">
            <div class="propiedades-params">
              {
                props.users.map((elemento) => {
                  return (
                    <User
                      key={elemento.id}
                      addUsers={props.addUsers}
                      {...elemento}
                    />
                  )
                })
              }
            </div>
          </div>
        </div>
      </main>
    </ul >
  )
};

UsersList.propTypes = {
  addUsers: PropTypes.func.isRequired,
  users: PropTypes.arrayOf(UserType).isRequired,
};

export default UsersList;