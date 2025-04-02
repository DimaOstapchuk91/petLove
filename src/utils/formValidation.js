import * as Yup from 'yup';

const emailValid = Yup.string()
  .email('Invalid email format')
  .required('Must be filled');

const passwordValid = Yup.string()
  .min(7, 'Minimum 7  symbols')
  .max(50, 'Maximum 50  symbols')
  .required('Password is required');

const nameValid = Yup.string()
  .min(2, 'Minimum 2  symbols')
  .max(50, 'Maximum 50  symbols')
  .required('Name is required');

export const orderRegistrationSchema = Yup.object({
  name: nameValid,
  email: emailValid,
  password: passwordValid,
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords do not match')
    .required('Confirm password required'),
});

export const orderLoginSchema = Yup.object({
  email: emailValid,
  password: passwordValid,
});
