import PropTypes from "prop-types";

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
};

ListaTareas.propTypes = {
  modificarTarea: PropTypes.func.isRequired,
  tareas: PropTypes.arrayOf(PropTypes.shape({
    titulo: PropTypes.string.isRequired,
    hecho: PropTypes.bool.isRequired,
    hora: PropTypes.string.isRequired,
    detalles: PropTypes.array,
  })).isRequired,
};

export default ListaTareas;