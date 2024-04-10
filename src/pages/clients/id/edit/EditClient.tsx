import { useState, useEffect } from 'react'
import { ClientFormValues } from '../../../../validators/validators';
import ClientForm from '../../../../components/ClientForm';
import { Link, useParams } from 'react-router-dom';

export const EditClient = () => {

  const params = useParams()
  const [initialValues, setInitialValues] = useState<ClientFormValues | null>(null)

  useEffect(() => {
    //TODO: pobrać dane klienta z API
    setInitialValues({
      name: "",
      surname: "",
      street: "",
      postCode: "",
      city: "",
      region: "",
      photoUrl: "",
      phoneNumber: "",
    })
  }, [])

  const onEditClient = (values: ClientFormValues) => {
    alert(JSON.stringify(values, null, 2));
  }
  return (
    <div>Edit client
      {initialValues ? <ClientForm initialFormValues={initialValues} onFormSubmit={onEditClient} /> : null}
      <Link to={`/clients/${params.id}`}>Cancel</Link>
    </div>
  )
}
