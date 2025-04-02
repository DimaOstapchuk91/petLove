import { useForm } from 'react-hook-form';
import sprite from '../../assets/sprite.svg';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { loginUser } from '../../redux/user/operations.js';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { orderLoginSchema } from '../../utils/formValidation.js';

const LoginForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(orderLoginSchema),
  });

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const onSubmit = async data => {
    dispatch(loginUser(data));
  };

  return (
    <form
      className='bg-text-white px-5 py-15 rounded-[30px]'
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className='text-[28px] font-bold mb-3'>Log in</h2>
      <p className='text-[14px] font-medium mb-6'>
        Welcome! Please enter your credentials to login to the platform:
      </p>
      <ul className='flex flex-col gap-2.5 mb-10'>
        <li>
          <label>
            <input
              className='border border-inputs outline-none rounded-[30px] w-full p-3'
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
              className='border border-inputs outline-none rounded-[30px] w-full p-3'
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
      </ul>
      <div className='flex flex-col  w-full gap-3'>
        <button
          type='submit'
          className='p-3 w-ful bg-brand rounded-[30px] text-text-white transition-all duration-300 hover:bg-hover cursor-pointer'
        >
          Registration
        </button>
        <p className='text-center text-xs text-text-gray font-medium'>
          Don’t have an account?{' '}
          <NavLink
            className='text-brand transition-all duration-300 hover:text-hover cursor-pointer'
            to='/register'
          >
            Register
          </NavLink>
        </p>
      </div>
    </form>
  );
};
export default LoginForm;
