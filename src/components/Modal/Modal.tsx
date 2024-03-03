import React, { ReactNode } from "react";
import styles from "./Modal.module.scss";

interface ModalProps {
  query?: string | null;
  modal: boolean;
  toggleModal: Function;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  query,
  modal,
  toggleModal,
  children,
}) => {
  return (
    <>
      {modal && (
        <div className={styles.modal}>
          <div onClick={() => toggleModal()} className={styles.overlay}></div>
          <div className={styles["modal-content"]}>
            {children}
            <button className={styles["close-modal"]} onClick={() => toggleModal()}>
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
