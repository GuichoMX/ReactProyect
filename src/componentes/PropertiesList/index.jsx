import PropTypes from "prop-types";

import "./index.css"
import Property from "../Property"
import { PropertyType } from "../../prop-types";

function PropertiesList(props) {
  return (
    <ul className="no-bullets">
      <main class="main">
        <div class="hero-propiedades">
          <div class="hero-contenedor">
            <h1>Propiedades</h1>
          </div>
        </div>
        <section id="propiedades" class="propiedades">
          <div class="propiedades-caja">
            <div class="propiedades-params" id="contenidoMain">
            {
              props.properties.map((elemento) => {
                return (
                  <Property
                    key={elemento.id}
                    addProperties={props.addProperties}
                    {...elemento}
                  />
                )
              })
            }
          </div>
        </div>
      </section>
    </main>
    </ul >
  )
};

PropertiesList.propTypes = {
  addProperties: PropTypes.func.isRequired,
  properties: PropTypes.arrayOf(PropertyType).isRequired,
};

export default PropertiesList;