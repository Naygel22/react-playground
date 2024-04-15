import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { SelectInput } from './forms/SelectInput';
import { OrderFormValues, OrderSchema } from '../validators/validators';
import { TextInput } from './forms/TextInput';
import { sendOrderValues } from '../api/sendOrderValues';
import { getAllClients } from '../api/getAllClients';

type Option = {
  value: string;
  label: string;
};

export const AddOrder = ({ initialValues, onSubmit }) => {
  const [formValues, setFormValues] = useState<OrderFormValues>(initialValues);
  const [clients, setClients] = useState<Option[]>([]);

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

  const handleAdd = () => {
    sendOrderValues({ formValues }).then((data) => {
      console.log('Success', data);
    });
  };

  const formik = useFormik<OrderFormValues>({
    initialValues,
    onSubmit: (values) => {
      setFormValues(values);
    },
    validationSchema: OrderSchema,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <SelectInput formik={formik} accessor="name" label="Name" options={clients} />
      <TextInput formik={formik} accessor="quantity" label="Quantity" />
      <TextInput formik={formik} accessor="title" label="Title" />
      <TextInput formik={formik} accessor="orderContent" label="Content" />
      <button type="submit" onClick={handleAdd}>Send</button>
    </form>
  );
};
