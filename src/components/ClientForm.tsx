import { useFormik } from "formik";
import { TextInput } from "./forms/TextInput";
import { ClientFormValues, clientSchema } from "../validators/validators";

type ClientFormProps = {
  initialFormValues: ClientFormValues
  onFormSubmit: (values: ClientFormValues) => void;
}

function ClientForm({ initialFormValues, onFormSubmit }: ClientFormProps) {
  const formik = useFormik<ClientFormValues>({
    initialValues: initialFormValues,
    onSubmit: onFormSubmit,
    validationSchema: clientSchema,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextInput formik={formik} accessor='name' label="Name" />
      <TextInput formik={formik} accessor='surname' label="Surname" />
      <TextInput formik={formik} accessor='street' label="Street" />
      <TextInput formik={formik} accessor='postCode' label="Post code" />
      <TextInput formik={formik} accessor='city' label="City" />
      <TextInput formik={formik} accessor='region' label="Region" />
      <TextInput formik={formik} accessor='photoUrl' label="PhotoUrl" />
      <TextInput formik={formik} accessor='phoneNumber' label="PhoneNumber" />

    </form>
  )
}

export default ClientForm;