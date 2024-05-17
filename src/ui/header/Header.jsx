import { Link } from "react-router-dom";
import HeaderShow from "./HeaderShow";

function Header({ show }) {
  return (
    <header>
      <Link to="/">
        <img src="/logo/logo.svg" alt="run pizza logo" />
      </Link>

      <HeaderShow show={show} />
    </header>
  );
}

export default Header;
