import { Client } from "./getAllClients";

export const updateClientById = async (updateClientData: Omit<Client, "id">, id: string) => {
  const response = await fetch(`http://localhost:3000/clients/${id}`, {
    method: "PATCH",
    headers: { "Content-type": "application/json;charset=UTF-8" },
    body: JSON.stringify(updateClientData)
  })
  console.log("in api", response)
  const data = await response.json()
  return data;
}