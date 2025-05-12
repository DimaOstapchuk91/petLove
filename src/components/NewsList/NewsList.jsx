import { useSelector } from 'react-redux';
import { selectDataNews } from '../../redux/news/selectors.js';
import NewsItem from '../NewsItem/NewsItem.jsx';

const NewsList = () => {
  const newsData = useSelector(selectDataNews);

  return (
    <ul className='flex flex-col gap-6 mb-11 md:flex-row md:mb-15 md:flex-wrap md:gap-y-8 xl:gap-x-8.5 xl:gap-y-10'>
      {newsData?.map(item => (
        <NewsItem key={item._id} item={item} />
      ))}
    </ul>
  );
};
export default NewsList;
