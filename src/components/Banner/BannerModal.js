import Button from "../Button";
import styles from "./BannerModal.module.css";

function BannerModal() {
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
        <Button />
      </div>
    </>
  );
}

export default BannerModal;
