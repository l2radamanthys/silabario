import React from "react"
import { InputPalabra } from '../InputPalabra';
import { SilabaItem } from "../SilabaItem";
import { ListadoSilabas } from "../ListadoSilabas";
import { separarSilabas } from "../utils";
import { CenteredBlock } from "../CenteredBlock";
import { Header } from "../Header";

function App() {
  const [palabra, setPalabra] = React.useState("Pelota");
  const silabas = separarSilabas(palabra);

  return (
    <CenteredBlock>
      <Header />
      <InputPalabra palabra={palabra} setPalabra={setPalabra}/>
      <ListadoSilabas>
        {silabas.map(silaba => (
          <SilabaItem silaba={silaba} />
        ))}
      </ListadoSilabas>
    </CenteredBlock>
  );
}

export { App }