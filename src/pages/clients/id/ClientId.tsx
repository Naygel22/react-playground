import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getClientById } from '../../../api/getClientByID';
import { deleteClientById } from '../../../api/deleteClientById';
import { Client } from '../../../api/getAllClients';


export const ClientId = () => {
  const [client, setClient] = useState<Client | undefined>(undefined);
  const params = useParams<{ id: string }>()
  const navigate = useNavigate()

  useEffect(() => {
    if (params.id) {
      getClientById(params.id).then((data) => {
        setClient(data);
      });
    }
  }, [params.id]);

  const handleDelete = () => {
    if (params.id) {
      deleteClientById(params.id).then(() => {
        navigate("/clients")
      });
    }
  }

  if (!client) {
    return <p>Not found</p>
  }

  return (
    <div>ClientId: {params.id}

      <h2>Client Details</h2>
      <p>Client ID: {client.id}</p>
      <p>Name: {client.name}</p>
      <p>Surname: {client.surname}</p>
      <p>Street: {client.street}</p>
      <p>Post Code: {client.postCode}</p>
      <p>Town: {client.town}</p>
      <p>Sub Region: {client.subRegion}</p>
      <p>Phone Number: {client.phoneNumber}</p>
      <Link to={`/clients/${params.id}/edit`}>Edit</Link>
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}


