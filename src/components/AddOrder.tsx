import { useState } from 'react';
import { useFormik } from 'formik';
import { SelectInput } from './forms/SelectInput';
import { OrderFormValues, OrderSchema } from '../validators/validators';
import { TextInput } from './forms/TextInput';
import { sendOrderValues } from '../api/sendOrderValues';

export const mockedClients = [
  {
    label: 'Jan Kowalski',
    value: '123 456 789',
  },
  {
    label: 'Adam Nowak',
    value: '987 654 321',
  },
];

type OrderProps = {
  initialValues: OrderFormValues;
  onSubmit: (values: OrderFormValues) => void;
};

export const AddOrder = ({ initialValues, onSubmit }: OrderProps) => {
  const [formValues, setFormValues] = useState<OrderFormValues>(initialValues);

  const handleAdd = () => {
    sendOrderValues({ formValues }).then((data) => {
      console.log("success", data);
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
      <SelectInput formik={formik} accessor='name' label='Name' options={mockedClients} />
      <TextInput formik={formik} accessor='quantity' label='Quantity' />
      <TextInput formik={formik} accessor='title' label='Title' />
      <TextInput formik={formik} accessor='orderContent' label='Content' />
      <button type='submit' onClick={handleAdd}>Send</button>

    </form>
  );
};
