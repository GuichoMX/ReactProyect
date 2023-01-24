import React from "react";
import "./App.css";
import Cuerpo from "./componentes/Cuerpo";
import Encabezado from "./componentes/Encabezado";

const tareasIniciales = [
  {
    titulo: "Explicar JSX",
    hecho: true,
  },
  {
    titulo: "Explicar a profundidad VirtualDOM",
    hecho: false,
  },
  {
    titulo: "Explicar qué es un componente",
    hecho: true,
  },
  {
    titulo: "Explicar qué es una propiedad (prop)",
    hecho: true,
  }
];

function App() {
  const [tareas] = React.useState(tareasIniciales);

  return (
    <>
      <Encabezado tareas={tareas} />
      <Cuerpo tareas={tareas} />
    </>
  );
}

export default App;