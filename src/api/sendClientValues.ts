export const sendClientValues = async (newClient) => {
  const response = await fetch(`http://localhost:3000/clients`, {
    method: "POST",
    headers: { "Content-type": "application/json;charset=UTF-8" },
    body: JSON.stringify(newClient),
  });
  if (!response.ok) {
    return {};
  }
  const data = await response.json();
  return data;
}