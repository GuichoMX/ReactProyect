import PropTypes from "prop-types";

import "./index.css"
import { User as UserShape } from "../../prop-types";
import { baseURL } from "../../constantes";
import { useNavigate } from "react-router-dom";

import Foto from "../../assets/img/Usuarios/user_male.png"
import Foto2 from "../../assets/img/Usuarios/user_female.png"

function User(props) {
  const navigate = useNavigate();


  return (

    <li className="li">
      <div class="contenido-propiedades">
        <div class="usuario-img">
          <img src= {props.gender === "Masculino" ? Foto : Foto2 } alt="Esta es una imagen de un usuario" href="" />
        </div>

        <div class="casa-contenido">
          <div class="contenido-derecha">
            <form action="">
              <label for="inNombre">Nombre</label>
              <input id="inNombre" type="text" placeholder={props.fullName} disabled/>
                <label for="inDireccion">Propiedad</label>
                <input id="inDireccion" type="text" placeholder={props.assignedProperty} disabled/>
                </form>
                <div class="btnEdicion">
                <button class="boton" id="btnsubmit" type="submit"
                          onClick={() => {
                            navigate(`/users/${props.id}`);
                          }}>Ver más</button>
                          <button class="boton" id="btnsubmit2" type="submit"
                          onClick={() => {
                            fetch(`${baseURL}/users/${props.id}`, { method: "DELETE" })
                              .then(() => {
                                props.addUsers({ tipo: "deleteUser", id: props.id })
                              })
                          }}>Eliminar</button>

                </div>
              </div>
          </div>
        </div>
    </li>
  )
}

User.propTypes = {
  ...UserShape,
  addUsers: PropTypes.func.isRequired,
};

export default User;