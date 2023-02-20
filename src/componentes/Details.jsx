import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { Property } from "../prop-types";
import { Link } from "react-router-dom";

const Details = (props) => {
    const { id } = useParams();
    const property = props.properties.find(property => property.id === Number(id));

    if (property === undefined) {
        return null;
    }

    return (
        <>
        <main class="main">
                <div class="hero-propiedades">
                    <div class="hero-contenedor">
                        <h1>{property.name}</h1>
                    </div>
                </div>
                <div id="usuarios" class="usuarios">
                    <div class="usuarios-caja">
                        <div class="propiedades-params-user-detail">
                            <div class="contenido-propiedades-user-detail">
                                    <div class="contenido-user-detail">
                                        <form action="">
                                            <label for="inNombre">Nombre:</label>
                                            <input id="inNombre" type="text" placeholder={property.name} disabled />
                                            <label for="inDireccion">Usuario asignado a la propiedad:</label>
                                            <input id="inDireccion" type="text" placeholder={property.user} disabled />
                                            <label for="inNombre">Dirección:</label>
                                            <input id="inNombre" type="text" placeholder={property.address} disabled />
                                            <label for="inNombre">Disponibilidad:</label>
                                            <input id="inNombre" type="text" placeholder={property.hecho ? "Ocupado" : "Disponible"} disabled />
                                        </form>
                                    </div>
                            </div>
                            <button><Link to="/properties">Back to Properties</Link></button>
                        </div>
                    </div>
                </div>
            </main>
            <div>Título de la propiedad: {property.name}</div>
            {
                property.details.map((detail, indice) => <p key={indice}>{detail}</p>)
            }
        </>
    )
}

Details.propTypes = {
    properties: PropTypes.arrayOf(PropTypes.shape({...Property})).isRequired,
}

export default Details;