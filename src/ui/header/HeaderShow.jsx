import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  getTotalCartQuantity,
  getTotalCartPrice,
} from "../../features/cart/slice/cartSlice";
import { formatCurrency } from "../../utils/helpers";
import styles from "./Header.module.css";

function HeaderShow({ show }) {
  // Total quantity
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  // Total price
  const totalCartPrice = useSelector(getTotalCartPrice);

  // Back
  if (show === "back")
    return (
      <Link className={styles.header_link} to="/">
        &larr; Back
      </Link>
    );
  // Menu
  if (show === "menu")
    return (
      <Link className={styles.header_link} to="/menu">
        Menu
      </Link>
    );
  // Cart
  if (show === "cart")
    return (
      <>
        {totalCartQuantity ? (
          <Link className={styles.header_link} to="/cart">
            Cart
          </Link>
        ) : null}
      </>
    );
  // Price
  if (show === "price")
    return (
      <div className={styles.price__box}>
        <Link className={styles.header_link} to="/menu">
          Menu
        </Link>
        <span className={styles.header_price}>
          {formatCurrency(totalCartPrice)}
        </span>
      </div>
    );
}

export default HeaderShow;
