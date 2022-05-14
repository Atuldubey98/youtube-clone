import React from "react";
import Modal from "react-modal";
const ModalSheet = ({
  modalIsOpen,
  afterOpenModal,
  closeModal,
  customStyles,
  children,
}) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
    >
      {children}
    </Modal>
  );
};
export default ModalSheet;
