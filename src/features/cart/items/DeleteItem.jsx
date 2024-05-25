import { useDispatch } from "react-redux";
import { deleteItem } from "../slice/cartSlice";
import Button from "../../../ui/button/Button";

function DeleteItem({ pizzaId }) {
  // Dispatch access
  const dispatch = useDispatch();

  return (
    <Button
      onClick={() => dispatch(deleteItem(pizzaId))}
      baseType="base"
      extraType="delete"
    >
      Delete
    </Button>
  );
}

export default DeleteItem;
