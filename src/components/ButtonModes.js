import React from "react";
import "./Button.css";

export default function ButtonModes({ onClick, children }) {
  return (
    <button onClick={onClick} className="button btnMode">
      {children}
    </button>
  );
}
