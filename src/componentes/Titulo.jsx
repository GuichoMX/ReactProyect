function Titulo(props) {
    if (props.subtitulo) {
        return <h3>{props.mensaje}</h3>
    }

    return <h1>{props.mensaje}</h1>
}

export default Titulo;