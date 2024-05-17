import { Link, useNavigate } from "react-router-dom";

function Button({ children, to, onClick, disabled, type }) {
  const navigate = useNavigate();

  if (to === "-1")
    return <button onClick={() => navigate(-1)}>{children}</button>;

  if (to)
    return (
      <Link to={to} className={[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={[type]}>
      {children}
    </button>
  );
}

export default Button;
