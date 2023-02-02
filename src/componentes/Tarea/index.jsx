import PropTypes from "prop-types";

import "./index.css"
import { Tarea as TareaShape } from "../../prop-types";

function Tarea(props) {
    const classNameHecho = props.hecho ? "done" : "";

    return (
      <li className="li">
        <input 
          type="checkbox"
          checked={props.hecho}
          onChange={(evt) => {
            props.ponerTareas({ tipo: props.hecho ? "quitarHecho" : "ponerHecho", id: props.id });
          }}
        />
        <span
          className={classNameHecho}
          draggable
          onDragStart={e => console.log('onDragStart')}
          onDragEnd={e => console.log('onDragEnd')}
        >
          {props.titulo}
        </span>
        <span className={`secondary-text ${classNameHecho}`}>{props.hora}</span>
      </li>
    )
  }

Tarea.propTypes = {
  ...TareaShape,
  id: PropTypes.number.isRequired,
  ponerTareas: PropTypes.func.isRequired,
};

export default Tarea;