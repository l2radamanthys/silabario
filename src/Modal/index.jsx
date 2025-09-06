import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";


function Modal({ children, isOpen, toggleModal }) {
  if (!isOpen) return null;
  return  ReactDOM.createPortal(
    <div className="ModalBackground">
      <div className="ModalContainer">
        <div className="text-right">
          <button className="cursor-pointer" onClick={toggleModal}>X</button>
        </div>
        {children}
        
      </div>
    </div>
  , document.getElementById('modal'));
}

export { Modal };