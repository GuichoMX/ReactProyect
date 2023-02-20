import PropTypes from "prop-types";

const Tarea = {
    id: PropTypes.number.isRequired,
    titulo: PropTypes.string.isRequired,
    hecho: PropTypes.bool.isRequired,
    hora: PropTypes.string.isRequired,
    detalles: PropTypes.array,
};

const Property = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    hecho: PropTypes.string.isRequired,
    details: PropTypes.array,
};

const User = {
    id: PropTypes.number.isRequired,
    fullName: PropTypes.string.isRequired,
    assignedProperty: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    state: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    cellphone: PropTypes.string.isRequired,
    referenceNumber: PropTypes.string.isRequired,
};

const TareaType = PropTypes.shape(Tarea);
const PropertyType = PropTypes.shape(Property);
const UserType = PropTypes.shape(User);

export {
    Tarea,
    TareaType,
    Property,
    PropertyType,
    User,
    UserType
}