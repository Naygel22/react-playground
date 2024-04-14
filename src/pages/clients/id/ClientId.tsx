import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getClientById } from '../../../api/getClientByID';
import { deleteClientById } from '../../../api/deleteClientById';


export const ClientId = () => {
  const [client, setClient] = useState([]);
  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    getClientById(params.id).then((data) => {
      setClient(data);
    });
  }, [params.id]);

  const handleDelete = () => {
    deleteClientById(params.id).then(() => {
      navigate("/clients")
    });
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


