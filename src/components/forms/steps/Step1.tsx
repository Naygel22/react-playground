import { useFormik } from 'formik';
import * as yup from 'yup'
import { SelectInput } from '../SelectInput';
import { useNavigate } from 'react-router-dom';
import { useGetAllClients } from '../../../api/queries/clientQueries';
import { useState } from 'react';

type Option = {
  value: string;
  label: string;
};

export const Step1 = ({ setSelectedClientPhone }) => {
  const navigate = useNavigate();

  const { data, isLoading, error } = useGetAllClients()

  const clients: Option[] = data
    ? data.map((client) => ({
      value: client.phoneNumber,
      label: `${client.name} ${client.surname}`
    }))
    : [];

  const formik = useFormik({
    initialValues: {
      name: ''
    },
    onSubmit: (values) => {
      console.log(values);
      setSelectedClientPhone(values.name)
      // navigate(ROUTES.orders);
      // notify("Order has been added", "success")
    },
    validationSchema: yup.object({
      name: yup.string().required('Name is required'),
    })

  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching clients: {error.message}</p>;
  }

  const selectedClient = data?.find(client => client.phoneNumber === formik.values.name);

  return (
    <form onSubmit={formik.handleSubmit}>
      <SelectInput formik={formik} accessor="name" label="Choose a client" options={clients} />
      <div>Client's data:</div>
      {selectedClient && (
        <div>
          <p>Name: {selectedClient.name}</p>
          <p>Surname: {selectedClient.surname}</p>
          <p>Street: {selectedClient.street}</p>
          <p>Post Code: {selectedClient.postCode}</p>
          <p>Town: {selectedClient.town}</p>
          {selectedClient.subRegion && (
            <p>Sub region: {selectedClient.subRegion}</p>
          )}
          <p>Phone number: {selectedClient.phoneNumber}</p>
        </div>
      )}

      <button type="submit">Send</button>
    </form>
  );

};
