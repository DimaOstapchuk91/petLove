import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import sprite from '../../assets/sprite.svg';
import UniversalSelect from '../UniversalSelect/UniversalSelect.jsx';
import { selectSpecies } from '../../redux/filters/selectors.js';
import { getNoticesSearchSpecies } from '../../redux/filters/operations.js';
import 'react-datepicker/dist/react-datepicker.css';
import './calendar.css';
import DatePicker from 'react-datepicker';

const AddPetForm = () => {
  const dispatch = useDispatch();
  const speciesOption = useSelector(selectSpecies);
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    dispatch(getNoticesSearchSpecies());
  }, [dispatch]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
  } = useForm({
    // resolver: yupResolver(orderEditUserSchema),
    defaultValues: {
      name: '',
      title: '',
      imgURL: '',
      species: '',
      birthday: '',
      sex: '',
    },
  });

  const onSubmit = data => {
    console.log('dataPet', data);
    dispatch();
  };

  const handlePreviewAvatar = () => {
    const avatarUrl = watch('imgURL');

    const urlPattern = /^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/;
    if (urlPattern.test(avatarUrl)) {
      setPreview(avatarUrl);
    } else {
      setPreview(null);

      alert('Please enter a valid image URL');
    }
  };

  return (
    <div className='w-full max-w-[335px] py-10 px-5 rounded-[30px] bg-text-white md:w-[480px] md:max-w-[480px] md:p-12.5'>
      <h2 className='text-[28px] font-bold mb-6 leading-7 -tracking-[0.84px]'>
        Add my pet /{' '}
        <span className='text-sm leading-4.5 text-text-gray-light tracking-normal'>
          Personal details
        </span>
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
        <ul className='flex justify-center gap-4 mb-6'>
          <li>
            <label className='relative cursor-pointer'>
              <input
                type='radio'
                value='male'
                {...register('sex')}
                className='sr-only peer'
              />
              <div className='group w-8 h-8 rounded-full flex items-center justify-center bg-[#F43F5E1A] peer-checked:bg-[#F43F5E] transition-all'>
                <svg className='w-6 h-6 fill-transparent stroke-[#F43F5E] group peer-checked:stroke-white'>
                  <use href={`${sprite}#icon-male`} />
                </svg>
              </div>
            </label>
          </li>
          <li>
            <label className='relative cursor-pointer'>
              <input
                type='radio'
                value='female'
                {...register('sex')}
                className='sr-only peer'
              />
              <div className='w-12 h-12 rounded-full border border-brand flex items-center justify-center peer-checked:bg-brand peer-checked:fill-white transition-all'>
                <svg className='w-6 h-6 fill-brand peer-checked:fill-white'>
                  <use href={`${sprite}#icon-male`} />
                </svg>
              </div>
            </label>
          </li>
          <li>
            <label className='relative cursor-pointer'>
              <input
                type='radio'
                value='unknown'
                {...register('sex')}
                className='sr-only peer'
              />
              <div className='w-12 h-12 rounded-full border border-brand flex items-center justify-center peer-checked:bg-brand peer-checked:fill-white transition-all'>
                <svg className='w-6 h-6 fill-brand peer-checked:fill-white'>
                  <use href={`${sprite}#icon-unknown`} />
                </svg>
              </div>
            </label>
          </li>
        </ul>
        {errors.sex && (
          <p className='text-red-500 text-sm text-center -mt-4 mb-2'>
            {errors.sex.message}
          </p>
        )}
        <div className='p-[27px] mx-auto rounded-full bg-brand-light max-w-[94px] mb-3'>
          <svg className='fill-brand stroke-transparent' width='40' height='40'>
            <use href={`${sprite}#icon-paw`}></use>
          </svg>
        </div>

        <div className='flex justify-between gap-2 mb-2.5 md:mb-5'>
          <label className='block max-w-[161px] text-xs font-medium leading-4 -tracking-[0.24px] md:w-[226px] md:max-w-[226px] md:text-sm md:leading-4.5 md:-tracking-[0.28px]'>
            <input
              type='text'
              placeholder='Enter URL'
              {...register('imgURL')}
              className='w-full truncate block p-3 pr-9 border border-brand rounded-[30px] outline-none md:pr-5'
            />
            {errors.imgURL && (
              <p className='text-red-500 text-sm'>{errors.imgURL.message}</p>
            )}
          </label>

          <button
            type='button'
            className='flex items-center gap-2 cursor-pointer p-3 rounded-[30px] bg-brand-light !text-xs leading-4 -tracking-[0.24px] font-medium transition-all duration-200 hover:bg-hover-light md:!text-sm md:leading-4.5 md:-tracking-[0.28px] md:px-4 '
            onClick={handlePreviewAvatar}
          >
            Upload photo
            <svg
              className='fill-transparent stroke-brand'
              width='18'
              height='18'
            >
              <use href={`${sprite}#icon-upload`}></use>
            </svg>
          </button>
        </div>

        <ul className='flex flex-col gap-2.5 mb-5 md:gap-3.5 md:mb-10'>
          <li>
            <label className='block text-sm font-medium leading-4.5 -tracking-[0.42]'>
              <input
                type='text'
                placeholder='Title'
                {...register('title')}
                className='w-full p-3 border border-brand rounded-[30px] outline-none'
              />
              {errors.title && (
                <p className='text-red-500 text-sm'>{errors.title.message}</p>
              )}
            </label>
          </li>

          <li>
            <label className='block text-sm font-medium leading-4.5 -tracking-[0.42]'>
              <input
                type='text'
                placeholder="Pet's Name"
                {...register('name')}
                className='w-full p-3 border border-brand rounded-[30px] outline-none'
              />
              {errors.name && (
                <p className='text-red-500 text-sm'>{errors.name.message}</p>
              )}
            </label>
          </li>

          <div className='flex justify-between'>
            <li className='w-full max-w-[144px] '>
              <label className='block !text-sm font-medium leading-4.5 -tracking-[0.42]'>
                <Controller
                  control={control}
                  name='birthday'
                  rules={{ required: 'Date is required' }}
                  render={({ field }) => (
                    <DatePicker
                      {...field}
                      selected={field.value}
                      onChange={date => field.onChange(date)}
                      placeholderText='00.00.0000'
                      className='w-full p-3 !text-sm border border-brand rounded-[30px] outline-none'
                      dateFormat='dd.MM.yyyy'
                      showPopperArrow={false}
                      calendarStartDay={1}
                      maxDate={new Date()}
                    />
                  )}
                />
                {errors.birthday && (
                  <p className='text-red-500 text-sm absolute -bottom-5 left-0'>
                    {errors.birthday.message}
                  </p>
                )}
              </label>
            </li>
            <li className='w-full max-w-[143px]'>
              <UniversalSelect
                name={'species'}
                control={control}
                baseSelect={speciesOption}
                iconName={'icon-arrow-small'}
                placeholder={'Type of pet'}
                addPetForm={true}
                wrapperClassName={
                  'w-full max-w-[143px] md:max-w-[170px] xl:max-w-[190px]'
                }
              />
            </li>
          </div>
        </ul>

        <button
          type='submit'
          className='w-full p-3 bg-brand hover:bg-hover rounded-[30px] !text-sm font-bold text-text-white transition-all duration-200 leading-4.5 -tracking-[0.42px] cursor-pointer md:p-4 md:!text-base md:leading-5 md:-tracking-[0.48px]'
        >
          Save
        </button>
      </form>
    </div>
  );
};
export default AddPetForm;
