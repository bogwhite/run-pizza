import { useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import { getCurrentQuantityById } from "./slice/cartSlice";
import UpdateItemQuantity from "./items/UpdateItemQuantity";
import DeleteItem from "./items/DeleteItem";
import styles from "./Cart.module.css";

function CartItem({ item }) {
  // Pizza item
  const { pizzaId, imageUrl, name, totalPrice } = item;
  // Current quantity
  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));

  return (
    <li className={styles.item}>
      <img src={imageUrl} alt={name} className={styles.item_img} />
      <div className={styles.item__box}>
        <h5 className={styles.item_name}>{name}</h5>
        <div className={styles.cart__box}>
          <p className={styles.cart_price}>{formatCurrency(totalPrice)}</p>
          <div className={styles.cta__box}>
            <UpdateItemQuantity
              pizzaId={pizzaId}
              currentQuantity={currentQuantity}
            />
            <DeleteItem pizzaId={pizzaId} cartType={true} />
          </div>
        </div>
      </div>
    </li>
  );
}

export default CartItem;
