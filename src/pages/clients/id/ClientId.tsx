import { Link, useNavigate, useParams } from 'react-router-dom'
import { deleteClientById } from '../../../api/deleteClientById';
import { useGetClientById } from '../../../api/queries/clientQueries';
import { ROUTES } from '../../../routes';
import ModalAlert from '../../../components/ModalAlert';
import { QUERY_KEYS } from '../../../api/constants';
import { useMutation, useQueryClient } from '@tanstack/react-query';


export const ClientId = () => {
  const params = useParams<{ id: string }>();
  const { data, isLoading, error } = useGetClientById(params.id);
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (clientId: string) => { return await deleteClientById(clientId) },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.clients.get] });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.clients.getAll] });
      navigate(ROUTES.clients);
    },
    onError: () => {
      console.log("Something went wrong");
    }
  });

  const handleDelete = () => {
    if (data && data.id) {
      mutation.mutate(data.id);
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!data) {
    return <p>No data...</p>;
  }

  if (error) {
    return <p>Error</p>;
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
      <Link to={ROUTES.clientsIdEdit(data)}>Edit</Link>
      <ModalAlert buttonName='Delete' onConfirm={handleDelete} />
    </div>
  );
};
export default ClientId

