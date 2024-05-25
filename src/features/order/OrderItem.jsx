import { formatCurrency } from "../../utils/helpers";
import styles from "./Order.module.css";

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  // Order item
  const { quantity, name, totalPrice } = item;

  return (
    <li className={styles.item}>
      <div className={styles.item__box}>
        <p className={styles.item_name}>
          <span className={styles.item_quantity}>{quantity}&times;</span>
          {name}
        </p>
        <p className={styles.item_price}>{formatCurrency(totalPrice)}</p>
        <p className={styles.item_ingredients}>
          {isLoadingIngredients ? "Loading..." : ingredients.join(", ")}
        </p>
      </div>
    </li>
  );
}

export default OrderItem;
