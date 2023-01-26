import React from "react";
import Cuerpo from "./componentes/Cuerpo";
import Encabezado from "./componentes/Encabezado";

const tareasIniciales = [
  {
    titulo: "Explicar JSX",
    hecho: true,
    hora: "7:00 am"
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

function App() {
  const [tareas, ponerTareas] = React.useState(tareasIniciales);
  const [toggle, setToggle] = React.useState("light");

  const modificarTarea = (id, propiedad, valor) => {
    const copiaTareas = [...tareas];
    copiaTareas[id][propiedad] = valor;
    ponerTareas(copiaTareas);
  };

  return (
    <div className={`wrapper ${toggle}`}>
      <Encabezado tareas={tareas} toggle={toggle} setToggle={setToggle} />
      <Cuerpo tareas={tareas} modificarTarea={modificarTarea} />
    </div>
  );
}

export default App;