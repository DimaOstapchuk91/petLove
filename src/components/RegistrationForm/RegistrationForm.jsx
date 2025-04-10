import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { registerUser } from '../../redux/user/operations.js';
import { useState } from 'react';
import sprite from '../../assets/sprite.svg';
import { orderRegistrationSchema } from '../../utils/formValidation.js';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Title from '../Title/Title.jsx';

const RegistrationForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [repeatPasswordVisible, setRepeatPasswordVisible] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(orderRegistrationSchema),
  });

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleRepeatPasswordVisibility = () => {
    setRepeatPasswordVisible(!repeatPasswordVisible);
  };

  const onSubmit = async data => {
    const { name, email, password } = data;
    try {
      await dispatch(registerUser({ name, email, password })).unwrap();

      navigate('/profile');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      className='bg-text-white px-5 py-5 rounded-[30px] md:py-6.5 md:px-35 xl:w-1/2 xl:py-17 xl:px-21'
      onSubmit={handleSubmit(onSubmit)}
    >
      <Title titleText={'Registration'} form={true} />
      <p className='text-[14px] font-medium mb-5 mt-3 md:mt-4 md:text-lg md:mb-8'>
        Thank you for your interest in our platform.
      </p>
      <ul className='flex flex-col gap-2.5 mb-6 md:gap-4 xl:mb-8.5'>
        <li>
          <label>
            <input
              className='border border-inputs outline-none rounded-[30px] w-full p-3 md:p-4'
              type='text'
              name='name'
              placeholder='Name'
              {...register('name')}
            />
            {errors.name && <p className=''>{errors.name.message}</p>}
          </label>
        </li>
        <li>
          <label>
            <input
              className='border border-inputs outline-none rounded-[30px] w-full p-3 md:p-4'
              type='email'
              name='email'
              placeholder='Email'
              {...register('email')}
            />
            {errors.email && <p className=''>{errors.email.message}</p>}
          </label>
        </li>
        <li>
          <label className='relative'>
            <input
              className='border border-inputs outline-none rounded-[30px] w-full p-3 md:p-4'
              type={passwordVisible ? 'text' : 'password'}
              name='password'
              placeholder='Password'
              {...register('password')}
            />
            <button
              type='button'
              className='absolute bottom-0.5 right-3 cursor-pointer'
              onClick={togglePasswordVisibility}
            >
              {passwordVisible ? (
                <svg
                  width='18'
                  height='18'
                  className='fill-transparent stroke-brand'
                >
                  <use href={`${sprite}#icon-eye-on`}></use>
                </svg>
              ) : (
                <svg
                  width='18'
                  height='18'
                  className='fill-transparent stroke-brand'
                >
                  <use href={`${sprite}#icon-eye-off`}></use>
                </svg>
              )}
            </button>
            {errors.password && <p className=''>{errors.password.message}</p>}
          </label>
        </li>
        <li>
          <label className='relative'>
            <input
              className='border border-inputs outline-none rounded-[30px] w-full p-3 md:p-4'
              type={repeatPasswordVisible ? 'text' : 'password'}
              name='confirmPassword'
              placeholder='Confirm password'
              {...register('confirmPassword')}
            />
            <button
              type='button'
              className='absolute bottom-0.5 right-3 cursor-pointer'
              onClick={toggleRepeatPasswordVisibility}
            >
              {repeatPasswordVisible ? (
                <svg
                  width='18'
                  height='18'
                  className='fill-transparent stroke-brand'
                >
                  <use href={`${sprite}#icon-eye-on`}></use>
                </svg>
              ) : (
                <svg
                  width='18'
                  height='18'
                  className='fill-transparent stroke-brand'
                >
                  <use href={`${sprite}#icon-eye-off`}></use>
                </svg>
              )}
            </button>
            {errors.confirmPassword && (
              <p className=''>{errors.confirmPassword.message}</p>
            )}
          </label>
        </li>
      </ul>
      <div className='flex flex-col  w-full gap-3'>
        <button
          type='submit'
          className='p-3 w-ful bg-brand rounded-[30px] text-text-white transition-all font-bold duration-300 hover:bg-hover cursor-pointer md:p-4.5 '
        >
          REGISTRATION
        </button>
        <p className='text-center text-xs text-text-gray font-medium md:text-sm'>
          Already have an account?{' '}
          <NavLink
            className='text-brand transition-all duration-300 hover:text-hover cursor-pointer'
            to='/login'
          >
            Login
          </NavLink>
        </p>
      </div>
    </form>
  );
};
export default RegistrationForm;
