import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <ul className='flex flex-col gap-2.5 max-w-30'>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? ``
                : `py-3.5 px-5 block text-center border border-border rounded-[30px] w-full text-[14px] font-medium text-text-white`
            }
            to='/news'
          >
            News
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? ``
                : `py-3.5 px-5 block text-center border border-border rounded-[30px] w-full text-[14px] font-medium text-text-white`
            }
            to='/notices'
          >
            Find pet
          </NavLink>
        </li>

        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? ``
                : `py-3.5 px-5 block text-center border border-border rounded-[30px] w-full text-[14px] font-medium text-text-white`
            }
            to='/friends'
          >
            Our friends
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
