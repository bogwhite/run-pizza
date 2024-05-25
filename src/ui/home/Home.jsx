import Header from "../header/Header";
import Button from "../button/Button";
import Footer from "../footer/Footer";
import styles from "./Home.module.css";

function Home() {
  return (
    <section className="home_layout">
      <Header show="menu" />

      <div className="home_background">
        <div className="home">
          <div className={styles.title}>
            <h1>
              <span>Fast Pizza</span>
              <br />
              delivery
            </h1>

            <p>
              Authentic Italian Pizza straight from the oven &mdash; with
              delivery to your door <br />
              Elevating Pizza Delivery to New Heights! We leave no room for
              comparasion <br />
              Feel the difference &ndash; Run Pizza
            </p>

            <div className={styles.title_cta}>
              <Button to="/menu" baseType="base" extraType="primary">
                View Menu
              </Button>
            </div>
          </div>

          <div className={styles.content}>
            <img src="/images/hero.png" alt="pizza home" />
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
}

export default Home;
