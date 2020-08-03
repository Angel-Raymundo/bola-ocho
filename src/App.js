import React, { useState } from "react";
import "./App.css";
import Logic from "./components/Logic";

function App() {
  //tarea hacer el boton dinamico con un state, intentar cambiar la logica a otro componente
  return (
    <div className="Square">
      <Logic />
    </div>
  );
}

export default App;
