import React from "react";
import PropTypes from "prop-types"
import { baseURL } from "../constantes";
import { useNavigate } from "react-router-dom";

const CreateTarea = (props) => {
    const [titulo, ponerTitulo] = React.useState("");
    const [hora, ponerHora] = React.useState("");
    const [detalles, ponerDetalles] = React.useState("");

    const navigate = useNavigate();


    return(
    <form
    onSubmit={ e => {
        e.preventDefault();

        fetch(`${baseURL}/tareas`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                hecho:false,
                titulo,
                hora,
                detalles: detalles.split(','),
            })
        })
        .then(response => response.json())
        .then(tarea => {
            props.ponerTareas({tipo: "ponerTarea", tarea});
            navigate("/tareas")
        })
    }}
    >
        <div class="form-group">
            <label for="inputAddress">Titulo</label>
            <input type="text" class="form-control" id="inputAddress" placeholder="Your title here"
            value={titulo}
            onChange={evt => {
                ponerTitulo(evt.target.value)
            }}
            />
        </div>

        <div class="form-group">
            <label for="inputAddress2">Hora</label>
            <input type="text" class="form-control" id="inputAddress2" placeholder="Time here"
            value={hora}
            onChange={evt => {
                ponerHora(evt.target.value)
            }}/>
        </div>

        <div class="form-group">
            <label for="inputAddress2">Detalles</label>
            <input type="text" class="form-control" id="inputAddress2" placeholder="Details here"
            value={detalles}
            onChange={evt => {
                ponerDetalles(evt.target.value)
            }}
            />
        </div>
        <button type="submit" class="btn btn-primary">Create task</button>
        
    </form>
    )
}

CreateTarea.propTypes = {
    ponerTareas: PropTypes.func.isRequired,
  };

export default CreateTarea;