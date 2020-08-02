import React, { useState } from "react";

import Cuadro from "./components/Cuadro";
import Button from "./components/Button";

import "./App.css";

function App() {
  const [saludo, setSaludo] = useState("¿Como te irá hoy?");

  const [tryAgain, settryAgain] = useState("Juega ahora");

  const go = () => {
    const saludos = ["Muy mal", "Mal", "Regular", "Bien", "Excelente"];
    const elige = Math.floor(Math.random() * saludos.length);

    setSaludo(saludos[elige]);

    settryAgain("Intenta de nuevo");
  };
  //tarea hacer el boton dinamico con un state, intentar cambiar la logica a otro componente
  return (
    <div className="Square">
      <Cuadro saludar={saludo} />

      <Button onClick={go} trying={tryAgain}></Button>
    </div>
  );
}

export default App;
