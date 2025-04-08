import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getNews } from '../../redux/news/operations.js';

const NewsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNews({}));
  }, []);

  return <div>NewsPage</div>;
};
export default NewsPage;
