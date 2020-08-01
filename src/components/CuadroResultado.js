import React from "react";
import "./CuadroResultado.css";

export default function Cuadro() {
  const saludo = ["hola", "hello", "holaaa"];
  const elige = Math.floor(Math.random() * saludo.length);
  const saludar = saludo[elige];
  return saludar;
}
