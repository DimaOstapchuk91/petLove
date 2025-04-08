import { useDispatch } from 'react-redux';

const Pagination = ({ page, totalPages, setPage }) => {
  const dispatch = useDispatch();

  const handleNextPage = () => {
    dispatch(setPage(page + 1));
  };

  const handlePrevPage = () => {
    dispatch(setPage(page - 1));
  };

  const handleStartPage = () => {
    if (page !== 1) {
      dispatch(setPage(1));
    }
  };

  const handleEndPage = () => {
    if (page !== 1) {
      dispatch(setPage(totalPages));
    }
  };

  const handlePageClick = newPage => {
    if (newPage !== page) {
      dispatch(setPage(newPage));
    }
  };

  const getVisiblePages = () => {
    const pages = [];

    if (totalPages <= 4) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else if (page >= totalPages - 2) {
      pages.push('...', totalPages - 2, totalPages - 1, totalPages);
    } else {
      pages.push(page, page + 1, page + 2, '...');
    }

    return pages;
  };

  return (
    <div className=''>
      <button className='' onClick={handleStartPage} disabled={page === 1}>
        StartPrev
      </button>
      <button className='' onClick={handlePrevPage} disabled={page === 1}>
        Prev
      </button>

      <ul className=''>
        {getVisiblePages().map((pageNum, index) => (
          <li key={index}>
            <button
              key={pageNum}
              onClick={() => handlePageClick(pageNum)}
              className={pageNum === page ? '' : ''}
            >
              {pageNum}
            </button>
          </li>
        ))}
      </ul>

      <button
        className=''
        onClick={handleNextPage}
        disabled={page === totalPages}
      >
        Next
      </button>
      <button
        className=''
        onClick={handleEndPage}
        disabled={page === totalPages}
      >
        NextEnd
      </button>
    </div>
  );
};
export default Pagination;
