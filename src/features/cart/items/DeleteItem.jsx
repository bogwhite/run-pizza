import { useDispatch } from "react-redux";
import { deleteItem } from "../slice/cartSlice";
import Button from "../../../ui/button/Button";

function DeleteItem({ pizzaId, cartType }) {
  // Dispatch access
  const dispatch = useDispatch();

  return (
    <Button
      onClick={() => dispatch(deleteItem(pizzaId))}
      baseType="base"
      extraType="delete"
      cartType={cartType ? "cart_delete" : ""}
    >
      Delete
    </Button>
  );
}

export default DeleteItem;
