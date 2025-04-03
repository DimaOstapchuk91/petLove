import cat from '../../assets/img/cat.png';
import dog from '../../assets/img/corgi.png';
import dogIcon from '../../assets/img/dog-icon.png';
import catIcon from '../../assets/img/cat-icon.png';
import rectangle from '../../assets/img/rectangle.png';
import useMediaQuery from '../../hooks/useMediaQuery.js';

const AuthIllustration = ({ isPet }) => {
  const isMobile = useMediaQuery('(max-width: 767px)');

  const cats = isPet === 'cat';
  const dogs = isPet === 'dog';

  return (
    <div className='rounded-[30px] bg-brand max-w-[335px] h-[280px] relative md:max-w-[704px] md:h-[302px]'>
      <img
        className='absolute bottom-0 right-0 md:w-[562px] md:top-11 md:right-12'
        src={rectangle}
        alt='rectangle'
      />
      {cats && (
        <img className='absolute bottom-0 md:right-22.5' src={cat} alt='cat' />
      )}
      {dogs && (
        <img className='absolute bottom-0 md:right-22.5' src={dog} alt='cat' />
      )}
      {!isMobile && (
        <div className='absolute top-[148px] left-8 max-w-[300px] p-4 bg-text-white rounded-[30px] flex gap-2'>
          <div className='w-15 h-15 bg-brand-light rounded-full flex justify-center items-center'>
            <img
              className='block'
              src={cats ? catIcon : dogIcon}
              width={32}
              height={32}
              alt='Animal img'
            />
          </div>
          <div className='max-w-[198px]'>
            <div className='flex justify-between items-center mb-2'>
              <p className='font-bold text-brand'>{cats ? 'Jack' : 'Rich'}</p>
              <p className='text-xs font-medium text-text-gray'>
                Birthday:{' '}
                <span className='text-text-dark'>
                  {cats ? '18.10.2021' : '21.09.2020'}
                </span>
              </p>
            </div>
            <p className='text-xs font-medium'>
              {cats
                ? 'Jack is a gray Persian cat with green eyes. He loves to be pampered and groomed, and enjoys playing with toys.'
                : 'Rich would be the perfect addition to an active family that loves to play and go on walks. I bet he would love having a doggy playmate too!'}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
export default AuthIllustration;
