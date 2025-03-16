import { FC, ReactNode } from 'react';
import ReactDOM from 'react-dom';
import st from './Modal.module.scss';

interface ModalProps {
   isOpen: boolean;
   onClose: () => void;
   children: ReactNode;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
   if (!isOpen) return null;

   const modalRoot = document.getElementById('modal-root');
   if (!modalRoot) return null;

   return ReactDOM.createPortal(
      <div className={st.overlay} onClick={onClose}>
         <div className={st.modal} onClick={(e) => e.stopPropagation()}>
            <button className={st.close} onClick={onClose}>&times;</button>
            {children}
         </div>
      </div>,
      modalRoot
   );
};

export default Modal;

