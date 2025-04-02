import cat from '../../assets/img/cat.png';
import dog from '../../assets/img/corgi.png';
import rectangle from '../../assets/img/rectangle.png';

const AuthIllustration = ({ isPet }) => {
  return (
    <div className='rounded-[30px] bg-brand max-w-[335px] h-[280px] relative'>
      <img
        className='absolute bottom-0 right-0'
        src={rectangle}
        alt='rectangle'
      />
      {isPet === 'cat' && (
        <img className='absolute bottom-0' src={cat} alt='cat' />
      )}
      {isPet === 'dog' && (
        <img className='absolute bottom-0' src={dog} alt='cat' />
      )}
    </div>
  );
};
export default AuthIllustration;
