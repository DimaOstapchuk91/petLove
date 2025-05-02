import sprite from '../../assets/sprite.svg';

const EditUserBtn = ({ userBlock }) => {
  return (
    <>
      {!userBlock ? (
        <button
          type='button'
          className='p-2.5 bh-brand-light rounded-full bg-brand-light hover:bg-hover-light'
        >
          <svg className='fill-transparent stroke-brand' width='18' height='18'>
            <use href={`${sprite}#icon-edit`}></use>
          </svg>
        </button>
      ) : (
        <button
          type='button'
          className='underline [text-decoration-skip-ink:none] cursor-pointer text-xs font-medium leading-4 -tracking-[0.24px]'
        >
          Upload photo
        </button>
      )}
    </>
  );
};
export default EditUserBtn;
