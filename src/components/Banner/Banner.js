import BannerModal from "./BannerModal";
import styles from "./Banner.module.css";

function Banner() {
  return (
    <div className={styles.background}>
      <article className={styles.bannerArticle}>
        <BannerModal />
      </article>
    </div>
  );
}

export default Banner;
