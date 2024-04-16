import { useState } from 'react';
import { sendClientValues } from '../../../api/sendClientValues';
import ClientForm from '../../../components/ClientForm';
import { ClientFormValues } from '../../../validators/validators';
import { useNavigate } from 'react-router-dom';

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
  const [clientFormValues, setClientFormValues] = useState<ClientFormValues>(addClientInital);
  const navigate = useNavigate();

  const onAddClient = (values: ClientFormValues) => {
    setClientFormValues(values);
  }

  const handleAdd = () => {
    sendClientValues(clientFormValues).then(() => {
      navigate("/clients");
    })
  }

  return (
    <div>AddClient
      <ClientForm initialFormValues={addClientInital} onFormSubmit={onAddClient} />
      <button type="submit" onClick={handleAdd}>Add</button>
    </div>
  )
}
