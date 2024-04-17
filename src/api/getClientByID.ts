import { Client } from "./getAllClients";

export const getClientById = async (id: string) => {
  const response = await fetch(`http://localhost:3000/clients/${id}`)
  const data = await response.json() as Client
  return data;
}