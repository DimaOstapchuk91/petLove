import Nav from '../Nav/Nav.jsx';
import AuthNav from '../AuthNav/AuthNav.jsx';
import UserNav from '../UserNav/UserNav.jsx';
import Logo from '../Logo/Logo.jsx';
import sprite from '../../assets/sprite.svg';
import { useState } from 'react';
import MobileMenu from '../MobileMenu/MobileMenu.jsx';
import UserBar from '../UserBar/UserBar.jsx';
import useMediaQuery from '../../hooks/useMediaQuery.js';

const Header = () => {
  const isMobile = useMediaQuery('(max-width: 767px)');
  const isDesktop = useMediaQuery('(min-width: 1280px)');
  const [isOpen, setIsOpen] = useState(false);

  const isLogin = true;
  return (
    <header className='container !mt-7'>
      <div className='flex justify-between items-center'>
        <Logo />
        {isDesktop ? (
          <div className='flex'>
            <Nav />
            {isLogin ? <UserNav /> : <AuthNav />}
          </div>
        ) : (
          <div className='flex gap-3'>
            {isMobile ? <UserBar /> : <UserNav />}
            <button type='button' onClick={() => setIsOpen(!isOpen)}>
              <svg width='32' height='32' className='stroke-text-dark'>
                <use href={`${sprite}#icon-menu-burger`}></use>
              </svg>
            </button>
          </div>
        )}
      </div>
      <MobileMenu
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        isLogin={isLogin}
      />
    </header>
  );
};
export default Header;
