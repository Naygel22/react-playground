export const sendInvoiceValues = async (newInvoice) => {
  const response = await fetch(`http://localhost:3000/invoices`, {
    method: "POST",
    headers: { "Content-type": "application/json;charset=UTF-8" },
    body: JSON.stringify(newInvoice),
  });
  if (!response.ok) {
    return {};
  }
  const data = await response.json();
  return data;
}