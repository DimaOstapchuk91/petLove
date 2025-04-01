import { useEffect } from 'react';
import s from './Modal.module.css';
import sprite from '../../assets/sprite.svg';
import { createPortal } from 'react-dom';

const modalRoot = document.getElementById('modal-root');

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.classList.add(s.noScroll);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.classList.remove(s.noScroll);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div className={s.backdrop} onClick={onClose}>
      <div className={s.window} onClick={e => e.stopPropagation()}>
        <button className={s.closeButton} onClick={onClose}>
          <svg className={s.icon}>
            <use href={`${sprite}#icon-close-icon`} />
          </svg>
        </button>
        {children}
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
