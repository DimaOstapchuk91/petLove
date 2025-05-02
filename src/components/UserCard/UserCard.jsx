import EditUserBtn from '../EditUserBtn/EditUserBtn.jsx';
import LogOutBtn from '../LogOutBtn/LogOutBtn.jsx';
import PetsBlock from '../PetsBlock/PetsBlock.jsx';
import UserBlock from '../UserBlock/UserBlock.jsx';
import sprite from '../../assets/sprite.svg';
import { useSelector } from 'react-redux';
import { selectUserCurrentFull } from '../../redux/user/selectors.js';

const UserCard = () => {
  const userCurrentFull = useSelector(selectUserCurrentFull);
  return (
    <div className='flex flex-col bg-text-white rounded-[30px] pt-4.5 px-5 pb-10 '>
      <div className='flex justify-between'>
        <p className='flex items-center bg-brand gap-1 py-2.5 px-3.5 text-sm leading-4.5 -tracking-[0.28px] text-text-white rounded-[30px]'>
          User
          <svg
            className='fill-text-white stroke-text-white'
            width='18'
            height='18'
          >
            <use href={`${sprite}#icon-user`}></use>
          </svg>
        </p>
        <EditUserBtn />
      </div>
      <UserBlock userCurrentFull={userCurrentFull} />
      <PetsBlock />
      <LogOutBtn
        className={
          'p-3 rounded-[30px] text-brand bg-brand-light hover:bg-hover-light max-w-[114px] text-sm font-bold leading-4.5 -tracking-[0.42px]'
        }
      />
    </div>
  );
};
export default UserCard;
