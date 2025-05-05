import { useState } from 'react';
import Modal from '../Modal/Modal.jsx';
import ModalApproveAction from '../Modal/ModalApproveAction/ModalApproveAction.jsx';

const LogOutBtn = ({ className, onCloseMenu, isMobileMenu }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const hendleOpenModal = () => {
    setIsOpenModal(true);
  };

  const hendleCloseModal = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      <button className={className} type='button' onClick={hendleOpenModal}>
        LOG OUT
      </button>
      <Modal isOpen={isOpenModal} onClose={hendleCloseModal}>
        <ModalApproveAction
          isMobileMenu={isMobileMenu}
          onCloseMenu={onCloseMenu}
          onClose={hendleCloseModal}
        />
      </Modal>
    </>
  );
};
export default LogOutBtn;
