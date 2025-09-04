import React from "react";

function InputPalabra({ palabra, setPalabra }) {
  const onPalabraChange = (event) => {
    setPalabra(event.target.value);
  };

  return (
    <React.Fragment>
      <p>Ingrese la palabra a separar en silabas</p>
      <input 
        value={palabra} 
        onChange={onPalabraChange}/>
      <button>Separar</button>

      <p>Palabra: {palabra}</p>
    </React.Fragment>
  )
}

export { InputPalabra }