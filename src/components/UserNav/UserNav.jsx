import LogOutBtn from '../LogOutBtn/LogOutBtn.jsx';
import UserBar from '../UserBar/UserBar.jsx';

const UserNav = () => {
  return (
    <div className='flex gap-2'>
      <LogOutBtn
        className={
          'p-3 block text-center text-base rounded-[30px] bg-brand text-text-white  md:w-auto md:px-9'
        }
      />
      <UserBar />
    </div>
  );
};
export default UserNav;
