import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { useSelector } from "react-redux";
import { createOrder } from "../../../services/apiRestaurant";
import { clearCart, getCart } from "../../cart/slice/cartSlice";
import Header from "../../../ui/header/Header";
import Button from "../../../ui/button/Button";
import store from "../../../store";
import styles from "./CreateOrder.module.css";

// Phone number validation
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

function CreateOrder() {
  // Page navigation state
  const navigation = useNavigation();
  // Submitting state
  const isSubmitting = navigation.state === "submitting";
  // Form error
  const formError = useActionData();
  // Cart
  const cart = useSelector(getCart);

  return (
    <section className="page_layout">
      <Header show="price" />

      <div className="page_background">
        <div className="create_order">
          <h3 className={styles.title}>Delivery</h3>

          <Form method="POST" action="/order/new">
            <div>
              <input
                type="text"
                name="customer"
                placeholder="First Name"
                required
              />
            </div>

            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                required
              />
              {formError?.phone && <p>{formError.phone}</p>}
            </div>

            <div>
              <input type="text" name="address" placeholder="City" required />
            </div>

            <div className={styles.form__box}>
              <input
                type="text"
                name="street"
                placeholder="Street"
                required
                className={styles.input_street}
              />
              <input
                type="text"
                name="house"
                placeholder="House"
                className={styles.input_house}
              />
            </div>

            <div>
              <input type="hidden" name="cart" value={JSON.stringify(cart)} />
              <Button
                disabled={isSubmitting}
                baseType="base"
                extraType="order_form"
              >
                {isSubmitting ? "Placing order...." : "Order now"}
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </section>
  );
}

// Action Form
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
