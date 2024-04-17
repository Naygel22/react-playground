export interface Client {
  id: string
  imgSrc?: string
  name: string
  surname: string
  street: string
  postCode: string
  town: string
  subRegion?: string
  phoneNumber: string
}

export const getAllClients = async () => {
  const response = await fetch(`http://localhost:3000/clients`);
  if (!response.ok) {
    return [] as Client[];
  }
  const data = await response.json() as Client[];
  return data;
};