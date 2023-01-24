import Tarea from "./Tarea"

function ListaTareas(props) {
  return (
    <ul>
      {
        props.tareas.map((elemento, indice) => {
          return (
            <Tarea
              key={indice}
              hecho={elemento.hecho}
              titulo={elemento.titulo}
            />
          )
        })
      }
    </ul>
  )
}

export default ListaTareas;