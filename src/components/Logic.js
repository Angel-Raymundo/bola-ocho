import React, { useState } from "react";
import Cuadro from "./Cuadro";
import Button from "./Button";
import ButtonModes from "./ButtonModes";

export default function Logic() {
  const [mode, setMode] = useState("Intenta con alguna opcion");
  const [option, setOption] = useState("¿Que te depara la suerte?");
  const [tryAgain, settryAgain] = useState("Juega ahora");

  const yon = () => {
    const elige = Math.floor(Math.random() * mode.length);
    setOption(mode[elige]);
    settryAgain("Intenta de nuevo");
  };

  const go = () => {
    /*const options = ["Muy mal", "Mal", "Regular", "Bien", "Excelente"];*/
    const elige = Math.floor(Math.random() * mode.length);

    setOption(mode[elige]);
    settryAgain("Intenta de nuevo");
  };

  return (
    <>
      <Cuadro print={option} />
      <ButtonModes onClick={() => setMode(["si", "no"])}>si/no</ButtonModes>
      <ButtonModes
        onClick={() =>
          setMode(["Muy mala", "Mala", "Regular", "Buena", "Excelente"])
        }
      >
        Tu suerte hoy
      </ButtonModes>
      <ButtonModes onClick={() => setMode(["si", "no"])}>si/no</ButtonModes>
      <Button onClick={go} trying={tryAgain}></Button>
    </>
  );
}
