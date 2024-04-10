const getAllClients = async () => {
  const response = await fetch("http://localhost:3000/clients")
  const data = await response.json()
  return data
}