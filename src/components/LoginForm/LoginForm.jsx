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
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Log in</h2>
      <p>Welcome! Please enter your credentials to login to the platform:</p>
      <ul>
        <li>
          <label>
            <input
              type='email'
              name='email'
              placeholder='Email'
              {...register('email')}
            />
            {errors.email && <p className=''>{errors.email.message}</p>}
          </label>
        </li>
        <li>
          <label>
            <input type='password' name='password' {...register('password')} />
            <button
              type='button'
              className=''
              onClick={togglePasswordVisibility}
            >
              {passwordVisible ? (
                <svg width='15' height='15' className=''>
                  <use href={`${sprite}#icon-eye-on`}></use>
                </svg>
              ) : (
                <svg width='15' height='15' className=''>
                  <use href={`${sprite}#icon-eye-off`}></use>
                </svg>
              )}
            </button>
            {errors.password && <p className=''>{errors.password.message}</p>}
          </label>
        </li>
      </ul>
      <div className=''>
        <button type='submit' className=''>
          Registration
        </button>
        <p>
          Don’t have an account? <NavLink to='/register'>Register</NavLink>
        </p>
      </div>
    </form>
  );
};
export default LoginForm;
