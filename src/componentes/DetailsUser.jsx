import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { User } from "../prop-types";
import { Link } from "react-router-dom";

const DetailsUser = (props) => {
    const { id } = useParams();
    const user = props.users.find(user => user.id === Number(id));

    if (user === undefined) {
        return null;
    }

    return (
        <>
            {/* <div>Título del usuario: {user.fullName}</div>
            <p>{user.age}</p> */}
            <main class="main">
                <div class="hero-propiedades">
                    <div class="hero-contenedor">
                        <h1>{user.fullName}</h1>
                    </div>
                </div>
                <div id="usuarios" class="usuarios">
                    <div class="usuarios-caja">
                        <div class="propiedades-params-user-detail">
                            <div class="contenido-propiedades-user-detail">
                                    <div class="contenido-user-detail">
                                        <form action="">
                                            <label for="inNombre">Nombre:</label>
                                            <input id="inNombre" type="text" placeholder={user.fullName} disabled />
                                            <label for="inDireccion">Propiedad asignada:</label>
                                            <input id="inDireccion" type="text" placeholder={user.assignedProperty} disabled />
                                            <label for="inNombre">Age:</label>
                                            <input id="inNombre" type="text" placeholder={user.age} disabled />
                                            <label for="inNombre">Genero:</label>
                                            <input id="inNombre" type="text" placeholder={user.gender} disabled />
                                            <label for="inNombre">State:</label>
                                            <input id="inNombre" type="text" placeholder={user.state} disabled />
                                            <label for="inNombre">City:</label>
                                            <input id="inNombre" type="text" placeholder={user.city} disabled />
                                            <label for="inNombre">Cellphone:</label>
                                            <input id="inNombre" type="text" placeholder={user.cellphone} disabled />
                                            <label for="inNombre">Reference number:</label>
                                            <input id="inNombre" type="text" placeholder={user.referenceNumber} disabled />
                                        </form>
                                    </div>
                            </div>
                            <button><Link to="/users">Back to Users</Link></button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

DetailsUser.propTypes = {
    users: PropTypes.arrayOf(PropTypes.shape({ ...User })).isRequired,
}

export default DetailsUser;