import { NavLink } from 'react-router-dom';

const Nav = ({ header }) => {
  const isHeader = header === 'header';
  console.log(isHeader);

  return (
    <nav>
      <ul
        className={isHeader ? 'flex gap-2.5' : 'flex flex-col gap-2.5 max-w-30'}
      >
        <li>
          <NavLink
            className={
              isHeader
                ? ({ isActive }) =>
                    isActive
                      ? `px-5 py-4 block  border border-brand rounded-[30px]`
                      : `px-5 py-4 block  border border-inputs rounded-[30px]`
                : ({ isActive }) =>
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
            className={
              isHeader
                ? ({ isActive }) =>
                    isActive
                      ? `px-5 py-4 block  border border-brand rounded-[30px]`
                      : `px-5 py-4 block  border border-inputs rounded-[30px]`
                : ({ isActive }) =>
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
            className={
              isHeader
                ? ({ isActive }) =>
                    isActive
                      ? `px-5 py-4 block  border border-brand rounded-[30px]`
                      : `px-5 py-4 block  border border-inputs rounded-[30px]`
                : ({ isActive }) =>
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
