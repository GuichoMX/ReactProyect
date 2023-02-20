import React from "react";
import { Routes, Route } from "react-router-dom";

import CreateTarea from "./componentes/CreateTarea";
import AcercaDe from "./componentes/AcercaDe";
import Cuerpo from "./componentes/Cuerpo";
import Encabezado from "./componentes/Encabezado";
import Error404 from "./componentes/Error404";
import PaginaPrincipal from "./componentes/PaginaPrincipal";
import Detalles from "./componentes/Detalles"

import Header from "./componentes/Header"
import Body from "./componentes/Body"
import Details from "./componentes/Details"
import CreateProperty from "./componentes/CreateProperty";
import Navbar from "./componentes/Navbar/index"

import HeaderUser from "./componentes/HeaderUser"
import BodyUser from "./componentes/BodyUser"
import DetailsUser from "./componentes/DetailsUser"
import CreateUser from "./componentes/CreateUser";

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
    case "ponerTarea":
      return [...estado].concat([accion.tarea]);
    case "borrarTarea":
      return estado.filter(tarea => tarea.id !== accion.id);
    default:
      throw new Error(`Acción desconocida: ${accion.tipo}`);
  }
};

const propertiesReducer = (estado, accion) => {
  const nuevoEstado = [...estado];
  const indice = estado.findIndex(elemento => elemento.id === accion.id);

  switch(accion.tipo) {
    case "ponerHecho":
      nuevoEstado[indice].hecho = true;
      return nuevoEstado;
    case "quitarHecho":
      nuevoEstado[indice].hecho = false;
      return nuevoEstado;
    case "addProperties":
      return accion.properties;
    case "addProperty":
      return [...estado].concat([accion.property]);
    case "deleteProperty":
      return estado.filter(property => property.id !== accion.id);
    default:
      throw new Error(`Acción desconocida: ${accion.tipo}`);
  }
};

const usersReducer = (estado, accion) => {

  switch(accion.tipo) {
    case "addUsers":
      return accion.users;
    case "addUser":
      return [...estado].concat([accion.user]);
    case "deleteUser":
      return estado.filter(user => user.id !== accion.id);
    default:
      throw new Error(`Acción desconocida: ${accion.tipo}`);
  }
};

function App() {
  const [tareas, ponerTareas] = React.useReducer(reductorTareas, []);
  const [properties, addProperties] = React.useReducer(propertiesReducer, [])
  const [users, addUsers] = React.useReducer(usersReducer, [])

  React.useEffect(function(){
    fetch(`${baseURL}/users`)
      .then((response) => response.json())
      .then((users) => addUsers({ tipo: "addUsers", users }));
  }, []);

  React.useEffect(function(){
    fetch(`${baseURL}/properties`)
      .then((response) => response.json())
      .then((properties) => addProperties({ tipo: "addProperties", properties }));
  }, []);

  React.useEffect(function(){
    fetch(`${baseURL}/tareas`)
      .then((response) => response.json())
      .then((tareas) => ponerTareas({ tipo: "ponerTareas", tareas }));
  }, []);

  return (
    <div className={`wrapper`}>
      <Navbar />
      <Routes>
        <Route path="/" element={<PaginaPrincipal />} />
        <Route path="/tareas" element={
          <>
            <Encabezado tareas={tareas}/>
            <Cuerpo tareas={tareas} ponerTareas={ponerTareas} />
          </>
        }/>
        <Route path="/tareas/:id" element={<Detalles tareas={tareas} />} />
        <Route path="/properties" element={
          <>
            <Header properties={properties}/>
            <Body properties={properties} addProperties={addProperties} />
          </>
        }/>
        <Route path="/properties/:id" element={<Details properties={properties} />} />
        <Route path="/users" element={
          <>
            <HeaderUser users={users}/>
            <BodyUser users={users} addUsers={addUsers} />
          </>
        }/>
        <Route path="/users/:id" element={<DetailsUser users={users} />} />
        <Route path="/acercade" element={<AcercaDe />} />
        <Route path="/createtarea" element={<CreateTarea ponerTareas={ponerTareas}/>} />
        <Route path="/createproperty" element={<CreateProperty addProperties={addProperties}/>} />
        <Route path="/createuser" element={<CreateUser addUsers={addUsers}/>} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;