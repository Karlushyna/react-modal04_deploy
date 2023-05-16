import React, { useState } from "react";
// import { BsBoxArrowLeft } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import ButtonAgree from "./Button/ButtonAgree";

import css from "./Modal.module.css";

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
      <button onClick={toggleModal} className={css.btn-modal}>
        Open
      </button>

      {modal && (
        <div className={css.modal}>
          <div onClick={toggleModal} className={css.overlay}></div>
          <div className={css.modalContent}>
            <h2 className={css.title}>Already leaving?</h2>
        
            <div className={css.buttonWrap}>
              <button className={css.modalBtn} onClick={toggleModal}>Cancel</button>
              {/* <button className={`${css.modalBtn} ${css.btnAgree}`} >Yes <BsBoxArrowLeft className={css.icon} /></button> */}
            <ButtonAgree/>
            </div>
            <button className={css.closeBtn} onClick={toggleModal}>
              <AiOutlineClose className={css.closeIcon}/>
            </button>
          </div>
        </div>
      )}
      <p>content.</p>
    </>
  );
}
