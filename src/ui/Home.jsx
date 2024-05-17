import Header from "./header/Header";
import Button from "./Button";
import Footer from "./Footer";

function Home() {
  return (
    <div>
      <Header show="menu" />

      <h1>
        <span>Fast Pizza</span> delivery
        <br />
        in your city
      </h1>

      <p>
        Authentic Italian Pizza straight from the oven &mdash; with delivery to
        your door <br />
        Elevating Pizza Delivery to New Heights! We leave no room for
        comparasion <br />
        Feel the difference &ndash; Run Pizza
      </p>

      <Button to="/menu" type="primary">
        View Menu
      </Button>

      <Footer />
    </div>
  );
}

export default Home;
