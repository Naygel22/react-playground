export const deleteClientById = async (id: string) => {
  const response = await fetch(`http://localhost:3000/clients/${id}`, {
    method: "DELETE",
  })
  const data = await response.json()
  return data;
}