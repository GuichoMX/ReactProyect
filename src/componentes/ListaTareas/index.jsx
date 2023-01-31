import PropTypes from "prop-types";

import "./index.css"
import Tarea from "../Tarea"
import { TareaType } from "../../prop-types";

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
  tareas: PropTypes.arrayOf(TareaType).isRequired,
};

export default ListaTareas;