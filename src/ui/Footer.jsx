import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <Link to="/">
        <img src="/logo/logo.svg" alt="run pizza logo" />
      </Link>

      <ul>
        <li>
          <a href="#">
            <img src="/icons/twitter.svg" alt="logo-twitter" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="/icons/facebook.svg" alt="logo-facebook" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="/icons/instagram.svg" alt="logo-instagram" />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
