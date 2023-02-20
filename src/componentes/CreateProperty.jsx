import React from "react";
// import PropTypes from "prop-types"
import { baseURL } from "../constantes";
import { useNavigate } from "react-router-dom";

const CreateProperty = (props) => {
    const [name, addName] = React.useState("");
    const [address, addAddress] = React.useState("");
    const [user, addUser] = React.useState("");
    const [details, addDetails] = React.useState("");

    const navigate = useNavigate();


    return (
        <main class="main">
            <div class="hero-propiedades">
                <div class="hero-contenedor">
                    <h1>Creating Property...</h1>
                </div>
            </div>
            <div id="usuarios" class="usuarios">
                <div class="usuarios-caja">
                    <div class="propiedades-params-user-detail">
                        <div class="contenido-propiedades-user-detail">
                            <div class="contenido-user-detail">
                                <form id="propertyForm">
                                    <label for="inNombre">Nombre:</label>
                                    <input type="text" class="form-control" id="inputAddress" placeholder="Names here"
                                        value={name}
                                        onChange={evt => {
                                            addName(evt.target.value)
                                        }}
                                    />
                                    <label for="inDireccion">Dirección:</label>
                                    <input type="text" class="form-control" id="inputAddress2" placeholder="Address here"
                                        value={address}
                                        onChange={evt => {
                                            addAddress(evt.target.value)
                                        }} />

                                    <label for="inNombre">Usuario asignado:</label>
                                    <input type="text" class="form-control" id="inputAddress3" placeholder="User Assigned here"
                                        value={user}
                                        onChange={evt => {
                                            addUser(evt.target.value)
                                        }} />

                                    <label for="inNombre">Comentarios:</label>
                                    <input type="text" class="form-control" id="inputAddress4" placeholder="Details here"
                                        value={details}
                                        onChange={evt => {
                                            addDetails(evt.target.value)
                                        }}
                                    />

                                    <label for="inNombre">Status:</label>
                                    <input type="text" class="form-control" 
                                    id="inputAddress4" 
                                    placeholder="Ocupado"
                                    disabled
                                    />

                                </form>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary"
                            onClick={e => {
                                e.preventDefault();

                                fetch(`${baseURL}/properties`, {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify({
                                        hecho: "Disponible",
                                        name,
                                        address,
                                        user,
                                        details: details.split(','),
                                    })
                                })
                                    .then(response => response.json())
                                    .then(property => {
                                        props.addProperties({ tipo: "addProperty", property });
                                        navigate("/properties")
                                    })
                            }}>Create Property</button>
                    </div>
                </div>
            </div>
        </main>
    )
}

// CreateProperty.propTypes = {
//     addProperty: PropTypes.func.isRequired,
//   };

export default CreateProperty;