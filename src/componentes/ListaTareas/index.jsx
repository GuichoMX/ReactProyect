import PropTypes from "prop-types";

import "./index.css"
import Tarea from "../Tarea"
import { TareaType } from "../../prop-types";

function ListaTareas(props) {
  return (
    <ul className="no-bullets">
      <main class="main">
        <div class="hero-tasks">
          <div class="hero-tasks-contenedor">
            <h1>Tareas</h1>
          </div>
        </div>
        <section id="propiedades" class="propiedades">
          <div class="propiedades-caja">
            <div class="propiedades-params" id="contenidoMain">
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
            </div>
          </div>
        </section>
      </main>
    </ul>
  )
};

ListaTareas.propTypes = {
  ponerTareas: PropTypes.func.isRequired,
  tareas: PropTypes.arrayOf(TareaType).isRequired,
};

export default ListaTareas;