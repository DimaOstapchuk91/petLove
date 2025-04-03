import sprite from '../../assets/sprite.svg';

const Logo = () => {
  return (
    <div>
      <p className='flex text-xl font-bold items-baseline md:text-[28px] md:gap-0.5'>
        petl
        <span>
          <svg
            width='17'
            height='17'
            className='stroke-brand fill-brand md:w-[19px] md:h-[19px] '
          >
            <use href={`${sprite}#icon-heart`}></use>
          </svg>
        </span>
        ve
      </p>
    </div>
  );
};
export default Logo;
