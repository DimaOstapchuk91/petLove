import { useSelector } from 'react-redux';
import sprite from '../../assets/sprite.svg';
import EditUserBtn from '../EditUserBtn/EditUserBtn.jsx';
import { selectUserCurrentFull } from '../../redux/user/selectors.js';

const UserBlock = () => {
  const userCurrentFull = useSelector(selectUserCurrentFull);

  const { avatar, name, email, phone } = userCurrentFull || {};

  return (
    <div className='mb-10 -mt-0.5'>
      {avatar ? (
        <img src={avatar} alt={name} />
      ) : (
        <div className='flex flex-col justify-center items-center gap-2 mb-7'>
          <div className='p-[27px] rounded-full bg-brand-light max-w-[94px]'>
            <svg className='fill-brand stroke-brand' width='40' height='40'>
              <use href={`${sprite}#icon-user`}></use>
            </svg>
          </div>
          <EditUserBtn userBlock={true} />
        </div>
      )}
      <h2 className='font-bold leading-5 mb-5'>My information</h2>
      <ul className='flex flex-col gap-2.5'>
        <li
          className={
            name
              ? 'p-3 border border-brand rounded-[30px]'
              : 'p-3 border border-inputs rounded-[30px]'
          }
        >
          <p className='text-sm font-medium leading-4.5 -tracking-[0.42px]'>
            {name}
          </p>
        </li>
        <li
          className={
            email
              ? 'p-3 border border-brand rounded-[30px]'
              : 'p-3 border border-inputs rounded-[30px]'
          }
        >
          <p className='text-sm font-medium leading-4.5 -tracking-[0.42px]'>
            {email}
          </p>
        </li>
        <li
          className={
            phone
              ? 'p-3 border border-brand rounded-[30px]'
              : 'p-3 border border-inputs rounded-[30px]'
          }
        >
          <p className='text-sm font-medium leading-4.5 -tracking-[0.42px]'>
            {phone ? phone : '+380'}
          </p>
        </li>
      </ul>
    </div>
  );
};
export default UserBlock;
