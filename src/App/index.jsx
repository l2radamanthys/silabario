import React from "react"
import { InputPalabra } from '../InputPalabra';
import { SilabaItem } from "../SilabaItem";
import { ListadoSilabas } from "../ListadoSilabas";
import { CenteredBlock } from "../CenteredBlock";
import { Header } from "../Header";
import { Modal } from "../Modal";
import { PalabraForm } from "../PalabraForm";
import { BotonAgregar } from "../BotonAgregar";
import { useSilabas } from "./useSilabas";

function App() {
  const {
    diccionario,
    addEntry,
    palabra, 
    setPalabra,
    isOpenModal, 
    setIsOpenModal,
    toggleModal,
    getSilabas,
  } = useSilabas();

  const silabas = getSilabas(palabra, diccionario);
  console.log(silabas);

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