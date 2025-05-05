import { useState } from 'react';
import NoticesItem from '../NoticesItem/NoticesItem.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserCurrentFull } from '../../redux/user/selectors.js';
import { removeFavoritesById } from '../../redux/user/slice.js';

const MyNotices = () => {
  const dispatch = useDispatch();
  const userCurrentFull = useSelector(selectUserCurrentFull);
  console.log('usercurrentdata', userCurrentFull);

  const { noticesFavorites, noticesViewed } = userCurrentFull || {};
  const [activeTab, setActiveTab] = useState('favorites');

  const handleRemove = async id => {
    dispatch(removeFavoritesById({ id }));
  };
  return (
    <div className='xl:mt-10'>
      <div className='flex gap-2.5 mb-5 md:gap-2'>
        <button
          onClick={() => setActiveTab('favorites')}
          className={
            activeTab === 'favorites'
              ? 'p-3 bg-brand rounded-[30px] text-text-white !text-sm font-medium leading-4 -tracking-[0.42px] md:p-3.5 md:!text-base md:leading-5 md:-tracking-[0.48px]'
              : 'p-3 bg-text-white rounded-[30px] text-text-dark !text-sm font-medium leading-4 -tracking-[0.42px] cursor-pointer hover:bg-hover-light transition-all duration-200 md:p-3.5 md:!text-base md:leading-5 md:-tracking-[0.48px]'
          }
        >
          My favorites pets
        </button>
        <button
          onClick={() => setActiveTab('viewed')}
          className={
            activeTab === 'viewed'
              ? 'py-3 px-10 bg-brand rounded-[30px] text-text-white !text-sm font-medium leading-4 -tracking-[0.42px] md:py-3.5 md:px-11 md:!text-base md:leading-5 md:-tracking-[0.48px]'
              : 'py-3 px-10 bg-text-white rounded-[30px] text-text-dark !text-sm font-medium leading-4 -tracking-[0.42px] cursor-pointer hover:bg-hover-light transition-all duration-200 md:py-3.5 md:px-11 md:!text-base md:leading-5 md:-tracking-[0.48px]'
          }
        >
          Viewed
        </button>
      </div>

      <ul className='flex flex-col gap-5 md:flex-row md:flex-wrap xl:gap-6'>
        {(activeTab === 'favorites' ? noticesFavorites : noticesViewed)?.map(
          item => (
            <NoticesItem
              key={item._id}
              dataItem={item}
              profilePage={true}
              viewed={activeTab === 'viewed'}
              onRemove={
                activeTab === 'favorites'
                  ? () => handleRemove(item._id)
                  : undefined
              }
            />
          )
        )}
      </ul>
    </div>
  );
};
export default MyNotices;
