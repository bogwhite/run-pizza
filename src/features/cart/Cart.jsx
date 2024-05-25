import { useDispatch, useSelector } from "react-redux";
import { getCart, clearCart, getTotalCartPrice } from "./slice/cartSlice";
import { formatCurrency } from "../../utils/helpers";
import Header from "../../ui/header/Header";
import Button from "../../ui/button/Button";
import EmptyCart from "./EmptyCart";
import CartItem from "./CartItem";
import styles from "./Cart.module.css";

function Cart() {
  // Cart
  const cart = useSelector(getCart);
  // Total price
  const totalCartPrice = useSelector(getTotalCartPrice);
  // Dispatch access
  const dispatch = useDispatch();
  // No cart => EmptyCart
  if (!cart.length) return <EmptyCart />;

  return (
    <section className="page_layout">
      <Header show="menu" fixed={true} />

      <div className="page_background">
        <div className="cart">
          <h3 className={styles.title}>Order</h3>

          <ul>
            {cart.map((item) => (
              <CartItem item={item} key={item.pizzaId} />
            ))}
          </ul>

          <p className={styles.price_total}>
            Price total: {formatCurrency(totalCartPrice)}
          </p>

          <div className={styles.button__box}>
            <Button
              onClick={() => dispatch(clearCart())}
              baseType="base"
              extraType="clear"
            >
              Clear cart
            </Button>

            <Button to="/order/new" baseType="base" extraType="order_cart">
              Order now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
