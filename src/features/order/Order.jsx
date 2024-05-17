import { useEffect } from "react";
import { useFetcher, useLoaderData } from "react-router-dom";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";
import { getOrder } from "../../services/apiRestaurant";
import HeaderShow from "../../ui/header/HeaderShow";
import OrderItem from "./OrderItem";

function Order() {
  const order = useLoaderData();
  const fetcher = useFetcher();
  const { id, status, orderPrice, estimatedDelivery, cart } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  useEffect(
    function () {
      if (!fetcher.data && fetcher.state === "idle") fetcher.load("/menu");
    },
    [fetcher]
  );

  return (
    <div>
      <HeaderShow show="menu" />

      <div>
        <h2>Order #{id} status</h2>

        <div>
          <span>{status} order</span>
        </div>
      </div>

      <div>
        <p>
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p>(Estimated delivery: {formatDate(estimatedDelivery)})</p>
      </div>

      <ul>
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

      <div>
        <p>Price pizza: {formatCurrency(orderPrice)}</p>
      </div>
    </div>
  );
}

async function orderLoader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}

export { orderLoader };
export default Order;
