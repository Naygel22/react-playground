import { FakeLoginComponent } from '../../components/forms/FakeLoginComponent'
import { useUserContext } from '../../contexts/UserContext';

const initialLoginFormValues = {
  username: '',
  password: ''
}

export const LoginPage = () => {
  const { logIn } = useUserContext();
  return (
    <FakeLoginComponent
      initialLoginFormValues={initialLoginFormValues}
      onFormSubmit={(values) => {
        logIn(values.username, values.password)
        console.log('Login submitted with values:', values)
      }}
    />
  )
}
