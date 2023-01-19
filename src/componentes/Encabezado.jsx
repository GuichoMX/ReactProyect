import Titulo from "./Titulo";

function Encabezado() {
    return (
        <>
          <Titulo mensaje="Miércoles 22 de noviembre" />
          <Titulo subtitulo={true} mensaje="3 tareas" />
        </>
    )
}

export default Encabezado;