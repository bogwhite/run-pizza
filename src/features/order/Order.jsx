import { useEffect } from "react";
import { useFetcher, useLoaderData } from "react-router-dom";
import { formatCurrency, formatDate } from "../../utils/helpers";
import { getOrder } from "../../services/apiRestaurant";
import Header from "../../ui/header/Header";
import OrderItem from "./OrderItem";
import styles from "./Order.module.css";

function Order() {
  // Loader data
  const order = useLoaderData();
  // Fetcher access
  const fetcher = useFetcher();
  // Order
  const { id, status, orderPrice, cart } = order;

  // Menu data
  useEffect(
    function () {
      if (!fetcher.data && fetcher.state === "idle") fetcher.load("/menu");
    },
    [fetcher]
  );

  return (
    <section className="page_layout">
      <Header show="menu" />

      <div className="order">
        <div className={styles.order__box}>
          <div className={styles.status__box}>
            <h4 className={styles.status_number}>Order #{id}</h4>

            <p className={styles.status_state}>{status} order</p>

            <p className={styles.status_date}>Date: {formatDate(new Date())}</p>
          </div>

          <ul className={styles.item__list}>
            {cart.map((item) => (
              <OrderItem
                item={item}
                key={item.pizzaId}
                isLoadingIngredients={fetcher.state === "loading"}
                ingredients={
                  fetcher.data?.find((element) => element.id === item.pizzaId)
                    .ingredients ?? []
                }
              />
            ))}
          </ul>

          <div className={styles.price__box}>
            <p className={styles.price_text}>To pay on delivery:</p>
            <span className={styles.price_number}>
              {formatCurrency(orderPrice)}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

// Loader API
async function orderLoader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}

export { orderLoader };
export default Order;
