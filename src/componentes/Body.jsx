import PropTypes from "prop-types";
import { PropertyType } from "../prop-types";

import PropertiesList from "./PropertiesList";

function Body(props) {
    return (
        <main>
            <PropertiesList {...props} />
        </main>
    )
};

Body.propTypes = {
    addProperties: PropTypes.func.isRequired,
    properties: PropTypes.arrayOf(PropertyType).isRequired,
};

export default Body;