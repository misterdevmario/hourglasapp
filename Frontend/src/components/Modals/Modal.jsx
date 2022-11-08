import { useEffect } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

import "./modals.css";

const Modal = ({ children, isOpen, closeModal }) => {

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

  return (
    <div className={`modal ${isOpen && "is-open"}`}>
      <AiOutlineCloseCircle
        onClick={closeModal}
        className="modal-close"
        size={35}
        color="#fff"
      />
      <div className="modal-container">{children}</div>
    </div>
  );
};

export default Modal;
