export type UpdateInvoicePayload = { newPaidStatus: boolean, invoiceId: string }

export const updateInvoiceById = async ({ newPaidStatus, invoiceId }: UpdateInvoicePayload) => {
  const response = await fetch(`http://localhost:3000/invoices/${invoiceId}`, {
    method: "PATCH",
    headers: { "Content-type": "application/json;charset=UTF-8" },
    body: JSON.stringify({ paid: newPaidStatus })
  })
  console.log("in api", response)
  const data = await response.json()
  return data;
}