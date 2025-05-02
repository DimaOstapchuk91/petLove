import { NavLink } from 'react-router-dom';
import sprite from '../../assets/sprite.svg';

const AddPet = () => {
  return (
    <NavLink
      to='/add-pet'
      className='flex justify-center gap-1 p-2.5 bg-brand rounded-[30px] hover:bg-hover text-text-white max-w-[103px] text-sm font-medium leading-4.5 -tracking-[0.42px]'
    >
      Add pet{' '}
      <svg className='fill-text-white stroke-text-white' width='18' height='18'>
        <use href={`${sprite}#icon-plus`}></use>
      </svg>
    </NavLink>
  );
};
export default AddPet;
