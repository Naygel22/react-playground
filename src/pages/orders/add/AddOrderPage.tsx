import { AddOrder } from "../../../components/AddOrder"

const initialValues = {
  name: "",
  quantity: 0,
  title: "",
  orderContent: ""
}

export const AddOrderPage = () => {
  return (
    <AddOrder initialValues={initialValues} onSubmit={(values) => {
      console.log("Form submitted with values:", values)
    }} />
  )
}
