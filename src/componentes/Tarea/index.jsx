import React from "react";
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
        <span className={classNameHecho}>
          {props.titulo}
        </span>
        <span className={`secondary-text ${classNameHecho}`}>{props.hora}</span>
      </li>
    )
  }

export default Tarea;