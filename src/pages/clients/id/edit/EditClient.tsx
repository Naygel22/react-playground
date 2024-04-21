import { useState, useEffect } from 'react'
import { ClientFormValues } from '../../../../validators/validators';
import ClientForm from '../../../../components/ClientForm';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getClientById } from '../../../../api/getClientByID';
import { updateClientById } from '../../../../api/updateClientById';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export const EditClient = () => {
  const params = useParams<{ id: string }>()
  const navigate = useNavigate();
  const [initialValues, setInitialValues] = useState<ClientFormValues | null>(null)

  const { data, isLoading, error } = useQuery({ queryKey: ["clientId", params.id], queryFn: () => getClientById(params.id) })

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (values) => { return await updateClientById(values, params.id) },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["clientId"] })
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
      mutation.mutate(values)
      navigate(`/clients/${params.id}`)

    }
  }
  return (
    <div>Edit client
      {initialValues ? <ClientForm initialFormValues={initialValues} onFormSubmit={onEditClient} /> : null}
      <Link to={`/clients/${params.id}`}>Cancel</Link>

    </div>
  )
}
