export const getClientById = async (id: string) => {
  const response = await fetch(`http://localhost:3000/clients/${id}`)
  const data = await response.json()
  return data;
}