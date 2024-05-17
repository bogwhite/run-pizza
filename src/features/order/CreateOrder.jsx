import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { useSelector } from "react-redux";
import { createOrder } from "../../services/apiRestaurant";
import { clearCart, getCart } from "../cart/cartSlice";
import HeaderShow from "../../ui/header/HeaderShow";
import EmptyCart from "../cart/EmptyCart";
import Button from "../../ui/Button";
import store from "../../store";

const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

function CreateOrder() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const formError = useActionData();
  const cart = useSelector(getCart);
  if (!cart.length) return <EmptyCart />;

  return (
    <div>
      <HeaderShow show="price" />

      <h2>Ready to order? Let's go!</h2>

      <Form method="POST" action="/order/new">
        <div>
          <label>First Name</label>
          <input type="text" name="customer" required />
        </div>

        <div>
          <label>Phone number</label>
          <div>
            <input type="tel" name="phone" required />
            {formError?.phone && <p>{formError.phone}</p>}
          </div>
        </div>

        <div>
          <label>Address</label>
          <div>
            <input type="text" name="address" required />
          </div>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <Button disabled={isSubmitting}>
            {isSubmitting ? "Placing order...." : "Order now"}
          </Button>
        </div>
      </Form>
    </div>
  );
}

async function formOrder({ request }) {
  const data = Object.fromEntries(await request.formData());
  const order = {
    ...data,
    cart: JSON.parse(data.cart),
  };
  const error = {};
  if (!isValidPhone(order.phone))
    error.phone = "Please give us your correct phone number";
  if (Object.keys(error).length > 0) return error;
  const newOrder = await createOrder(order);
  store.dispatch(clearCart());
  return redirect(`/order/${newOrder.id}`);
}

export { formOrder };
export default CreateOrder;
