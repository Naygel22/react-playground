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


  useEffect(() => {
    //TODO: pobrać dane klienta z API
    if (params.id) {
      getClientById(params.id).then((data) => {
        setInitialValues({
          name: data.name,
          surname: data.surname,
          street: data.street,
          postCode: data.postCode,
          town: data.town,
          subRegion: data.subRegion,
          imgSrc: data.imgSrc,
          phoneNumber: data.phoneNumber,
        })
      });
    }

  }, [params.id])

  const onEditClient = (values: ClientFormValues) => {
    if (params.id && values) {
      updateClientById(values, params.id).then(() => {
        navigate(`/clients/${params.id}`)
      })
    }
  }
  return (
    <div>Edit client
      {initialValues ? <ClientForm initialFormValues={initialValues} onFormSubmit={onEditClient} /> : null}
      <Link to={`/clients/${params.id}`}>Cancel</Link>

    </div>
  )
}
