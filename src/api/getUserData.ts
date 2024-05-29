import supabase from "../../types/supabaseClient"


export const getUserData = async () => {
  const { data: { user } } = await supabase.auth.getUser()
  return user

}
