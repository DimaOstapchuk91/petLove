import Nav from '../Nav/Nav.jsx';
import AuthNav from '../AuthNav/AuthNav.jsx';
import UserNav from '../UserNav/UserNav.jsx';
import Logo from '../Logo/Logo.jsx';

const Header = () => {
  const isLogin = true;
  return (
    <div>
      <div>
        <Logo />
        <div>
          <Nav />
          {isLogin ? <UserNav /> : <AuthNav />}
        </div>
      </div>
    </div>
  );
};
export default Header;
