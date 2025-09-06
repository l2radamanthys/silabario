import React from "react";

function InputPalabra({ palabra, setPalabra }) {
  const onPalabraChange = (event) => {
    setPalabra(event.target.value);
  };

  return (
    <React.Fragment>
      <div className="max-w-128 mx-auto p-4">
        <p className="p-4 text-center text-xl font-primary">Ingrese la palabra a separar en sílabas:</p>
        <input
          className="w-full text-center px-4 py-2 border bg-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          value={palabra} 
          onChange={onPalabraChange}/>
      </div>
    </React.Fragment>
  )
}

export { InputPalabra }