import React from "react";
import ReactDOM from "react-dom";
import { useEffect } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

import "./modals.css";

const AppModal = ({ children, isOpen, closeModal }) => {

  const onClickClose = (e) => {
    if (e.key === "Enter" || "Escape") {
      closeModal();
    };
    }
  useEffect(() => {

      document.addEventListener('keydown', onClickClose);
      return () => {
        document.removeEventListener('keydown', onClickClose);
      };
  }, []);

  return ReactDOM.createPortal(
    <div className={`modal ${isOpen && "is-open"}`}>
      <AiOutlineCloseCircle
        onClick={(e)=>{closeModal(); e.stopPropagation(e)}}
        className="modal-close"
        size={35}
        color="#fff"
      />
      
      <div className="modal-container">{children}</div>
    </div>, document.getElementById('portal')
  );
};

export default AppModal;
