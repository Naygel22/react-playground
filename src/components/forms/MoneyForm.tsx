import { useFormik } from "formik";
import * as yup from 'yup'
import { TextInput } from "./TextInput";
import { useDispatch } from "react-redux";
import { deposit, withdraw } from "../../state/money/moneySlice";

export const MoneyForm = () => {
  const dispatch = useDispatch()


  const formik = useFormik({
    initialValues: {
      deposit: 0,
      withdraw: 0
    },
    onSubmit: (values) => {
      if (values.deposit > 0) {
        dispatch(deposit(values.deposit))
      }
      if (values.withdraw > 0) {
        dispatch(withdraw(values.withdraw))
      }
      formik.resetForm();
    },
    validationSchema: yup.object({
      deposit: yup.number(),
      withdraw: yup.number()
    })

  });


  return (
    <form onSubmit={formik.handleSubmit}>
      <TextInput formik={formik} accessor='deposit' label="Deposit" type="number" />
      <TextInput formik={formik} accessor='withdraw' label="Withdraw" type="number" />
      <button type="submit">Submit</button>
    </form>
  )
}

export default MoneyForm
