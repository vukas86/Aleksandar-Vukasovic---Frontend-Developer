import styles from "./Modal.module.css";

function Modal({ closeModal }) {
  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContainer}>
        <h1>
          Name: <span>Falcon</span>
        </h1>
        <h3>
          Type: <span>Rocket</span>
        </h3>
        <h3>
          Country: <span>USA</span>
        </h3>
        <h3>
          First Flight: <span>05/12/2021</span>
        </h3>
        <button onClick={() => closeModal(false)}> Close </button>
      </div>
    </div>
  );
}

export default Modal;
