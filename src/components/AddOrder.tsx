import { useFormik } from 'formik';
import { SelectInput } from './forms/SelectInput';
import { OrderFormValues, OrderSchema } from '../validators/validators';
import { TextInput } from './forms/TextInput';
import { sendOrderValues } from '../api/sendOrderValues';
import { getAllClients } from '../api/getAllClients';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

type Option = {
  value: string;
  label: string;
};

export const AddOrder = () => {
  const navigate = useNavigate();

  const { data, isLoading, error } = useQuery({ queryKey: ["clients"], queryFn: getAllClients })

  const clients: Option[] = data
    ? data.map((client) => ({
      value: client.phoneNumber,
      label: `${client.name} ${client.surname}`
    }))
    : [];

  const formik = useFormik<OrderFormValues>({
    initialValues: {
      name: '',
      quantity: 0,
      title: '',
      orderContent: ''
    },
    onSubmit: (values) => {
      sendOrderValues(values);
      navigate('/orders');
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
