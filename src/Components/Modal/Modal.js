import React, { useState } from "react";
import { IoPawOutline } from 'react-icons/io5';
import { AiOutlineClose } from 'react-icons/ai';

import "./Modal.css";

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Open
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2 className="title">Congrats!</h2>
            <p className="text">Your registration is success</p>
        
            <div className="button-wrap">
              <button className="modal-button">Go to profile <IoPawOutline className="icon" /></button>
              
            </div>
            <button className="close-modal" onClick={toggleModal}>
              <AiOutlineClose className="icon-close"/>
            </button>
          </div>
        </div>
      )}
      <p>content.</p>
    </>
  );
}
