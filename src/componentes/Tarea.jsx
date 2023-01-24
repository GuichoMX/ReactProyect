function Tarea(props) {
    return (
      <li>
        <span className={props.hecho ? "done" : ""}>
          {props.titulo}
        </span>
      </li>
    )
  }

export default Tarea;