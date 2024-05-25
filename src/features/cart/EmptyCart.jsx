import Header from "../../ui/header/Header";
import styles from "./Cart.module.css";

function EmptyCart() {
  return (
    <section className="page_layout">
      <Header show="menu" />

      <div className="page_background">
        <div className="cart">
          <p className={styles.title_empty}>
            Your cart is still empty. Start adding some pizzas :)
          </p>
        </div>
      </div>
    </section>
  );
}

export default EmptyCart;
