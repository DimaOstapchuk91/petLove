import s from './AuthNav.module.css';
import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <>
      <ul className={s.authList}>
        <li>
          <NavLink className={s.loginLink} to=' /login'>
            LOG IN
          </NavLink>
        </li>
        <li>
          <NavLink className={s.registerLink} to='/register'>
            REGISTRATION
          </NavLink>
        </li>
      </ul>
    </>
  );
};
export default AuthNav;
