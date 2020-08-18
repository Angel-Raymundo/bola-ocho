import React from "react";
import "./Button.css";

export default function Button({ onClick, trying }) {
  return (
    <button onClick={onClick} className="button btnPlay">
      {trying}
    </button>
  );
}

// Código en desuso
/*
export default class Button extends React.Component {
  constructor() {
    super();

    this.state = {
      saludo: "",
    };
  }

  imprime = () => {
    const saludo = ["hola", "hello", "holaaa"];
    const elige = Math.floor(Math.random() * saludo.length);

    this.setState({
      saludo: saludo[elige],
    });
  };

  render() {
    return (
      <>
        <Cuadro saludar={this.state.saludo} />
        <button onClick={this.imprime}>Prueba suerte</button>
      </>
    );
  }
}
*/
