import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNews } from '../../redux/news/operations.js';
import Title from '../../components/Title/Title.jsx';
import SearchField from '../../components/SearchField/SearchField.jsx';
import NewsList from '../../components/NewsList/NewsList.jsx';
import Pagination from '../../components/Pagination/Pagination.jsx';
import {
  selectNewsPage,
  selectNewsTotalPages,
} from '../../redux/news/selectors.js';
import { setNewsPage } from '../../redux/news/slice.js';

const NewsPage = () => {
  const dispatch = useDispatch();
  const pageNumber = useSelector(selectNewsPage);

  useEffect(() => {
    dispatch(getNews({ page: pageNumber }));
  }, [pageNumber]);

  const totalPages = useSelector(selectNewsTotalPages);

  return (
    <section className='container'>
      <div>
        <div>
          <Title />
          <SearchField />
        </div>
        <NewsList />
        <Pagination
          page={pageNumber}
          totalPages={totalPages}
          setPage={setNewsPage}
        />
      </div>
    </section>
  );
};
export default NewsPage;
