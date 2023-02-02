import PropTypes from "prop-types";

import "./index.css"
import Tarea from "../Tarea"
import { TareaType } from "../../prop-types";

function ListaTareas(props) {
  return (
    <ul className="no-bullets">
      {
        props.tareas.map((elemento) => {
          return (
            <Tarea
              key={elemento.id}
              ponerTareas={props.ponerTareas}
              {...elemento}
            />
          )
        })
      }
    </ul>
  )
};

ListaTareas.propTypes = {
  ponerTareas: PropTypes.func.isRequired,
  tareas: PropTypes.arrayOf(TareaType).isRequired,
};

export default ListaTareas;