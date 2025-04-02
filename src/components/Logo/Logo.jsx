import sprite from '../../assets/sprite.svg';

const Logo = () => {
  return (
    <div>
      <p className='flex text-xl font-bold items-center'>
        petl
        <span>
          <svg width='17' height='17' className='stroke-brand fill-brand'>
            <use href={`${sprite}#icon-heart`}></use>
          </svg>
        </span>
        ve
      </p>
    </div>
  );
};
export default Logo;
