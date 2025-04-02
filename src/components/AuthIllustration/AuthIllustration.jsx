import cat from '../../assets/img/cat.png';
import rectangle from '../../assets/img/rectangle.png';

const AuthIllustration = () => {
  return (
    <div className='rounded-[30px] bg-brand max-w-[335px] h-[280px] relative'>
      <img
        className='absolute bottom-0 right-0'
        src={rectangle}
        alt='rectangle'
      />
      <img className='absolute' src={cat} alt='cat' />
    </div>
  );
};
export default AuthIllustration;
