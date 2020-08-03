import React, { useState } from "react";
import Cuadro from "./Cuadro";
import Button from "./Button";

export default function Logic() {
  const [saludo, setSaludo] = useState("¿Como te irá hoy?");

  const [tryAgain, settryAgain] = useState("Juega ahora");

  const go = () => {
    const saludos = ["Muy mal", "Mal", "Regular", "Bien", "Excelente"];
    const elige = Math.floor(Math.random() * saludos.length);

    setSaludo(saludos[elige]);

    settryAgain("Intenta de nuevo");
  };
  return (
    <>
      <Cuadro saludar={saludo} />

      <Button onClick={go} trying={tryAgain}></Button>
    </>
  );
}
