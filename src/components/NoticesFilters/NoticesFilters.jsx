import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { setFilter, resetFilters } from '../../redux/filters/slice.js';
import {
  getNoticesSearchCategories,
  getNoticesSearchSex,
  getNoticesSearchSpecies,
  getSearchCities,
} from '../../redux/filters/operations.js';
import SearchField from '../SearchField/SearchField.jsx';
import {
  selectCategories,
  selectCities,
  selectSex,
  selectSpecies,
} from '../../redux/filters/selectors.js';
import sprite from '../../assets/sprite.svg';
import UniversalSelect from '../UniversalSelect/UniversalSelect.jsx';

const NoticesFilters = () => {
  const dispatch = useDispatch();
  const categoriesOption = useSelector(selectCategories);
  const sexOption = useSelector(selectSex);
  const speciesOption = useSelector(selectSpecies);
  const citiesOption = useSelector(selectCities);

  useEffect(() => {
    dispatch(getNoticesSearchCategories());
    dispatch(getNoticesSearchSex());
    dispatch(getNoticesSearchSpecies());
    dispatch(getSearchCities());
  }, [dispatch]);

  const { register, handleSubmit, control, reset, watch } = useForm({
    defaultValues: {
      keyword: '',
      category: '',
      sex: '',
      species: '',
      city: '',
      sort: '',
    },
  });

  const watchedValues = useWatch({ control });
  const { keyword, category, sex, species, city, sort } = watchedValues || {};

  console.log('sort', sort);

  useEffect(() => {
    let byPrice = '';
    let byPopularity = '';

    if (sort?.startsWith('popularity')) {
      byPopularity = sort.split('-')[1];
    }
    if (sort?.startsWith('price')) {
      byPrice = sort.split('-')[1];
    }

    const newFilters = {
      ...(category && { category: category.value }),
      ...(sex && { sex: sex.value }),
      ...(species && { species: species.value }),
      ...(city && { locationId: city.value }),
      ...(byPopularity && { byPopularity }),
      ...(byPrice && { byPrice }),
    };

    console.log('byPrice', byPrice);
    console.log('byPopolarity', byPopularity);

    if (Object.keys(newFilters).length > 0) {
      dispatch(setFilter(newFilters));
    }
  }, [category, sex, species, city, sort, dispatch]);

  const handleFormSubmit = data => {
    console.log('data kayword', data);
    dispatch(setFilter({ keyword: data.keyword }));
  };

  const handleReset = () => {
    reset();
    dispatch(resetFilters());
  };

  const handleSearchClear = () => {
    reset({ keyword: '' });
    dispatch(setFilter({ keyword: '' }));
  };

  const handleRessetRadio = e => {
    e.preventDefault(); // Забороняємо стандартну поведінку
    e.stopPropagation();
    reset({ sort: '' });
    dispatch(
      setFilter({
        byPrice: '',
        byPopularity: '',
      })
    );
  };

  const hasActiveFilters = () => {
    return keyword || category || sex || species || city || sort;
  };

  return (
    <form
      className='mt-10 py-5 px-8 bg-brand-light rounded-[30px] flex flex-col gap-5'
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <div className='flex flex-col gap-3 border-b border-inputs pb-5'>
        <SearchField
          register={register}
          handleSubmit={handleSubmit}
          watch={watch}
          reset={handleSearchClear}
        />
        <div className='flex gap-2 w-full'>
          <UniversalSelect
            name={'category'}
            control={control}
            baseSelect={categoriesOption}
            iconName={'icon-arrow-small'}
            placeholder={'Category'}
          />
          <UniversalSelect
            name={'sex'}
            control={control}
            baseSelect={sexOption}
            iconName={'icon-arrow-small'}
            placeholder={'By Gender'}
          />
        </div>

        <UniversalSelect
          name={'species'}
          control={control}
          baseSelect={speciesOption}
          iconName={'icon-arrow-small'}
          placeholder={'By type'}
        />
        <UniversalSelect
          name={'city'}
          control={control}
          cities={citiesOption}
          iconName={'icon-search'}
        />
      </div>
      <div className='flex flex-wrap gap-2.5'>
        <label
          className={
            sort !== 'popularity-false'
              ? 'p-3 rounded-[30px] transition-all duration-200 text-sm fonnt-medium flex items-center bg-text-white  cursor-pointer hover:bg-brand hover:text-text-white'
              : 'p-3 rounded-[30px] transition-all duration-200 text-sm fonnt-medium flex items-center gap-1.5 bg-brand text-text-white cursor-default'
          }
        >
          <input
            type='radio'
            {...register('sort')}
            value='popularity-false'
            className='hidden'
          />
          Popular
          {sort === 'popularity-false' && (
            <button
              type='button'
              onClick={handleRessetRadio}
              className='cursor-pointer'
            >
              <svg className='w-4 h-4 stroke-white'>
                <use href={`${sprite}#icon-cross-small`} />
              </svg>
            </button>
          )}
        </label>
        <label
          className={
            sort !== 'popularity-true'
              ? 'p-3 rounded-[30px] transition-all duration-200 text-sm fonnt-medium flex items-center bg-text-white  cursor-pointer hover:bg-brand hover:text-text-white'
              : 'p-3 rounded-[30px] transition-all duration-200 text-sm fonnt-medium flex items-center gap-1.5 bg-brand text-text-white cursor-default'
          }
        >
          <input
            type='radio'
            {...register('sort')}
            value='popularity-true'
            className='hidden'
          />
          Unpopular
          {sort === 'popularity-true' && (
            <button
              type='button'
              onClick={handleRessetRadio}
              className=' cursor-pointer'
            >
              <svg className='w-4 h-4 stroke-white'>
                <use href={`${sprite}#icon-cross-small`} />
              </svg>
            </button>
          )}
        </label>
        <label
          className={
            sort !== 'price-false'
              ? 'p-3 rounded-[30px] transition-all duration-200 text-sm fonnt-medium flex items-center bg-text-white  cursor-pointer hover:bg-brand hover:text-text-white'
              : 'p-3 rounded-[30px] transition-all duration-200 text-sm fonnt-medium flex items-center gap-1.5 bg-brand text-text-white cursor-default'
          }
        >
          <input
            type='radio'
            {...register('sort')}
            value='price-false'
            className='hidden'
          />
          Cheap
          {sort === 'price-false' && (
            <button
              type='button'
              onClick={handleRessetRadio}
              className='cursor-pointer'
            >
              <svg className='w-4 h-4 stroke-white'>
                <use href={`${sprite}#icon-cross-small`} />
              </svg>
            </button>
          )}
        </label>
        <label
          className={
            sort !== 'price-true'
              ? 'p-3 rounded-[30px] transition-all duration-200 text-sm fonnt-medium flex items-center bg-text-white  cursor-pointer hover:bg-brand hover:text-text-white'
              : 'p-3 rounded-[30px] transition-all duration-200 text-sm fonnt-medium flex items-center gap-1.5 bg-brand text-text-white cursor-default'
          }
        >
          <input
            type='radio'
            {...register('sort')}
            value='price-true'
            className='hidden'
          />
          Expensive
          {sort === 'price-true' && (
            <button
              type='button'
              onClick={handleRessetRadio}
              className='cursor-pointer'
            >
              <svg className='w-4 h-4 stroke-white'>
                <use href={`${sprite}#icon-cross-small`} />
              </svg>
            </button>
          )}
        </label>
      </div>
      <div className='h-10.5 w-full relative overflow-hidden'>
        <button
          className={`p-3 w-full bg-brand rounded-[30px] text-text-white text-sm font-medium cursor-pointer transition-transform duration-300 ease-in-out ${
            hasActiveFilters()
              ? 'translate-y-0 opacity-100'
              : 'translate-y-full opacity-0'
          }`}
          onClick={handleReset}
        >
          Reset Filters
        </button>
      </div>
    </form>
  );
};

export default NoticesFilters;
