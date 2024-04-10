import { FakeLoginComponent } from '../../components/forms/FakeLoginComponent'

const initialLoginFormValues = {
  username: '',
  password: ''
}

export const LoginPage = () => {
  return (
    <FakeLoginComponent
      initialLoginFormValues={initialLoginFormValues}
      onFormSubmit={(values) => {
        console.log('Login submitted with values:', values)
      }}
    />
  )
}
