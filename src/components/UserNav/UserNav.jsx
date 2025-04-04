import { useLocation } from 'react-router-dom';
import LogOutBtn from '../LogOutBtn/LogOutBtn.jsx';
import UserBar from '../UserBar/UserBar.jsx';

const UserNav = () => {
  const location = useLocation();

  const isLocation = location.pathname === '/home';
  return (
    <div className='flex gap-2'>
      <LogOutBtn
        className={
          isLocation
            ? 'hidden'
            : 'p-3 block text-center text-base rounded-[30px] bg-brand text-text-white  md:w-auto md:px-9'
        }
      />
      <UserBar />
    </div>
  );
};
export default UserNav;
