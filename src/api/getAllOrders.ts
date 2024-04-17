export type Order = {
  id: string;
  name: string;
  quantity: number;
  title: string;
  orderContent: string;
}

export const getAllOrders = async () => {
  const response = await fetch("http://localhost:3000/orders")
  if (!response.ok) {
    return [];
  }
  const data = await response.json() as Order[];
  return data;
}