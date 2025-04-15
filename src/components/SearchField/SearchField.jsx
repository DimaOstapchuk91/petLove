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

  const renderInput = () => {
    return (
      <label className='relative'>
        <input
          {...register('keyword')}
          className='p-3 w-full border border-inputs outline-none rounded-[30px] md:max-w-[230px] md:p-3.5'
          type='text'
          placeholder='Search'
        />
        {showClear && (
          <button
            type='button'
            onClick={reset}
            className='absolute top-1/2 -translate-y-1/2 right-10'
          >
            <svg
              className='fill-transparent stroke-error'
              width={20}
              height={20}
            >
              <use href={`${sprite}#icon-cross-small`} />
            </svg>
          </button>
        )}
        <button className='absolute top-0 right-3 md:right-3.5' type='submit'>
          <svg
            className='fill-transparent stroke-text-dark'
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
