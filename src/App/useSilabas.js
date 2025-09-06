import React from "react";
import { separarSilabas } from "../utils";
import { dataStorage } from "./dataStorage";

function useSilabas() {
  const {
    data: diccionario,
    addEntry,
  } = dataStorage('SILABARIO_V1', {});
  const [palabra, setPalabra] = React.useState("Pelota");
  const [isOpenModal, setIsOpenModal] = React.useState(false);
  
  const toggleModal = () => {
    setIsOpenModal(!isOpenModal);
  }

  const getSilabas = (palabra, diccionario) => {
    let silabas = diccionario[palabra.toLowerCase()];
    if (!silabas) {
      silabas = separarSilabas(palabra);
    } else {
      silabas = silabas.split(" ");
    }
    return silabas;
  };

  return {
    diccionario,
    addEntry,
    palabra, 
    setPalabra,
    isOpenModal, 
    setIsOpenModal,
    toggleModal,
    getSilabas
  };
}


export { useSilabas };