import React from "react";
import { Routes, Route } from "react-router-dom";

import AcercaDe from "./componentes/AcercaDe";
import Cuerpo from "./componentes/Cuerpo";
import Encabezado from "./componentes/Encabezado";
import Menu from "./componentes/Menu";
import Error404 from "./componentes/Error404";
import PaginaPrincipal from "./componentes/PaginaPrincipal";
import Detalles from "./componentes/Detalles"

import { baseURL } from "./constantes";

const reductorTareas = (estado, accion) => {
  const nuevoEstado = [...estado];
  const indice = estado.findIndex(elemento => elemento.id === accion.id);

  switch(accion.tipo) {
    case "ponerHecho":
      nuevoEstado[indice].hecho = true;
      return nuevoEstado;
    case "quitarHecho":
      nuevoEstado[indice].hecho = false;
      return nuevoEstado;
    case "ponerTareas":
      return accion.tareas;
    case "borrarTarea":
      return estado.filter(tarea => tarea.id !== accion.id);
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
    fetch(`${baseURL}/tareas`)
      .then((response) => response.json())
      .then((tareas) => ponerTareas({ tipo: "ponerTareas", tareas }));
  }, []);

  return (
    <div className={`wrapper ${toggle}`}>
      <Menu />
      <Routes>
        <Route path="/" element={<PaginaPrincipal />} />
        <Route path="/tareas" element={
          <>
            <Encabezado tareas={tareas} toggle={toggle} setToggle={setToggle} />
            <Cuerpo tareas={tareas} ponerTareas={ponerTareas} />
          </>
        }/>
        <Route path="/tareas/:id" element={<Detalles tareas={tareas} />} />
        <Route path="/acercade" element={<AcercaDe />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;