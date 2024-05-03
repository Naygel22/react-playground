import { useFormik } from 'formik'
import { TextInput } from './TextInput'
import { RegisterFormValues, yupRegisterSchema } from '../../validators/validators'

type RegisterFormProps = {
  initialRegisterFormValues: RegisterFormValues
  onFormSubmit: (values: RegisterFormValues) => void;
}

export const FakeRegisterComponent = ({ initialRegisterFormValues, onFormSubmit }: RegisterFormProps) => {
  const formik = useFormik<RegisterFormValues>({
    initialValues: initialRegisterFormValues,
    onSubmit: onFormSubmit,
    validationSchema: yupRegisterSchema
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextInput formik={formik} accessor='name' label='Name' />
      <TextInput formik={formik} accessor='username' label='Username' />
      <TextInput formik={formik} accessor='email' label='Email' />
      <TextInput formik={formik} accessor='password' label='Password' type='password' />
      <TextInput formik={formik} accessor='repeatPassword' label='Confirm password' type='password' />
      <button type="submit">Send</button>
    </form>
  )
}
