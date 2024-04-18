import { Order } from "./getAllOrders";


export const getOrderById = async (id: string) => {
  const response = await fetch(`http://localhost:3000/orders/${id}`)
  const data = await response.json() as Order
  return data;
}