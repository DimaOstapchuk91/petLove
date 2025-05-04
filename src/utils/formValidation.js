import * as Yup from 'yup';

const nameValid = Yup.string()
  .min(2, 'Minimum 2 symbols')
  .max(50, 'Maximum 50 symbols')
  .required('Name is required');

const emailValid = Yup.string()
  .matches(
    /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
    'Invalid email format'
  )
  .required('Email is required');

const avatarValid = Yup.string().matches(
  /^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/,
  'Avatar must be a valid image URL'
);

const phoneValid = Yup.string()
  .matches(/^\+38\d{10}$/, 'Phone must be in format +380XXXXXXXXX')
  .required('Phone number is required');

const passwordValid = Yup.string()
  .min(7, 'Minimum 7 symbols')
  .max(50, 'Maximum 50 symbols')
  .required('Password is required');

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

export const orderEditUserSchema = Yup.object({
  name: nameValid,
  email: emailValid,
  avatar: avatarValid,
  phone: phoneValid,
});
