import { useFormik } from "formik";
import { RegisterFormValues, yupRegisterSchema } from "../../validators/validators";

type FormValues = {
  name: string;
  username: string;
  email: string;
  password: string;
  repeatPassword: string;
}

export const FakeRegisterComponent = () => {
  const formik = useFormik<FormValues>({
    initialValues: {
      name: "",
      username: "",
      email: "",
      password: "",
      repeatPassword: "",
    },
    onSubmit: (values: FormValues) => {
      alert(JSON.stringify(values, null, 2));
    },
    validationSchema: yupRegisterSchema,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
      </div>
      <button type="submit">Send</button>
    </form>
  );
}
