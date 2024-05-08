import { getUserByUsername } from "../contexts/UserContext";
import { RegisterFormValues } from "../validators/validators";

export const sendRegisterValues = async (newRegister: RegisterFormValues) => {

  const userExist = await getUserByUsername(newRegister.username)
  if (userExist) {
    return false;
  }
  const response = await fetch(`http://localhost:3000/registers`, {
    method: "POST",
    headers: { "Content-type": "application/json;charset=UTF-8" },
    body: JSON.stringify(newRegister),
  });
  if (!response.ok) {
    return {};
  }
  const data = await response.json();
  return data;
}