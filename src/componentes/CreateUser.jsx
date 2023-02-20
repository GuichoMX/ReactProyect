import React from "react";
import PropTypes from "prop-types"
import { baseURL } from "../constantes";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const CreateUser = (props) => {
    const [fullName, addFullName] = React.useState("");
    const [assignedProperty, addAssignedProperty] = React.useState("");
    const [age, addAge] = React.useState("");
    const [state, addState] = React.useState("");
    const [city, addCity] = React.useState("");
    const [cellphone, addCellphone] = React.useState("");
    const [referenceNumber, addReferenceNumber] = React.useState("");

    const navigate = useNavigate();


    return (
        <main class="main">
            <div class="hero-propiedades">
                <div class="hero-contenedor">
                    <h1>Creating user...</h1>
                </div>
            </div>
            <div id="usuarios" class="usuarios">
                <div class="usuarios-caja">
                    <div class="propiedades-params-user-detail">
                        <div class="contenido-propiedades-user-detail">
                            <div class="contenido-user-detail">
                                <form>
                                    <label for="inNombre">Nombre:</label>
                                    <input type="text" class="form-control" id="inputAddress" placeholder="Full Name here"
                                            value={fullName}
                                            onChange={evt => {
                                                addFullName(evt.target.value)
                                            }}
                                        />
                                            <label for="inDireccion">Propiedad asignada:</label>
                                            <input type="text" class="form-control" id="inputAddress2" placeholder="Assigned Property"
                                            value={assignedProperty}
                                            onChange={evt => {
                                                addAssignedProperty(evt.target.value)
                                            }}
                                            />
                                            <label for="inNombre">Age:</label>
                                            <input type="text" class="form-control" id="inputAddress3" placeholder="Age"
                                            value={age}
                                            onChange={evt => {
                                                addAge(evt.target.value)
                                            }}
                                            />
                                            <label for="inNombre">State:</label>
                                            <input type="text" class="form-control" id="inputAddress4" placeholder="State here"
                                            value={state}
                                            onChange={evt => {
                                                addState(evt.target.value)
                                            }}
                                        />
                                            <label for="inNombre">City:</label>
                                            <input type="text" class="form-control" id="inputAddress3" placeholder="City here"
                                            value={city}
                                            onChange={evt => {
                                                addCity(evt.target.value)
                                            }} 
                                            />
                                            <label for="inNombre">Cellphone:</label>
                                            <input type="text" class="form-control" id="inputAddress3" placeholder="Cellphone"
                                            value={cellphone}
                                            onChange={evt => {
                                                addCellphone(evt.target.value)
                                            }} />
                                            <label for="inNombre">Reference number:</label>
                                            <input type="text" class="form-control" id="inputAddress3" placeholder="Reference number"
                                            value={referenceNumber}
                                            onChange={evt => {
                                                addReferenceNumber(evt.target.value)
                                            }} />
                                </form>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary"
                        onClick={e => {
                            e.preventDefault();

                            fetch(`${baseURL}/users`, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({
                                    fullName,
                                    assignedProperty,
                                    age,
                                    state,
                                    city,
                                    cellphone,
                                    referenceNumber,
                                })
                            })
                                .then(response => response.json())
                                .then(user => {
                                    props.addUsers({ tipo: "addUser", user });
                                    navigate("/users")
                                })
                        }}>Create User</button>
                    </div>
                </div>
            </div>
        </main>
    )
}

// CreateUser.propTypes = {
//     addUser: PropTypes.func.isRequired,
//   };

export default CreateUser;