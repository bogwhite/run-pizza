import { formatCurrency } from "../../utils/helpers";
import { useDispatch, useSelector } from "react-redux";
import { addItem, getCurrentQuantityById } from "../cart/slice/cartSlice";
import Button from "../../ui/button/Button";
import UpdateItemQuantity from "../cart/items/UpdateItemQuantity";
import DeleteItem from "../cart/items/DeleteItem";
import styles from "./Menu.module.css";

function MenuItem({ pizza }) {
  // Pizza
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  // Dispatch access
  const dispatch = useDispatch();
  // Current quantity
  const currentQuantity = useSelector(getCurrentQuantityById(id));
  const isInCart = currentQuantity > 0;

  // Add item to the cart
  function handleAddtoCart() {
    const newItem = {
      pizzaId: id,
      name,
      imageUrl,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  }

  return (
    <li className={styles.item}>
      <img
        src={imageUrl}
        alt={name}
        className={`${styles.item_img} ${soldOut ? styles.item_sold : ""}`}
      />

      <div className={styles.item__box}>
        <h4 className={styles.item_title}>{name}</h4>
        <p className={styles.item_ingredients}>{ingredients.join(", ")}</p>

        <div className={styles.cart__box}>
          {!soldOut ? (
            <p className={styles.cart_price}>{formatCurrency(unitPrice)}</p>
          ) : (
            <p className={styles.cart_sold}>Sold out</p>
          )}

          {isInCart && (
            <div className={styles.cta__box}>
              <UpdateItemQuantity
                pizzaId={id}
                currentQuantity={currentQuantity}
              />
              <DeleteItem pizzaId={id} />
            </div>
          )}

          {!soldOut && !isInCart && (
            <Button
              onClick={handleAddtoCart}
              baseType="base"
              extraType="order_menu"
            >
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
