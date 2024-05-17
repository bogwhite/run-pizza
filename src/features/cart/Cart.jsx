import { useDispatch, useSelector } from "react-redux";
import { getCart, clearCart } from "./cartSlice";
import HeaderShow from "../../ui/header/HeaderShow";
import Button from "../../ui/Button";
import EmptyCart from "./EmptyCart";
import CartItem from "./CartItem";

function Cart() {
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  if (!cart.length) return <EmptyCart />;

  return (
    <div>
      <HeaderShow show="menu" />

      <ul>
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div>
        <Button to="/order/new">Order pizzas</Button>
        <Button onClick={() => dispatch(clearCart())}>Clear cart</Button>
      </div>
    </div>
  );
}

export default Cart;
