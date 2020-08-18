import React from "react";
import "./Button.css";

export default function ButtonModes({ onClick }) {
  return (
    <button onClick={onClick} className="button btnMode" ite>
      Si/No
    </button>
  );
}
