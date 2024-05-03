import { useFormik } from 'formik'
import { TextInput } from './TextInput'
import { LoginFormValues, yupLoginSchema } from '../../validators/validators'


type LoginFormProps = {
  initialLoginFormValues: LoginFormValues
  onFormSubmit: (values: LoginFormValues) => void;
}

export const FakeLoginComponent = ({ initialLoginFormValues, onFormSubmit }: LoginFormProps) => {
  const formik = useFormik<LoginFormValues>({
    initialValues: initialLoginFormValues,
    onSubmit: onFormSubmit,
    validationSchema: yupLoginSchema
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextInput formik={formik} accessor='username' label='Username' />
      <TextInput formik={formik} accessor='password' label='Password' type='password' />
      <button type="submit">Send</button>
    </form>
  )
}
