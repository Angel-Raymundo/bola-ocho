import React, { useState } from "react";
import Cuadro from "./Cuadro";
import Button from "./Button";
import ButtonModes from "./ButtonModes";

export default function Logic() {
  const [option, setOption] = useState("¿Que te depara la suerte?");

  const [tryAgain, settryAgain] = useState("Juega ahora");

  const go = () => {
    const options = ["Muy mal", "Mal", "Regular", "Bien", "Excelente"];
    const elige = Math.floor(Math.random() * options.length);

    setOption(options[elige]);

    settryAgain("Intenta de nuevo");
  };

  const yon = () => {
    const options = ["Si", "No"];
    const elige = Math.floor(Math.random() * options.length);

    setOption(options[elige]);
  };

  return (
    <>
      <Cuadro print={option} />

      <Button onClick={go} trying={tryAgain}></Button>
      <ButtonModes onClick={yon}></ButtonModes>
    </>
  );
}
