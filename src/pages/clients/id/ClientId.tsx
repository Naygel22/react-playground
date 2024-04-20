import { Link, useNavigate, useParams } from 'react-router-dom'
import { getClientById } from '../../../api/getClientByID';
import { deleteClientById } from '../../../api/deleteClientById';
import { useQuery } from '@tanstack/react-query';


export const ClientId = () => {
  const params = useParams<{ id: string }>()
  const { data, isLoading, error } = useQuery({ queryKey: ["clientId"], queryFn: () => getClientById(params.id) })
  const navigate = useNavigate()

  const handleDelete = () => {
    if (params.id) {
      deleteClientById(params.id).then(() => {
        navigate("/clients")
      });
    }
  }
  if (isLoading) {
    return <p>Loading...</p>
  }

  if (!data) {
    return <p>No data...</p>
  }
  if (error) {
    return <p>Error</p>
  }

  return (
    <div>

      <h2>Client Details</h2>
      <p>Client ID: {data.id}</p>
      <p>Name: {data.name}</p>
      <p>Surname: {data.surname}</p>
      <p>Street: {data.street}</p>
      <p>Post Code: {data.postCode}</p>
      <p>Town: {data.town}</p>
      <p>Sub Region: {data.subRegion}</p>
      <p>Phone Number: {data.phoneNumber}</p>
      <Link to={`/clients/${data.id}/edit`}>Edit</Link>
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}


