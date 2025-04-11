import sprite from '../../assets/sprite.svg';
import { formatNoticesDate } from '../../utils/formatDate.js';

const NoticesItem = ({ dataItem }) => {
  const {
    imgURL,
    name,
    title,
    popularity,
    birthday,
    sex,
    species,
    category,
    comment,
    price,
  } = dataItem;
  return (
    <li className='p-6 bg-text-white w-full rounded-2xl max-w-[335px] md:max-w-[342px] xl:max-w-[362px]'>
      <img
        className='w-full  h-[178px] object-cover rounded-2xl mb-6 md:h-[226px]'
        src={imgURL}
        alt={name}
      />
      <div className='flex justify-between mb-2'>
        <h3 className='font-bold leading-5 md:text-lg md:leading-6'>{title}</h3>
        <p className='flex gap-0.5  items-center font-medium text-sm leading-4.5'>
          <svg className='fill-brand stroke-brand' width='16' height='16'>
            <use href={`${sprite}#icon-star`}></use>
          </svg>
          {popularity}
        </p>
      </div>
      <div className='flex items-center justify-center gap-3.5 mb-4'>
        <p className='flex flex-col text-[10px] text-text-gray leading-3.5 -tracking-[0.2px] w-1/5'>
          Name
          <span className='text-xs text-text-dark'>{name}</span>
        </p>
        <p className='flex flex-col text-[10px] text-text-gray leading-3.5 -tracking-[0.2px] w-1/5'>
          Birthday
          <span className='text-xs text-text-dark'>
            {formatNoticesDate(birthday)}
          </span>
        </p>
        <p className='flex flex-col text-[10px] text-text-gray leading-3.5 -tracking-[0.2px] w-1/5'>
          Sex
          <span className='text-xs text-text-dark'>{sex}</span>
        </p>
        <p className='flex flex-col text-[10px] text-text-gray leading-3.5 -tracking-[0.2px] w-1/5'>
          Species
          <span className='text-xs text-text-dark'>{species}</span>
        </p>
        <p className='flex flex-col text-[10px] text-text-gray leading-3.5 -tracking-[0.2px] w-1/5'>
          Category
          <span className='text-xs text-text-dark'>{category}</span>
        </p>
      </div>
      <p className='text-sm font-medium leading-4.5 h-9 -tracking-[0.28px] mb-4 md:mb-6'>
        {comment}
      </p>
      <p className='font-bold leading-4 mb-3 md:text-lg md:leading-6'>
        $ {price ? price : '40.99'}
      </p>
      <div className='flex gap-2.5'>
        <button
          className='p-3.5 w-full bg-brand rounded-[30px] text-text-white text-sm font-medium leading-4.5 -tracking-[0.42px]'
          type='button'
        >
          Learn more
        </button>
        <button className='rounded-full p-3.5 bg-brand-light' type='button'>
          <svg className='fill-transparent stroke-brand' width='18' height='18'>
            <use href={`${sprite}#icon-heart`}></use>
          </svg>
        </button>
      </div>
    </li>
  );
};
export default NoticesItem;
