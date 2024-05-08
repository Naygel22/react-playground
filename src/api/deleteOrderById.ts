export const deleteOrderById = async (id: string) => {
  const response = await fetch(`http://localhost:3000/orders/${id}`, {
    method: "DELETE",
  })
  const data = await response.json()
  return data;
}