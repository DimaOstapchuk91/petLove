import { useSelector } from 'react-redux';
import { selectDataNews } from '../../redux/news/selectors.js';
import NewsItem from '../NewsItem/NewsItem.jsx';

const NewsList = () => {
  const newsData = useSelector(selectDataNews);
  console.log(newsData);
  return (
    <ul className='flex flex-col gap-6 mb-11 md:flex-row md:flex-wrap'>
      {newsData.map(item => (
        <NewsItem key={item._id} item={item} />
      ))}
    </ul>
  );
};
export default NewsList;
