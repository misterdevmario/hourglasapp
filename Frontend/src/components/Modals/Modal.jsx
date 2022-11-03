import { AiOutlineCloseCircle } from "react-icons/ai";
import "./modals.css";

const Modal = ({ children, isOpen, closeModal }) => {
  return (
    <div className={`modal ${isOpen && 'is-open' }`}>
        <AiOutlineCloseCircle onClick={closeModal} className="modal-close" size={35} color='#a028cc' />
      <div className="modal-container">
        {children}
      </div>
    </div>
  );
};

export default Modal;

