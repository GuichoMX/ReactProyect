import PropTypes from "prop-types";

import "./index.css"
import { Property as PropertyShape } from "../../prop-types";
import { baseURL } from "../../constantes";
import { useNavigate } from "react-router-dom";

function Property(props) {
  const navigate = useNavigate();

  const classNameHecho = props.hecho ? "done" : "";

  return (

          <li className="li">
                  <div class="contenido-propiedades">
        <div class="casa-img">
          <img src="../../assets/img/Propiedades/casaimgPrueba.png" alt="Esta es una imagen de una casa"/>
        </div>

        <div class="casa-contenido">
          <div class="contenido-izquierda">
            <form action="">
              <label for="inNombre">Nombre</label>
              <input id="inNombre" type="text" placeholder={props.name} disabled/>
                <label for="inDireccion">Dirección</label>
                <input id="inDireccion" type="text" placeholder={props.address} disabled/>
                </form>
                <div class="espacio">
                  <a href=""></a>
                </div>
              </div>

              <div class="contenido-derecha">
                <form action="">
                  <label for="inNombre">Usuario</label>
                  <input id="inUsuario" type="text" placeholder={props.user} disabled/>
                    <label for="inDireccion">Disponibilidad</label>
                    <input id="inDireccion" type="text" placeholder={props.hecho ? "Ocupado" : "Disponible"} disabled/>
                    </form>
                    <div class="btnEdicion">
                          <button class="boton" id="btnsubmit" type="submit"
                          onClick={() => {
                            navigate(`/properties/${props.id}`);
                          }}>Ver más</button>
                          <button class="boton" id="btnsubmit2" type="submit"
                          onClick={() => {
                            fetch(`${baseURL}/properties/${props.id}`, { method: "DELETE" })
                              .then(() => {
                                props.addProperties({ tipo: "deleteProperty", id: props.id })
                              })
                          }}>Eliminar</button>
                        </div>
                    </div>
                  </div>
              </div>
            <input
              type="checkbox"
              checked={props.hecho}
              onChange={() => {
                fetch(`${baseURL}/properties/${props.id}`,
                  {
                    method: "PATCH",
                    headers: {
                      'Content-Type': "application/json"
                    },
                    body: JSON.stringify({ hecho: !props.hecho })
                    //body: props.hecho ? JSON.stringify({ hecho: "Disponible" }) : JSON.stringify({ hecho: "Ocupado" })
                  }
                )
                  .then(response => response.json())
                  .then(property => {
                    props.addProperties({ tipo: !property.hecho ? "quitarHecho" : "ponerHecho", id: props.id });
                  })
              }}
            />
            <label for="inNombre">¿Esta ocupado?</label>
          </li>
          
          )
  }

          Property.propTypes = {
            ...PropertyShape,
            addProperties: PropTypes.func.isRequired,
};

          export default Property;