import { useForm } from 'react-hook-form';
import sprite from '../../assets/sprite.svg';
import { useEffect, useState } from 'react';

const SearchField = ({ setSearch }) => {
  const [showClear, setShowClear] = useState(false);

  const { register, handleSubmit, watch, reset } = useForm();

  const searchValue = watch('search');

  useEffect(() => {
    console.log(searchValue);
    setShowClear(searchValue?.trim().length > 0);
  }, [searchValue]);

  const onSubmit = ({ search }) => {
    setSearch(search.trim());
  };

  const handleClear = () => {
    reset();
    setSearch('');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label className='relative'>
        <input
          {...register('search')}
          className='p-3 w-full border border-inputs outline-none rounded-[30px] md:max-w-[230px] md:p-3.5'
          type='text'
          placeholder='Search'
        />
        {showClear && (
          <button
            type='button'
            onClick={handleClear}
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
    </form>
  );
};

export default SearchField;
