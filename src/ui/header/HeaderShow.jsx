import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  getTotalCartQuantity,
  getTotalCartPrice,
} from "../../features/cart/cartSlice";
import { formatCurrency } from "../../utils/helpers";

function HeaderShow({ show }) {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);

  if (show === "menu") return <Link to="/menu">Menu</Link>;

  if (show === "cart")
    return <>{totalCartQuantity ? <Link to="/cart">Cart</Link> : null}</>;

  if (show === "price") return <span>{formatCurrency(totalCartPrice)}</span>;
}

export default HeaderShow;
