import React from "react";

function PalabraForm({ listadoSilabas, addEntry, setOpenModal }) {
  const [silabas, setSilabas] = React.useState("");

  React.useEffect(() => {
    if (listadoSilabas.length > 0) {
      setSilabas(listadoSilabas.join(" "));
    }
  }, []);

  const onSubmit = (event) => {
    event !== null && event.preventDefault();
    addEntry(silabas.split(" "));
    setOpenModal(false);
  };

  return (
    <form className="" onSubmit={onSubmit}>
      <div className="mb-4 text-center">
        <label htmlFor="" className="font-primary">Ingrese las silabas separadas por espacio:</label>
        <input 
          type="text"
          className="w-full text-center px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary" 
          value={silabas}
          onChange={(event) => setSilabas(event.target.value)}  
        />
      </div>
      <button
        type="submit"
        className="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded w-full cursor-pointer"
      >
        Guardar
      </button>
    </form>
  );
}

export { PalabraForm };