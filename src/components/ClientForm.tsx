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
    enableReinitialize: true
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextInput formik={formik} accessor='name' label="Name" />
      <TextInput formik={formik} accessor='surname' label="Surname" />
      <TextInput formik={formik} accessor='street' label="Street" />
      <TextInput formik={formik} accessor='postCode' label="Post code" />
      <TextInput formik={formik} accessor='town' label="City" />
      <TextInput formik={formik} accessor='subRegion' label="Region" />
      <TextInput formik={formik} accessor='imgSrc' label="PhotoUrl" />
      <TextInput formik={formik} accessor='phoneNumber' label="PhoneNumber" />
      {initialFormValues ? <button type="submit">Update</button> : <button type="submit">Add</button>}
    </form>
  )
}

export default ClientForm;