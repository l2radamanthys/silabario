import React from "react"
import { InputPalabra } from '../InputPalabra';
import { SilabaItem } from "../SilabaItem";
import { ListadoSilabas } from "../ListadoSilabas";
import { separarSilabas } from "../utils";

function App() {
  const [palabra, setPalabra] = React.useState("Pelota");
  const silabas = separarSilabas(palabra);

  return (
    <React.Fragment>
      <h1>Sílabario</h1>

      <InputPalabra palabra={palabra} setPalabra={setPalabra}/>

      <ListadoSilabas>
        {silabas.map(silaba => (
          <SilabaItem silaba={silaba} />
        ))}
      </ListadoSilabas>
    </React.Fragment>
  );
}


export { App }