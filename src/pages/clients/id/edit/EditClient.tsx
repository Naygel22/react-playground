import { useState, useEffect } from 'react'
import { ClientFormValues } from '../../../../validators/validators';
import ClientForm from '../../../../components/ClientForm';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import { useGetClientById } from '../../../../api/queries/clientQueries';
import { useClientAddMutation } from '../../../../api/mutations/clientMutations';
import { QUERY_KEYS } from '../../../../api/constants';
import { ROUTES } from '../../../../routes';

export const EditClient = () => {
  const params = useParams<{ id: string }>()
  const navigate = useNavigate();
  const [initialValues, setInitialValues] = useState<ClientFormValues | null>(null)

  const { data, isLoading, error } = useGetClientById()

  const queryClient = useQueryClient();

  const mutation = useClientAddMutation({
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.clients.getAll] }),
        queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.clients.get] })
      navigate(ROUTES.clientsId(params.id))
    },
    onError: () => {
      console.log("Something went wrong")
    }
  })

  if (!data) {
    return <p>No data...</p>
  }
  if (isLoading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error</p>
  }

  useEffect(() => {
    //TODO: pobrać dane klienta z API
    if (params.id) {

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

    }

  }, [params.id])

  const onEditClient = (values: ClientFormValues) => {
    if (params.id && values) {
      mutation.mutate({ updateClientData: values, id: params.id })
    }
  }
  return (
    <div>Edit client
      {initialValues ? <ClientForm initialFormValues={initialValues} onFormSubmit={onEditClient} /> : null}
      <Link to={ROUTES.clientsId(params.id)}>Cancel</Link>

    </div>
  )
}
