import { useDispatch, useSelector } from 'react-redux';
import NoticesFilters from '../../components/NoticesFilters/NoticesFilters.jsx';
import NoticesList from '../../components/NoticesList/NoticesList.jsx';
import Pagination from '../../components/Pagination/Pagination.jsx';
import Title from '../../components/Title/Title.jsx';
import { selectTotalPages } from '../../redux/notices/selectors.js';
import { getAllNoticesData } from '../../redux/notices/operations.js';
import { useEffect } from 'react';
import { selectFilters } from '../../redux/filters/selectors.js';
import { setFiltersPage } from '../../redux/filters/slice.js';

const NoticesPage = () => {
  const dispatch = useDispatch();
  const totalPages = useSelector(selectTotalPages);
  const filters = useSelector(selectFilters);
  console.log('filters', filters);

  useEffect(() => {
    console.log('test1 use effect');
    dispatch(getAllNoticesData(filters));
  }, [dispatch, filters]);

  return (
    <section className='container'>
      <div>
        <Title titleText={'Find your favorite pet'} />
        <NoticesFilters filters={filters} />
        <NoticesList />
        <Pagination
          page={filters.page}
          totalPages={totalPages}
          setPage={setFiltersPage}
        />
      </div>
    </section>
  );
};
export default NoticesPage;
