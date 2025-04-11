import { useEffect, useState } from 'react';
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
  const [search, setSearch] = useState('');
  const pageNumber = useSelector(selectNewsPage);

  useEffect(() => {
    dispatch(getNews({ page: pageNumber, keyword: search }));
  }, [dispatch, pageNumber, search]);

  const totalPages = useSelector(selectNewsTotalPages);

  return (
    <section className='container'>
      <div className='pt-15 pb-20 md:pt-21.5 xl:pt-24'>
        <div className='flex flex-col gap-5 mb-6 md:flex-row md:items-center md:justify-between md:gap-0 md:mb-11 xl:mb-15'>
          <Title titleText={'News'} />
          <SearchField setSearch={setSearch} />
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
