import Button from "./Button";
import { useState } from "react";
import moment from "moment";
import { motion, AnimatePresence } from "framer-motion";

import styles from "./Modal.module.css";

function Modal({ closeModal, selectedRocket }) {
  const images = selectedRocket.flickr_images;
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: { y: "100vh" },
    opacity: 0,
  };

  const handleCloseModal = (e) => {
    e.preventDefault();
    if (e.target.classList.contains(styles.modalBackground)) {
      closeModal(false);
    }
  };

  const handleImageClick = (url) => {
    setSelectedImage(url);
  };

  const formatter = new Intl.NumberFormat("pt-BR");

  return (
    <AnimatePresence mode="wait">
      <motion.div className={styles.modalBackground} onClick={handleCloseModal}>
        <motion.div
          className={styles.modalContainer}
          variants={dropIn}
          animate="visible"
          initial="hidden"
        >
          <section className={styles.infoPart}>
            <h1>
              NAME: <br /> <span>{selectedRocket.name}</span>
            </h1>
            <p>
              MASS (kg): <br />
              <span>{formatter.format(selectedRocket.mass.kg)}</span>
            </p>
            <p>
              COUNTRY: <br /> <span>{selectedRocket.country}</span>
            </p>
            <p>
              FIRST FLIGHT: <br />{" "}
              <span>
                {moment(selectedRocket.first_flight).format("DD/MM/YYYY")}
              </span>
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
                  src={selectedImage}
                  alt={`Rocket ${selectedImage + 1}`}
                  className={styles.selectedImage}
                />
              </section>
            )}
            <section className={styles.imagesPart}>
              {selectedRocket.flickr_images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Rocket ${index + 1}`}
                  className={styles.tmbImg}
                  onClick={() => handleImageClick(image)}
                />
              ))}
            </section>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Modal;
