import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <>
      <ul className='flex flex-col gap-2 w-full'>
        <li>
          <NavLink
            className='p-3 text-center text-[14px] text-text-white block rounded-[30px] border border-border'
            to='/login'
          >
            LOG IN
          </NavLink>
        </li>
        <li>
          <NavLink
            className='p-3 block text-center text-[14px] rounded-[30px] bg-brand-light text-brand '
            to='/register'
          >
            REGISTRATION
          </NavLink>
        </li>
      </ul>
    </>
  );
};
export default AuthNav;
