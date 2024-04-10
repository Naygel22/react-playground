import { useFormik } from "formik";
import { SelectInput } from "./forms/SelectInput";
import { OrderFormValues, OrderSchema } from "../validators/validators";
import { TextInput } from "./forms/TextInput";

export const mockedClients = [
  {
    label: 'Jan Kowalski',
    value: '123 456 789'
  },
  {
    label: 'Adam Nowak',
    value: '987 654 321'
  },

];

type OrderProps = {
  initialValues: OrderFormValues,
  onSubmit: (values: OrderFormValues) => void;
}


export const AddOrder = ({ initialValues, onSubmit }: OrderProps) => {
  const formik = useFormik<OrderFormValues>({
    initialValues: initialValues,
    onSubmit: onSubmit,
    validationSchema: OrderSchema
  })
  return (
    <form onSubmit={formik.handleSubmit}>
      <SelectInput formik={formik} accessor='name' label="Name" options={mockedClients} />
      <TextInput formik={formik} accessor='quantity' label='Quantity' />
      <TextInput formik={formik} accessor='title' label='Title' />
      <TextInput formik={formik} accessor='orderContent' label='Content' />
      <button type="submit">Send</button>
    </form>
  )
}
