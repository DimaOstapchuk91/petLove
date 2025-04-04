import { useLocation } from 'react-router-dom';
import sprite from '../../assets/sprite.svg';

const Logo = () => {
  const location = useLocation();

  const isLocation = location.pathname === '/home';

  return (
    <div>
      <p
        className={
          isLocation
            ? 'flex text-xl gap-0.5 font-bold text-text-white items-center md:text-[28px]'
            : 'flex text-xl font-bold items-baseline md:text-[28px] md:gap-0.5'
        }
      >
        petl
        <span>
          <svg
            width='17'
            height='17'
            className={
              isLocation
                ? 'stroke-text-white fill-text-white'
                : 'stroke-brand fill-brand md:w-[19px] md:h-[19px] '
            }
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
