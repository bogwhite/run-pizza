import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import HeaderShow from "../../ui/header/HeaderShow";
import MenuItem from "./MenuItem";

function Menu() {
  const menu = useLoaderData();

  return (
    <div>
      <HeaderShow show="cart" />

      <ul>
        {menu.map((pizza) => (
          <MenuItem pizza={pizza} key={pizza.id} />
        ))}
      </ul>
    </div>
  );
}

async function menuLoader() {
  const menu = await getMenu();
  return menu;
}

export { menuLoader };
export default Menu;
