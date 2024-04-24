import { useFormik } from 'formik';
import { SelectInput } from './forms/SelectInput';
import { OrderFormValues, OrderSchema } from '../validators/validators';
import { TextInput } from './forms/TextInput';
import { sendOrderValues } from '../api/sendOrderValues';
import { getAllClients } from '../api/getAllClients';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { QUERY_KEYS } from '../api/constants';
import { ROUTES } from '../routes';

type Option = {
  value: string;
  label: string;
};

export const AddOrder = () => {
  const navigate = useNavigate();

  const { data, isLoading, error } = useQuery({ queryKey: [QUERY_KEYS.clients.getAll], queryFn: getAllClients })
  const queryClient = useQueryClient();

  const clients: Option[] = data
    ? data.map((client) => ({
      value: client.phoneNumber,
      label: `${client.name} ${client.surname}`
    }))
    : [];

  const mutation = useMutation({
    mutationFn: async (values) => { return await sendOrderValues(values) },
    onSuccess: () => {
      // rewalidacja i pobranie ponownie zapytania pod kluczem orders
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.orders.getAll] });
    },
    onError: () => {
      console.log("Something went wrong")
    }
  });


  const formik = useFormik<OrderFormValues>({
    initialValues: {
      name: '',
      quantity: 0,
      title: '',
      orderContent: ''
    },
    onSubmit: (values) => {
      mutation.mutate(values);
      navigate(ROUTES.clients);
    },
    validationSchema: OrderSchema
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching clients: {error.message}</p>;
  }

  return (
    <form onSubmit={formik.handleSubmit}>
      <SelectInput formik={formik} accessor="name" label="Name" options={clients} />
      <TextInput formik={formik} accessor="quantity" label="Quantity" />
      <TextInput formik={formik} accessor="title" label="Title" />
      <TextInput formik={formik} accessor="orderContent" label="Content" />
      <button type="submit">Send</button>
    </form>
  );
};
