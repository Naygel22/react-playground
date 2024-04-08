import * as yup from 'yup'

export const BASE_VALIDATORS = {
  postCodeValidator: yup
    .string()
    .matches(/^\d{2}-\d{3}$/, 'Invalid postal code format')
    .required('Postal code is required'),
  usernameValidator: yup
    .string()
    .min(3, 'Username must be at least 3 characters')
    .required('Username is required'),
  passwordValidator: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long')
    .matches(
      /^(?=.*[A-Z])(?=.*[!@#$%^&*])$/,
      'Password must contain at least one uppercase letter, one special character, and one digit'
    )
}

export const clientSchema = yup.object({
  name: yup
    .string()
    .min(3, 'Name must be at least 3 characters')
    .required('Name is required'),
  surname: yup
    .string()
    .min(3, 'Surname must be at least 3 characters')
    .required('Surname is required'),
  street: yup
    .string()
    .min(5, 'Street must be at least 5 characters')
    .required('Street is required'),
  postCode: BASE_VALIDATORS.postCodeValidator,
  city: yup
    .string()
    .min(3, 'City must be at least 3 characters')
    .required('City is required'),
  region: yup.string().min(3, 'Region must be at least 3 characters'),
  photoUrl: yup.string().url(),
  phoneNumber: yup
    .string()
    .matches(/^\+\d{11}$/, "Phone number must start with '+'")
    .required('Phone number is required')
})

export type ClientFormValues = yup.InferType<typeof clientSchema>

export const yupRegisterSchema = yup.object({
  name: yup.string().required('Name is required'),
  username: BASE_VALIDATORS.usernameValidator,
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),
  password: BASE_VALIDATORS.passwordValidator,
  repeatPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Password confirmation is required')
})

export type RegisterFormValues = yup.InferType<typeof yupRegisterSchema>

export const yupLoginSchema = yup.object({
  username: BASE_VALIDATORS.usernameValidator,
  password: BASE_VALIDATORS.passwordValidator
})

export type LoginFormValues = yup.InferType<typeof yupLoginSchema>
