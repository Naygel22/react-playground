export type Register = {
  id: string;
  name: string;
  username: string;
  email: string;
  password: string;
}

export const getAllRegisters = async () => {
  const response = await fetch("http://localhost:3000/registers")
  if (!response.ok) {
    return [];
  }
  const data = await response.json() as Register[];
  return data;
}