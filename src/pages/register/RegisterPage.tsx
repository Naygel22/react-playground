import { FakeRegisterComponent } from "../../components/forms/FakeRegisterComponent"

const initialRegisterFormValues = {
  name: '',
  username: '',
  email: '',
  password: '',
  repeatPassword: ''
}

export const RegisterPage = () => {
  return (
    <FakeRegisterComponent
      initialRegisterFormValues={initialRegisterFormValues}
      onFormSubmit={(values) => {
        console.log('Registration submitted with values:', values)
      }}
    />
  )
}

