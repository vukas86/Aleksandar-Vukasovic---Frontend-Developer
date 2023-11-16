import Button from "./Button";

import styles from "./Modal.module.css";

import rocket1 from "../assets/bg/rocket1.jpg";
import rocket2 from "../assets/bg/rocket2.jpg";
import { useState } from "react";

function Modal({ closeModal }) {
  const [selectedImage, setSelectedImage] = useState(0);

  const handleCloseModal = (e) => {
    e.preventDefault();
    if (e.target.classList.contains(styles.modalBackground)) {
      closeModal(false);
    }
  };

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  const images = [rocket1, rocket2];

  return (
    <div className={styles.modalBackground} onClick={handleCloseModal}>
      <div className={styles.modalContainer}>
        <section className={styles.infoPart}>
          <h1>
            NAME: <br /> <span>Falcon</span>
          </h1>
          <p>
            TYPE: <br /> <span>Rocket</span>
          </p>
          <p>
            COUNTRY: <br /> <span>USA</span>
          </p>
          <p>
            FIRST FLIGHT: <br /> <span>05/12/2021</span>
          </p>
          <Button
            onClick={() => closeModal(false)}
            background="blue"
            buttonText="CLOSE"
          />
        </section>
        <div className={styles.imagesSection}>
          {selectedImage !== null && (
            <section className={styles.selectedImageSection}>
              <img
                src={images[selectedImage]}
                alt={`Rocket ${selectedImage + 1}`}
                className={styles.selectedImage}
              />
            </section>
          )}
          <section className={styles.imagesPart}>
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Rocket ${index + 1}`}
                // className={selectedImage === index ? styles.selectedImage : ""}
                className={styles.tmbImg}
                onClick={() => handleImageClick(index)}
              />
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}

export default Modal;
