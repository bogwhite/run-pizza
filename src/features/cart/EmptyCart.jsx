import HeaderShow from "../../ui/header/HeaderShow";

function EmptyCart() {
  return (
    <div>
      <HeaderShow show="menu" />

      <p>Your cart is still empty. Start adding some pizzas :)</p>
    </div>
  );
}

export default EmptyCart;
