import React from "react";
import Cuerpo from "./componentes/Cuerpo";
import Encabezado from "./componentes/Encabezado";

const tareasIniciales = [
  {
    titulo: "Explicar JSX",
    hecho: true,
    hora: "7:00 am",
  },
  {
    titulo: "Explicar a profundidad VirtualDOM",
    hecho: false,
    hora: "9:25 am"
  },
  {
    titulo: "Explicar qué es un componente",
    hecho: true,
    hora: "11:05 am"
  },
  {
    titulo: "Explicar qué es una propiedad (prop)",
    hecho: true,
    hora: "2:13 pm"
  }
];
const reductorTareas = (estado, accion) => {
  const nuevoEstado = [...estado];

  switch(accion.tipo) {
    case "ponerHecho":
      nuevoEstado[accion.id].hecho = true;
      return nuevoEstado;
    case "quitarHecho":
      nuevoEstado[accion.id].hecho = false;
      return nuevoEstado;
    default:
      throw new Error(`Acción desconocida: ${accion.tipo}`);
  }
};

const estadoInicial = "light";
const calcularSiguienteEstado = (estado) => {
  switch (estado) {
      case "light":
          return "medium";
      case "medium":
          return "dark";
      case "dark":
          return "light";
      default:
          return "";
  }
};
const calcularPrevioEstado = (estado) => {
  switch (estado) {
      case "light":
          return "dark";
      case "medium":
          return "light";
      case "dark":
          return "medium";
      default:
          return "";
  }
};
const reductor = (estado, accion) => {
  switch(accion.tipo) {
    case "siguiente":
      return calcularSiguienteEstado(estado);
    case "previo":
      return calcularPrevioEstado(estado);
    default:
      throw new Error(`Acción desconocida: ${accion.tipo}`)
  }
};

function App() {
  const [tareas, ponerTareas] = React.useReducer(reductorTareas, tareasIniciales);
  const [toggle, setToggle] = React.useReducer(reductor, estadoInicial);

  return (
    <div className={`wrapper ${toggle}`}>
      <Encabezado tareas={tareas} toggle={toggle} setToggle={setToggle} />
      <Cuerpo tareas={tareas} ponerTareas={ponerTareas} />
    </div>
  );
}

export default App;