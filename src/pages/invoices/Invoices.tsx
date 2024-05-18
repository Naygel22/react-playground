import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../../api/constants";
import { getAllInvoices } from "../../api/getAllInvoices";
import { PDFDownloadLink } from '@react-pdf/renderer'
import InvoicePDF from '../../components/InvoicePDF';
import CircularLoading from "../../components/CircularLoading";

export const Invoices = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: [QUERY_KEYS.invoices.getAll],
    queryFn: getAllInvoices
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error</p>;
  }

  if (!data || data.length === 0) {
    return <p>No data...</p>;
  }

  return (
    <div>
      {data.map(invoice => (
        <div key={invoice.id}>
          <h2>Invoice {invoice.id}</h2>
          <p>Date of issue: {invoice.dateOfIssue}</p>
          <p>Accounting month: {invoice.accountingMonth}</p>
          <p>Price: {invoice.price}</p>
          <PDFDownloadLink
            document={<InvoicePDF invoice={invoice} />}
            fileName={`invoice_${invoice.id}.pdf`}
          >
            {({ loading }) =>
              loading ? <CircularLoading /> : <button>Download PDF</button>
            }
          </PDFDownloadLink>
        </div>
      ))}
    </div>
  );
};

export default Invoices;
