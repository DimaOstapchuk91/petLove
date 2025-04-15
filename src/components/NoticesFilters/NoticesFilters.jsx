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
import { CitySelect } from '../CitySelect/CitySelect.jsx';

const NoticesFilters = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const sex = useSelector(selectSex);
  const species = useSelector(selectSpecies);
  const cities = useSelector(selectCities);

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
      byPrice: '',
      byPopularity: '',
    },
  });

  const watchedCategory = useWatch({ control, name: 'category' });
  const watchedSex = useWatch({ control, name: 'sex' });
  const watchedSpecies = useWatch({ control, name: 'species' });
  const watchedCity = useWatch({ control, name: 'city' });
  const watchedSort = useWatch({ control, name: 'sort' });

  useEffect(() => {
    let byPrice = '';
    let byPopularity = '';

    if (watchedSort?.startsWith('popularity')) {
      byPopularity = watchedSort.split('-')[1];
    }
    if (watchedSort?.startsWith('price')) {
      byPrice = watchedSort.split('-')[1];
    }

    const newFilters = {
      ...(watchedCategory && { category: watchedCategory }),
      ...(watchedSex && { sex: watchedSex }),
      ...(watchedSpecies && { species: watchedSpecies }),
      ...(watchedCity && { locationId: watchedCity.value }),
      ...(byPopularity && { byPopularity }),
      ...(byPrice && { byPrice }),
    };

    if (Object.keys(newFilters).length > 0) {
      dispatch(setFilter(newFilters));
    }
  }, [
    watchedCategory,
    watchedSex,
    watchedSpecies,
    watchedCity,
    watchedSort,
    dispatch,
  ]);

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

  return (
    <form
      className='mt-10 py-5 px-8 bg-brand-light rounded-[30px] flex flex-col gap-3'
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <SearchField
        register={register}
        handleSubmit={handleSubmit}
        watch={watch}
        reset={handleSearchClear}
      />
      <div className='flex gap-2 w-full'>
        <label className='relative w-1/2'>
          <select
            className='p-3 pr-8 w-full  rounded-[30px] border-none outline-none bg-text-white appearance-none '
            {...register('category')}
          >
            <option value=''>Category</option>
            {categories.map(category => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
          <svg
            className='fill-text-dark top-3 right-3 absolute stroke-transparent -rotate-90 md:w-6 md:h-6'
            width={18}
            height={18}
          >
            <use href={`${sprite}#icon-arrow-small`}></use>
          </svg>
        </label>
        <label className='relative w-1/2'>
          <select
            className='p-3 pr-8 w-full rounded-[30px] border-none outline-none bg-text-white appearance-none '
            {...register('sex')}
          >
            <option value=''>By Gender</option>
            {sex.map(s => (
              <option key={s} value={s}>
                {s.charAt(0).toUpperCase() + s.slice(1)}
              </option>
            ))}
          </select>
          <svg
            className='fill-text-dark top-3 right-3 absolute stroke-transparent -rotate-90 md:w-6 md:h-6'
            width={18}
            height={18}
          >
            <use href={`${sprite}#icon-arrow-small`}></use>
          </svg>
        </label>
      </div>
      <label className='relative'>
        <select
          className='p-3 pr-8 w-full text-sm rounded-[30px] border border-transparent focus:border-brand hover:border-brand outline-none bg-text-white appearance-none'
          {...register('species')}
        >
          <option value='' className=' text-sm'>
            Type
          </option>
          {species.map(sp => (
            <option key={sp} value={sp}>
              {sp.charAt(0).toUpperCase() + sp.slice(1)}
            </option>
          ))}
        </select>
        <svg
          className='fill-text-dark top-3 right-3 absolute stroke-transparent -rotate-90 md:w-6 md:h-6'
          width={18}
          height={18}
        >
          <use href={`${sprite}#icon-arrow-small`}></use>
        </svg>
      </label>
      <CitySelect name={'city'} control={control} cities={cities} />
      <div className='flex flex-wrap'>
        <label>
          <input type='radio' {...register('sort')} value='popularity-false' />
          Popular
        </label>
        <label>
          <input type='radio' {...register('sort')} value='popularity-true' />
          Unpopular
        </label>
        <label>
          <input type='radio' {...register('sort')} value='price-false' />
          Cheap
        </label>
        <label>
          <input type='radio' {...register('sort')} value='price-true' />
          Expensive
        </label>
      </div>
      <button onClick={handleReset}>Reset Filters</button>
    </form>
  );
};

export default NoticesFilters;
