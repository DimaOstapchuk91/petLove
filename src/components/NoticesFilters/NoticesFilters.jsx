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

  const { register, handleSubmit, watch, setValue, control, reset } = useForm({
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
  const watchedByPopularity = useWatch({ control, name: 'byPopularity' });
  const watchedByPrice = useWatch({ control, name: 'byPrice' });

  console.log(watchedByPopularity);

  useEffect(() => {
    console.log('watchedByPopularity', watchedByPopularity);
    if (watchedByPopularity) {
      setValue('byPrice', '');
      setValue('byPopularity', watchedByPopularity);
    }
    console.log('watchedByPrice', watchedByPrice);
    if (watchedByPrice) {
      setValue('byPopularity', '');
      setValue('byPrice', watchedByPrice);
    }

    const newFilters = {
      ...(watchedCategory && { category: watchedCategory }),
      ...(watchedSex && { sex: watchedSex }),
      ...(watchedSpecies && { species: watchedSpecies }),
      ...(watchedCity && { locationId: watchedCity.value }),
      ...(watchedByPopularity && { byPopularity: watchedByPopularity }),
      ...(watchedByPrice && { byPrice: watchedByPrice }),
    };

    console.log('New filters:', newFilters);

    if (Object.keys(newFilters).length > 0) {
      dispatch(setFilter(newFilters));
    }
  }, [
    watchedCategory,
    watchedSex,
    watchedSpecies,
    watchedCity,
    watchedByPopularity,
    watchedByPrice,
    setValue,
    dispatch,
  ]);

  const handleFormSubmit = data => {
    console.log(data);
  };

  const handleReset = () => {
    reset();
    dispatch(resetFilters());
  };

  return (
    <div className='filters'>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        {/* <SearchField
          value={watch('keyword')}
          onChange={e => setValue('keyword', e.target.value)}
        /> */}
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
            <input type='radio' {...register('byPopularity')} value='false' />
            Popular
          </label>
          <label>
            <input type='radio' {...register('byPopularity')} value='true' />
            Unpopular
          </label>
          <label>
            <input type='radio' {...register('byPrice')} value='false' />
            Cheap
          </label>
          <label>
            <input type='radio' {...register('byPrice')} value='true' />
            Expensive
          </label>
        </div>
        <button type='submit'>Apply Filters</button>
      </form>
      <button onClick={handleReset}>Reset Filters</button>
    </div>
  );
};

export default NoticesFilters;
