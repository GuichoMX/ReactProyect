import React from "react";
import PropTypes from "prop-types"

import "./index.css"

function Tarea(props) {
    const classNameHecho = props.hecho ? "done" : "";

    return (
      <li className="li">
        <input 
          type="checkbox"
          checked={props.hecho}
          onChange={(evt) => {
            props.modificarTarea(props.id, "hecho", !props.hecho);
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
  titulo: PropTypes.string.isRequired,
  hecho: PropTypes.bool.isRequired,
  hora: PropTypes.string.isRequired,
  detalles: PropTypes.array,
}

export default Tarea;