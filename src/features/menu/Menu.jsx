import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import Header from "../../ui/header/Header";
import MenuItem from "./MenuItem";
import styles from "./Menu.module.css";

function Menu() {
  // Loader data
  const menu = useLoaderData();

  return (
    <section className="page_layout">
      <Header show="cart" fixed={true} />

      <div className="page_background">
        <div className="menu">
          <div className={styles.title}>
            <h2>Menu</h2>
            <p>Straight out of the oven, straight to you</p>
          </div>

          <ul>
            {menu.map((pizza) => (
              <MenuItem pizza={pizza} key={pizza.id} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

// Loader API
async function menuLoader() {
  const menu = await getMenu();
  return menu;
}

export { menuLoader };
export default Menu;
