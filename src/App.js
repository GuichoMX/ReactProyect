import React from "react";
import Cuerpo from "./componentes/Cuerpo";
import Encabezado from "./componentes/Encabezado";
import { URL } from "./constantes";

const reductorTareas = (estado, accion) => {
  const nuevoEstado = [...estado];

  switch(accion.tipo) {
    case "ponerHecho":
      nuevoEstado[accion.id].hecho = true;
      return nuevoEstado;
    case "quitarHecho":
      nuevoEstado[accion.id].hecho = false;
      return nuevoEstado;
    case "ponerTareas":
      return accion.tareas;
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
  const [tareas, ponerTareas] = React.useReducer(reductorTareas, []);
  const [toggle, setToggle] = React.useReducer(reductor, estadoInicial);

  React.useEffect(function(){
    fetch(URL)
      .then((response) => response.json())
      .then((tareas) => ponerTareas({ tipo: "ponerTareas", tareas }));
  }, []);

  return (
    <div className={`wrapper ${toggle}`}>
      <Encabezado tareas={tareas} toggle={toggle} setToggle={setToggle} />
      <Cuerpo tareas={tareas} ponerTareas={ponerTareas} />
    </div>
  );
}

export default App;