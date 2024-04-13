export const getAllOrders = async () => {
  const response = await fetch("http://localhost:3000/orders")
  if (!response.ok) {
    return [];
  }
  const data = response.json();
  return data;
}