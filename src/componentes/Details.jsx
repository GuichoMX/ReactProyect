import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { Property } from "../prop-types";

const Details = (props) => {
    const { id } = useParams();
    const property = props.properties.find(property => property.id === Number(id));

    if (property === undefined) {
        return null;
    }

    return (
        <>
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