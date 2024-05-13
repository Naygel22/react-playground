
import { sendClientValues } from '../../../api/sendClientValues';
import ClientForm from '../../../components/ClientForm';
import { useNotificationContext } from '../../../contexts/NotificationContext';
import { ClientFormValues } from '../../../validators/validators';
import { useNavigate } from 'react-router-dom';

const addClientInital = {
  name: "",
  surname: "",
  street: "",
  postCode: "",
  town: "",
  subRegion: "",
  imgSrc: "",
  phoneNumber: "",
}

export const AddClient = () => {
  const navigate = useNavigate();
  const { notify } = useNotificationContext()

  const onAddClient = (values: ClientFormValues) => {
    sendClientValues(values).then(() => {
      navigate("/clients");
      notify("Client has been added", "success")
    })
  }



  return (
    <div>AddClient
      <ClientForm initialFormValues={addClientInital} onFormSubmit={onAddClient} />

    </div>
  )
}
