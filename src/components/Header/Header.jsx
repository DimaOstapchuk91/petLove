import Nav from '../Nav/Nav.jsx';
import AuthNav from '../AuthNav/AuthNav.jsx';
import UserNav from '../UserNav/UserNav.jsx';
import Logo from '../Logo/Logo.jsx';
import sprite from '../../assets/sprite.svg';

const Header = () => {
  const isLogin = true;
  const mobile = true;
  return (
    <header className='container !mt-7'>
      <div className='flex justify-between items-center'>
        <Logo />
        {!mobile ? (
          <div className='flex'>
            <Nav />
            {isLogin ? <UserNav /> : <AuthNav />}
          </div>
        ) : (
          <button type='button'>
            <svg width='32' height='32' className='stroke-text-dark'>
              <use href={`${sprite}#icon-menu-burger`}></use>
            </svg>
          </button>
        )}
      </div>
    </header>
  );
};
export default Header;
