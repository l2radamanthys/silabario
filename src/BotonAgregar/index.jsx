import React from "react";

function BotonAgregar({ onAgregarEvent }) {
  return (
    <p className="text-center font-primary text-secondary italic text-s">
      ¿No coinciden las silabas con las palabras? <br /> Podes&nbsp;
      <button 
        className="font-bold pointer text-primary" 
        onClick={onAgregarEvent}
      >
        Agregarla
      </button>
      &nbsp;al diccionario personalizado.
    </p>
  );
}

export { BotonAgregar };