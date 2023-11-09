import styles from "./Navbar.module.css";
import logo from "../assets/logos/Rocketseeker-logos_transparenta-removebg-preview.png";

function Navbar() {
  return (
    <div className={styles.navContainer}>
      <nav>
        <img src={logo} className={styles.navImage} alt="logo"></img>
      </nav>
    </div>
  );
}

export default Navbar;
