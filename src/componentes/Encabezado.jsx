import Titulo from "./Titulo";

function Encabezado(props) {
    return (
        <>
          <Titulo mensaje="Miércoles 22 de noviembre" />
          <Titulo subtitulo mensaje={`${props.tareas.length} tareas`} />
        </>
    )
}

export default Encabezado;