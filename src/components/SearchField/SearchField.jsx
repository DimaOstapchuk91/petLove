import sprite from '../../assets/sprite.svg';
import { useEffect, useState } from 'react';

const SearchField = ({
  register,
  handleSubmit,
  watch,
  reset,
  onSubmit,
  asForm = false,
}) => {
  const [showClear, setShowClear] = useState(false);

  const searchValue = watch('keyword');

  useEffect(() => {
    setShowClear(searchValue?.trim().length > 0);
  }, [searchValue]);
  console.log('assForm', asForm);

  const renderInput = () => {
    return (
      <label className='relative block md:w-full md:max-w-[265px]'>
        <input
          {...register('keyword')}
          className={
            !asForm
              ? 'p-3 w-full bg-text-white border border-transparent transition-all duration-150 focus:border-brand hover:border-brand outline-none !text-sm font-medium placeholder:text-text-dark rounded-[30px] md:max-w-[265px] md:p-3.5'
              : 'p-3 w-full border border-inputs outline-none rounded-[30px] md:max-w-[230px] md:p-3.5'
          }
          type='text'
          placeholder='Search'
        />
        {showClear && (
          <button
            type='button'
            onClick={reset}
            className='absolute top-1/2 -translate-y-1/2 right-10 cursor-pointer'
          >
            <svg
              className={
                !asForm
                  ? 'fill-transparent stroke-error w-4.5 h-4.5'
                  : 'fill-transparent stroke-error '
              }
              width={20}
              height={20}
            >
              <use href={`${sprite}#icon-cross-small`} />
            </svg>
          </button>
        )}
        <button
          className='absolute top-3.5 right-3.5 md:right-3.5 cursor-pointer'
          type='submit'
        >
          <svg
            className={
              !asForm
                ? 'fill-transparent stroke-text-dark w-4.5 h-4.5'
                : 'fill-transparent stroke-text-dark'
            }
            width={20}
            height={20}
          >
            <use href={`${sprite}#icon-search`}></use>
          </svg>
        </button>
      </label>
    );
  };

  return asForm ? (
    <form onSubmit={handleSubmit(onSubmit)}>{renderInput()}</form>
  ) : (
    renderInput()
  );
};

export default SearchField;
