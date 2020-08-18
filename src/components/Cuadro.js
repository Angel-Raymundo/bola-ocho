import React from "react";
import "./Cuadro.css";

export default function Cuadro({ print }) {
  return (
    <div className="Circle">
      <div className="Minicircle">
        <div className="Cuadro">
          <p>{print}</p>
        </div>
      </div>
    </div>
  );
}
