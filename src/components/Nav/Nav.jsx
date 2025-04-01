import { NavLink } from 'react-router-dom';
import s from './Nav.module.css';

const Nav = () => {
  return (
    <nav>
      <ul className={s.navList}>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${s.navLink} ${s.active}` : s.navLink
            }
            to='/news'
          >
            News
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${s.navLink} ${s.active}` : s.navLink
            }
            to='/notices'
          >
            Find pet
          </NavLink>
        </li>

        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${s.navLink} ${s.active}` : s.navLink
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
