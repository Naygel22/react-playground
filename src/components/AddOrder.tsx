import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { SelectInput } from './forms/SelectInput';
import { OrderFormValues, OrderSchema } from '../validators/validators';
import { TextInput } from './forms/TextInput';
import { sendOrderValues } from '../api/sendOrderValues';
import { getAllClients } from '../api/getAllClients';
import { useNavigate } from 'react-router-dom';

type Option = {
  value: string;
  label: string;
};

export const AddOrder = () => {
  const [clients, setClients] = useState<Option[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const clientsData = await getAllClients();
        const clientsOptions = clientsData.map((client) => ({
          value: client.phoneNumber,
          label: `${client.name} ${client.surname}`
        }));
        setClients(clientsOptions);
      } catch (error) {
        console.error('Error fetching clients:', error);
      }
    };

    fetchClients();
  }, []);

  const formik = useFormik<OrderFormValues>({
    initialValues: {
      name: "",
      quantity: 0,
      title: "",
      orderContent: ""
    },
    onSubmit: (values) => {
      sendOrderValues(values)
      navigate("/orders")
    },
    validationSchema: OrderSchema,
  });

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
