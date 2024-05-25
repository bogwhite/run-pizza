import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <Link to="/" className={styles.logo}>
        <img src="/logo/logo.svg" alt="run pizza logo" />
      </Link>

      <ul className={styles.social_media}>
        <li>
          <a href="#">
            <img src="/icons/socialMedia/twitter.svg" alt="icon-twitter" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="/icons/socialMedia/facebook.svg" alt="icon-facebook" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="/icons/socialMedia/instagram.svg" alt="icon-instagram" />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
