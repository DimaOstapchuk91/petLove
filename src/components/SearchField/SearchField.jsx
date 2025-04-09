import { useForm } from 'react-hook-form';
import sprite from '../../assets/sprite.svg';

const SearchField = ({ setSearch }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = ({ search }) => {
    setSearch(search.trim());
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
