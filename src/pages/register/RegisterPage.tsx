import { useNavigate } from "react-router-dom"
import { sendRegisterValues } from "../../api/sendRegisterValues"
import { FakeRegisterComponent } from "../../components/forms/FakeRegisterComponent"
import { RegisterFormValues } from "../../validators/validators"

const initialRegisterFormValues: RegisterFormValues = {
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
        sendRegisterValues(values).then((res) => {
          if (res) {
            navigate("/login");
          }
        })
      }}
    />
  )
}

