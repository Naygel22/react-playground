export const getAllClients = async () => {
  const response = await fetch(`http://localhost:3000/clients`);
  if (!response.ok) {
    return [];
  }
  const data = await response.json();
  return data;
};