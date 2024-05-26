import { useDispatch } from "react-redux";
import { decreaseItemQuantity, increaseItemQuantity } from "../slice/cartSlice";
import Button from "../../../ui/button/Button";
import styles from "./UpdateItemQuantity.module.css";

function UpdateItemQuantity({ pizzaId, currentQuantity, menuType }) {
  // Dispatch access
  const dispatch = useDispatch();

  return (
    <div className={`${styles.toggle_quantity} ${styles[menuType]}`}>
      <Button
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
        extraType="quantity"
      >
        <img src="/icons/quantity/minus.svg" alt="icon-minus" />
      </Button>
      <span>{currentQuantity}</span>
      <Button
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
        extraType="quantity"
      >
        <img src="/icons/quantity/plus.svg" alt="icon-plus" />
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
