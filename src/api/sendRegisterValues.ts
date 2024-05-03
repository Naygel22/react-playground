export const sendRegisterValues = async (newRegister) => {
  const response = await fetch(`http://localhost:3000/registers`, {
    method: "POST",
    headers: { "Content-type": "application/json;charset=UTF-8" },
    body: JSON.stringify(newRegister),
  });
  if (!response.ok) {
    return {};
  }
  const data = await response.json();
  return data;
}