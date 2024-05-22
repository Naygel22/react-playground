export type Invoice = {
  id: string
  price: number
  dateOfIssue: string
  accountingMonth: string
  paid: boolean
}

export const getAllInvoices = async () => {
  const response = await fetch("http://localhost:3000/invoices")
  if (!response.ok) {
    return [];
  }
  const data = await response.json() as Invoice[];
  return data;
}