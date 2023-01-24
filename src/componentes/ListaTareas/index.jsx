import "./index.css"
import Tarea from "../Tarea"

function ListaTareas(props) {
  return (
    <ul className="no-bullets">
      {
        props.tareas.map((elemento, indice) => {
          return (
            <Tarea
              key={indice}
              modificarTarea={props.modificarTarea}
              id={indice}
              {...elemento}
            />
          )
        })
      }
    </ul>
  )
}

export default ListaTareas;