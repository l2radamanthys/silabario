import React from "react"
import { InputPalabra } from '../InputPalabra';
import { SilabaItem } from "../SilabaItem";
import { ListadoSilabas } from "../ListadoSilabas";
import { separarSilabas } from "../utils";
import { CenteredBlock } from "../CenteredBlock";
import { Header } from "../Header";
import { Modal } from "../Modal";
import { PalabraForm } from "../PalabraForm";
import { BotonAgregar } from "../BotonAgregar";

const initalValue = [{
  "pelotas": "pe lo tas",
}];

function App() {
  const [diccionarioSilabas, setDiccionarioSilabas] = React.useState(initalValue);
  const [palabra, setPalabra] = React.useState("Pelota");
  const [isOpenModal, setIsOpenModal] = React.useState(false);
  
  const toggleModal = () => {
    setIsOpenModal(!isOpenModal);
  }

  const addEntry = (silabas) => {
    const keyName = silabas.join("").toLowerCase();
    const newEntry = { [keyName]: silabas.join(" ") };
    setDiccionarioSilabas([...diccionarioSilabas, newEntry]);
  };

  let silabas = diccionarioSilabas.find(item => item[palabra.toLowerCase()])
  if (!silabas) {
    silabas = separarSilabas(palabra);
  } else {
    silabas = silabas[palabra.toLowerCase()].split(" ");
  }

  return (
    <React.Fragment>
      <CenteredBlock>
        <Header />
        <InputPalabra palabra={palabra} setPalabra={setPalabra}/>
        <ListadoSilabas>
          {silabas.map(silaba => (
            <SilabaItem silaba={silaba} />
          ))}
        </ListadoSilabas>
        {!!silabas.length && <BotonAgregar onAgregarEvent={toggleModal} />}
      </CenteredBlock>

      <Modal isOpen={isOpenModal} toggleModal={toggleModal}>
        <PalabraForm 
          listadoSilabas={silabas}
          setOpenModal={setIsOpenModal}
          addEntry={addEntry}
        />
      </Modal>
    </React.Fragment>
  );
}

export { App }