export const updateClientById = async (updateClientData: Client, id: string) => {
  const response = await fetch(`http://localhost:3000/clients/${id}`, {
    method: "PUT",
    headers: { "Content-type": "application/json;charset=UTF-8" },
    body: JSON.stringify(updateClientData)
  })
  const data = await response.json()
  return data;
}