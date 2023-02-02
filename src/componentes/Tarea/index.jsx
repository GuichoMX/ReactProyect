import PropTypes from "prop-types";

import "./index.css"
import { Tarea as TareaShape } from "../../prop-types";
import { baseURL } from "../../constantes";

function Tarea(props) {
    const classNameHecho = props.hecho ? "done" : "";

    return (
      <li className="li">
        <input 
          type="checkbox"
          checked={props.hecho}
          onChange={() => {
            fetch(`${baseURL}/tareas/${props.id}`,
              {
                method: "PATCH",
                headers: {
                  'Content-Type': "application/json"
                },
                body: JSON.stringify({ hecho: !props.hecho })
              }
            )
            .then(response => response.json())
            .then(tarea => {
              props.ponerTareas({ tipo: !tarea.hecho ? "quitarHecho" : "ponerHecho", id: props.id });
            })
          }}
        />
        <span className={classNameHecho} >
          {props.titulo}
        </span>
        <span className={`secondary-text ${classNameHecho}`}>{props.hora}</span>
        <span
          className="close"
          onClick={() => {
            fetch(`${baseURL}/tareas/${props.id}`, { method: "DELETE" })
            .then(() => {
              props.ponerTareas({ tipo: "borrarTarea", id: props.id })
            })
          }}
        >
          X
        </span>
      </li>
    )
  }

Tarea.propTypes = {
  ...TareaShape,
  ponerTareas: PropTypes.func.isRequired,
};

export default Tarea;