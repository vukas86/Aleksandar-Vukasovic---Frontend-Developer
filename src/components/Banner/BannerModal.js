import Button from "../Button";
import styles from "./BannerModal.module.css";

function BannerModal() {
  const scrollToMain = () => {
    const mainSection = document.getElementById("main-section");
    mainSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className={styles.bannerModal}>
        <div className={styles.bannerModalContainer}>
          <h1>Rocketseeker</h1>
          <p>
            Discover informations about SpaceX rockets with Rocketseeker. <br />
            Explore launch, history, status and many more with our app.
          </p>
        </div>
        <Button
          background=" linear-gradient(to right, #feac5e, #c779d0, #4bc0c8)"
          buttonText="EXPLORE"
          onClick={scrollToMain}
        />
      </div>
    </>
  );
}

export default BannerModal;
