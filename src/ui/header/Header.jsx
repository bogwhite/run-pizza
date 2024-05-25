import { Link } from "react-router-dom";
import HeaderShow from "./HeaderShow";
import styles from "./Header.module.css";

function Header({ show, fixed }) {
  return (
    <header className={`${styles.header} ${fixed ? styles.header_fixed : ""} `}>
      <Link to="/">
        <img src="/logo/logo.svg" alt="run pizza logo" />
      </Link>

      <HeaderShow show={show} />
    </header>
  );
}

export default Header;
