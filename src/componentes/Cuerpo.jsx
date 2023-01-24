import ListaTareas from "./ListaTareas";

function Cuerpo(props) {
    return (
        <main>
            <ListaTareas tareas={props.tareas}/>
        </main>
    )
}

export default Cuerpo;