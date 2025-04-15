import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Controller, useForm, useWatch } from 'react-hook-form';
import { setFilter, resetFilters } from '../../redux/filters/slice.js';
import {
  getNoticesSearchCategories,
  getNoticesSearchSex,
  getNoticesSearchSpecies,
  getSearchCities,
} from '../../redux/filters/operations.js';
import Select from 'react-select';
import SearchField from '../SearchField/SearchField.jsx';
import {
  selectCategories,
  selectCities,
  selectSex,
  selectSpecies,
} from '../../redux/filters/selectors.js';

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
    <div className='filters'>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <SearchField
          register={register}
          handleSubmit={handleSubmit}
          watch={watch}
          reset={handleSearchClear}
        />
        <select {...register('category')}>
          <option value=''>Category</option>
          {categories.map(category => (
            <option key={category} value={category}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </option>
          ))}
        </select>
        <select {...register('sex')}>
          <option value=''>Gender</option>
          {sex.map(s => (
            <option key={s} value={s}>
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </option>
          ))}
        </select>
        <select {...register('species')}>
          <option value=''>Type</option>
          {species.map(sp => (
            <option key={sp} value={sp}>
              {sp.charAt(0).toUpperCase() + sp.slice(1)}
            </option>
          ))}
        </select>
        <Controller
          name='city'
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              options={cities.map(city => ({
                value: city._id,
                label: `${city.cityEn}, ${city.stateEn}`,
              }))}
              placeholder='Location'
            />
          )}
        />
        <div className='sort-options'>
          <label>
            <input
              type='radio'
              {...register('sort')}
              value='popularity-false'
            />
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
      </form>
      <button onClick={handleReset}>Reset Filters</button>
    </div>
  );
};

export default NoticesFilters;
