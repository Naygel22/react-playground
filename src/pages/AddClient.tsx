import React from 'react'
import { ClientFormValues } from '../validators/validators';
import ClientForm from '../components/ClientForm';

const addClientInital = {
  name: "",
  surname: "",
  street: "",
  postCode: "",
  city: "",
  region: "",
  photoUrl: "",
  phoneNumber: "",
}

export const AddClient = () => {

  const onAddClient = (values: ClientFormValues) => {
    alert(JSON.stringify(values, null, 2));
  }
  return (
    <div>AddClient
      <ClientForm initialFormValues={addClientInital} onFormSubmit={onAddClient} />
    </div>
  )
}
