import { NavLink, useLocation } from 'react-router-dom';
import sprite from '../../assets/sprite.svg';

const UserBar = () => {
  const location = useLocation();

  const isLocation = location.pathname === '/home';
  return (
    <div className='md:flex md:items-center md:gap-2'>
      <NavLink
        className='w-10 flex justify-center items-center h-10 bg-brand-light rounded-full cursor-pointer transition-all duration-300  hover:opacity-[0.8]'
        to='/profile'
      >
        <svg className='fill-brand stroke-brand' width='20' height='20'>
          <use href={`${sprite}#icon-user`}></use>
        </svg>
      </NavLink>
      <p
        className={
          isLocation
            ? 'hidden md:block md:text-xl text-text-white font-bold'
            : 'hidden md:block md:text-xl font-bold'
        }
      >
        Anonimus
      </p>
    </div>
  );
};
export default UserBar;
