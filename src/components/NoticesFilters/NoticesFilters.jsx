import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
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

  const { register, handleSubmit, watch, setValue } = useForm({
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

  const handleFormSubmit = data => {
    Object.entries(data).forEach(([key, value]) => {
      if (value) {
        dispatch(setFilter({ key, value }));
      }
    });
  };

  const handleReset = () => {
    dispatch(resetFilters());
  };

  return (
    <div className='filters'>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <SearchField
          value={watch('keyword')}
          onChange={e => setValue('keyword', e.target.value)}
        />
        <Select
          {...register('category')}
          options={categories.map(category => ({
            value: category._id,
            label: category.name,
          }))}
          placeholder='Category'
        />
        <Select
          {...register('sex')}
          options={sex.map(s => ({ value: s._id, label: s.name }))}
          placeholder='By gender'
        />
        <Select
          {...register('species')}
          options={species.map(species => ({
            value: species._id,
            label: species.name,
          }))}
          placeholder='By type'
        />
        <Select
          {...register('city')}
          options={cities.map(city => ({
            value: city._id,
            label: `${city.cityEn}, ${city.stateEn}`,
          }))}
          placeholder='Location'
        />
        <div className='sort-options'>
          <label>
            <input type='radio' {...register('byPopularity')} value='asc' />
            Popular
          </label>
          <label>
            <input type='radio' {...register('byPopularity')} value='desc' />
            Unpopular
          </label>
          <label>
            <input type='radio' {...register('byPrice')} value='asc' />
            Cheap
          </label>
          <label>
            <input type='radio' {...register('byPrice')} value='desc' />
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
