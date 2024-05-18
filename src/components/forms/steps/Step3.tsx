import { useFormik } from "formik"
import { Client } from "../../../api/getAllClients"
import { Order } from "../../../api/getAllOrders"
import { useNotificationContext } from "../../../contexts/NotificationContext"
import { ROUTES } from "../../../routes"
import { useNavigate } from "react-router-dom"
import { InvoiceFormValues, InvoiceSchema } from "../../../validators/validators"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { QUERY_KEYS } from "../../../api/constants"
import { sendInvoiceValues } from "../../../api/sendInvoiceValues"
import { TextInput } from "../TextInput"

type Step3Props = {
  selectedClientData: Client | undefined
  pickedOrders: Order[]
  setStepNumber: React.Dispatch<React.SetStateAction<number>>
}

export const Step3 = ({ selectedClientData, pickedOrders, setStepNumber }: Step3Props) => {
  const navigate = useNavigate()
  const { notify } = useNotificationContext()
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (values) => { return await sendInvoiceValues(values) },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.invoices.getAll] });
    },
    onError: () => {
      console.log("Something went wrong")
    }
  });

  const formik = useFormik<InvoiceFormValues>({
    initialValues: {
      price: 0,
      dateOfIssue: '',
      accountingMonth: ''
    },
    onSubmit: (values) => {
      mutation.mutate(values);
      navigate(ROUTES.invoices);
      notify("Invoice has been added", "success")
      setStepNumber(0)
    },
    validationSchema: InvoiceSchema
  });



  return (
    <>
      <div>Summary:</div>
      <div>Client:</div>
      {selectedClientData &&
        <div>
          <p>Name: {selectedClientData.name}</p>
          <p>Surname: {selectedClientData.surname}</p>
          <p>Street: {selectedClientData.street}</p>
          <p>Post Code: {selectedClientData.postCode}</p>
          <p>Town: {selectedClientData.town}</p>
          {selectedClientData.subRegion && (
            <p>Sub region: {selectedClientData.subRegion}</p>
          )}
          <p>Phone number: {selectedClientData.phoneNumber}</p>
        </div>
      }
      <div>Pays for:</div>
      {pickedOrders.map(order => (
        <div key={order.id}>{`Order ${order.id}`}</div>
      ))}
      <form onSubmit={formik.handleSubmit}>
        <TextInput formik={formik} accessor='price' label="Price" />
        <TextInput formik={formik} accessor='dateOfIssue' label="Date of issue" />
        <TextInput formik={formik} accessor='accountingMonth' label="Accounting month" />
        <button type="submit">Save</button>
      </form>
    </>

  )
}


