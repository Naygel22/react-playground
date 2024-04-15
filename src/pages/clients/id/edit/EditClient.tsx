import { useState, useEffect } from 'react'
import { ClientFormValues } from '../../../../validators/validators';
import ClientForm from '../../../../components/ClientForm';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getClientById } from '../../../../api/getClientByID';
import { updateClientById } from '../../../../api/updateClientById';

export const EditClient = () => {

  const params = useParams()
  const navigate = useNavigate();
  const [initialValues, setInitialValues] = useState<ClientFormValues | null>(null)
  const [updatedClient, setUpdatedClient] = useState();

  useEffect(() => {
    //TODO: pobrać dane klienta z API
    getClientById(params.id).then((data) => {
      setInitialValues({
        name: data.name,
        surname: data.surname,
        street: data.street,
        postCode: data.postCode,
        city: data.town,
        region: data.region,
        photoUrl: data.imgSrc,
        phoneNumber: data.phoneNumber,
      })
    });

  }, [params.id])

  const updateClientData = () => {
    updateClientById(initialValues, params.id).then(() => {
      navigate(`/clients/${params.id}`)
    })
  }

  const onEditClient = (values: ClientFormValues) => {
    alert(JSON.stringify(values, null, 2));
  }
  return (
    <div>Edit client
      {initialValues ? <ClientForm initialFormValues={initialValues} onFormSubmit={onEditClient} /> : null}
      <Link to={`/clients/${params.id}`}>Cancel</Link>
      <button type="submit" onClick={updateClientData}>Update</button>
    </div>
  )
}
