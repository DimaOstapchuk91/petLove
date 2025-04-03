import { NavLink } from 'react-router-dom';

const AuthNav = ({ header }) => {
  const isHeader = header === 'header';
  return (
    <>
      <ul
        className={
          isHeader ? 'flex items-center gap-2' : 'flex flex-col gap-2 w-full'
        }
      >
        <li>
          <NavLink
            className={
              isHeader
                ? 'py-4 block px-9 bg-brand text-text-white rounded-[30px] font-bold'
                : 'p-3 text-center text-[14px] text-text-white block rounded-[30px] border border-border'
            }
            to='/login'
          >
            LOG IN
          </NavLink>
        </li>
        <li>
          <NavLink
            className={
              isHeader
                ? 'py-4 px-5 block text-center  rounded-[30px] bg-brand-light text-brand font-bold'
                : 'p-3 block text-center text-[14px] rounded-[30px] bg-brand-light text-brand '
            }
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
