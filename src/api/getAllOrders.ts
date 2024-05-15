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

export const getAllOrdersForPhoneNumber = async (phoneNumber: string) => {
  const sanitizedPhoneNumber = phoneNumber.replace('+', '%2B');
  const response = await fetch(`http://localhost:3000/orders?${new URLSearchParams(`name=${sanitizedPhoneNumber}`).toString()}`);
  if (!response.ok) {
    return [];
  }
  const data = await response.json() as Order[];
  return data;
};
