export type User = {
  id: string;
  name: string;
  username: string;
  email: string;
  password: string;
}

export const getAllRegisters = async ({ username }: { username: string }) => {
  const response = await fetch(`http://localhost:3000/registers?username=${username}`)
  if (!response.ok) {
    return [];
  }
  const data = await response.json() as User[];
  return data;
}

