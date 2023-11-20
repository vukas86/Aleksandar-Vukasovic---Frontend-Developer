import styles from "./Footer.module.css";
import github from "../assets/icons/gh.svg";
import linkedin from "../assets/icons/ln.svg";

function Footer() {
  return (
    <section className={styles.footerContainer}>
      <div>
        &copy; {new Date().getFullYear()} <span>aleksandarvukasovic</span>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/aleksandar-vukasovic/"
          target={"_blank"}
          rel="noreferrer"
        >
          <img
            src={linkedin}
            alt="Linkedin Icon"
            className={styles.footerIcon}
          />
        </a>
        <a href="https://github.com/vukas86" target={"_blank"} rel="noreferrer">
          <img src={github} alt="Github Icon" className={styles.footerIcon} />
        </a>
      </div>
    </section>
  );
}

export default Footer;
