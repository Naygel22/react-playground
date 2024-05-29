import supabase from "../../types/supabaseClient";
import { RegisterFormValues } from "../validators/validators";

export const sendRegisterValues = async (newRegister: RegisterFormValues) => {

  const { data, error } = await supabase.auth.signUp({
    email: newRegister.email,
    password: newRegister.password
  })
  if (error) {
    return false;
  }
  if (data) {
    const { error: error1 } = await supabase
      .from('users')
      .insert([
        { id: data.user?.id, name: newRegister.name, username: newRegister.username, avatar: "" },
      ])
      .select()
    if (error1) {
      return false;
    }
  }
  return true
}

