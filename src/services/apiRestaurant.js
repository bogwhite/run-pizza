// API
const API_URL = "https://react-fast-pizza-api.onrender.com/api";

// Menu API
async function getMenu() {
  const response = await fetch(`${API_URL}/menu`);
  if (!response.ok) throw Error("Failed getting menu");
  const { data } = await response.json();
  return data;
}

// Create order API
async function createOrder(newOrder) {
  try {
    // update data on the server | add form and cart to the order
    const response = await fetch(`${API_URL}/order`, {
      method: "POST",
      body: JSON.stringify(newOrder),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) throw Error();
    const { data } = await response.json();
    return data;
  } catch {
    throw Error("Failed creating your order");
  }
}

// Get order API
async function getOrder(id) {
  const response = await fetch(`${API_URL}/order/${id}`);
  if (!response.ok) throw Error(`Couldn't find order #${id}`);
  const { data } = await response.json();
  return data;
}

export { getMenu, getOrder, createOrder };
