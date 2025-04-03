import { NavLink } from 'react-router-dom';
import sprite from '../../assets/sprite.svg';

const UserBar = () => {
  return (
    <div className='md:flex md:items-center md:gap-2'>
      <NavLink
        className='w-10 flex justify-center items-center h-10 bg-brand-light rounded-full cursor-pointer'
        to='/profile'
      >
        <svg className='fill-brand stroke-brand' width='20' height='20'>
          <use href={`${sprite}#icon-user`}></use>
        </svg>
      </NavLink>
      <p className='hidden md:block'>Anonimus</p>
    </div>
  );
};
export default UserBar;
