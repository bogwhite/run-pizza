import { Link } from "react-router-dom";
import styles from "./Button.module.css";

function Button({ children, to, onClick, disabled, baseType, extraType }) {
  // To button
  if (to)
    return (
      <Link to={to} className={`${styles[baseType]} ${styles[extraType]}`}>
        {children}
      </Link>
    );
  // OnClick button
  if (onClick)
    return (
      <button
        onClick={onClick}
        className={`${styles[baseType]} ${styles[extraType]}`}
      >
        {children}
      </button>
    );
  // Regular button
  return (
    <button
      disabled={disabled}
      className={`${styles[baseType]} ${styles[extraType]}`}
    >
      {children}
    </button>
  );
}

export default Button;
