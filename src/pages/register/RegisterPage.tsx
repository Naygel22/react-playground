import { useNavigate } from "react-router-dom"
import { sendRegisterValues } from "../../api/sendRegisterValues"
import { FakeRegisterComponent } from "../../components/forms/FakeRegisterComponent"

const initialRegisterFormValues = {
  name: '',
  username: '',
  email: '',
  password: '',
  repeatPassword: ''
}

export const RegisterPage = () => {
  const navigate = useNavigate();
  return (
    <FakeRegisterComponent
      initialRegisterFormValues={initialRegisterFormValues}
      onFormSubmit={(values) => {
        sendRegisterValues(values).then(() => {
          navigate("/login");
        })
      }}
    />
  )
}

