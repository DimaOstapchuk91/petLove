import dogIcon from '../../../assets/img/dog-icon.png';
import catIcon from '../../../assets/img/cat-icon.png';
import { useMemo } from 'react';

const ModalApproveAction = ({ onClose, approveText, id, approveFunction }) => {
  const randomImage = useMemo(() => {
    const images = [dogIcon, catIcon];
    const index = Math.floor(Math.random() * images.length);
    return images[index];
  }, []);

  return (
    <div className='w-full max-w-[335px] px-7 py-10  bg-text-white rounded-[30px] p-10 md:w-[448px] md:max-w-[448px] md:p-20'>
      <div className='flex justify-center items-center rounded-full w-20 h-20 bg-brand-light mx-auto mb-5'>
        <img src={randomImage} alt='cat or dog' width={44} height={44} />
      </div>
      <h3 className='text-xl font-bold  leading-5 -tracking-[-0.6px] text-center mb-5 md:text-2xl md:leading-6 md:-tracking-[0.72] md:mb-7'>
        {approveText}
      </h3>

      <div className='w-full  flex justify-center gap-2'>
        <button
          className='py-3 px-[57px] w-full text-center max-w-[137px] rounded-[30px] text-text-white bg-brand text-sm font-bold leading-4.5 -tracking-[0.42px] hover:bg-hover transition-all duration-200 md:p-3.5 md:text-base md:leading-5 md:-tracking-[0.48px] md:max-w-[140px] cursor-pointer'
          onClick={() => approveFunction(id)}
        >
          Yes
        </button>
        <button
          className='py-3 px-11 text-center w-full max-w-[130px] rounded-[30px]  bg-disabled text-sm font-bold leading-4.5 -tracking-[0.42px] hover:bg-hover hover:text-text-white transition-all duration-200 md:p-3.5 md:text-base md:leading-5 md:-tracking-[0.48px] md:max-w-[140px] cursor-pointer'
          onClick={() => {
            onClose();
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};
export default ModalApproveAction;
