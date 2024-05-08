import { FakeLoginComponent } from '../../components/forms/FakeLoginComponent'
import { useUserContext } from '../../contexts/UserContext';
import { useNavigate } from "react-router-dom";
import { ROUTES } from '../../routes';

const initialLoginFormValues = {
  username: '',
  password: ''
}

export const LoginPage = () => {
  const { logIn } = useUserContext();
  const navigate = useNavigate()

  return (
    <FakeLoginComponent
      initialLoginFormValues={initialLoginFormValues}
      onFormSubmit={(values) => {
        const isLoginSuccess = logIn(values.username, values.password)
        console.log('Login submitted with values:', values)
        if (isLoginSuccess) {
          navigate(ROUTES.home)
        }
      }}
    />
  )
}
