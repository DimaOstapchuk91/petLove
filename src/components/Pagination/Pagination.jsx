import { useDispatch } from 'react-redux';
import sprite from '../../assets/sprite.svg';
import useMediaQuery from '../../hooks/useMediaQuery.js';

const Pagination = ({ page, totalPages, setPage }) => {
  const dispatch = useDispatch();
  const isMobile = useMediaQuery('(max-width: 767px)');

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

    if (isMobile) {
      if (totalPages <= 3) {
        for (let i = 1; i <= totalPages; i++) pages.push(i);
      } else if (page >= totalPages - 1) {
        pages.push('...', totalPages - 1, totalPages);
      } else {
        pages.push(page, page + 1, '...');
      }
    } else {
      if (totalPages <= 4) {
        for (let i = 1; i <= totalPages; i++) pages.push(i);
      } else if (page >= totalPages - 2) {
        pages.push('...', totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(page, page + 1, page + 2, '...');
      }
    }

    return pages;
  };

  return (
    <div className='flex items-center justify-between md:justify-center md:gap-6'>
      <div className='flex gap-1.5 md:gap-2'>
        <button
          className='group flex py-2.5 px-1.5 border border-inputs disabled:border-disabled rounded-full'
          onClick={handleStartPage}
          disabled={page === 1}
        >
          <svg
            className='fill-text-dark group-disabled:opacity-[0.5] stroke-transparent -mr-1.5 md:w-6 md:h-6 md:-mr-2'
            width={20}
            height={20}
          >
            <use href={`${sprite}#icon-arrow-small`}></use>
          </svg>
          <svg
            className='fill-text-dark group-disabled:opacity-[0.5] stroke-transparent -ml-1.5 md:w-6 md:h-6 md:-ml-2'
            width={20}
            height={20}
          >
            <use href={`${sprite}#icon-arrow-small`}></use>
          </svg>
        </button>
        <button
          className='group p-2.5 border disabled:border-disabled border-inputs rounded-full '
          onClick={handlePrevPage}
          disabled={page === 1}
        >
          <svg
            className='fill-text-dark group-disabled:opacity-[0.5] stroke-transparent md:w-6 md:h-6'
            width={20}
            height={20}
          >
            <use href={`${sprite}#icon-arrow-small`}></use>
          </svg>
        </button>
      </div>

      <ul className='flex gap-2.5'>
        {getVisiblePages().map((pageNum, index) => (
          <li key={index}>
            <button
              key={pageNum}
              onClick={() => handlePageClick(pageNum)}
              className={
                pageNum === page
                  ? 'p-2.5 w-10 flex justify-center items-center rounded-full bg-brand text-text-white font-bold text-sm leading-[18px] md:w-11 md:h-11 md:text-lg '
                  : 'p-2.5 w-10 flex justify-center items-center border border-disabled rounded-full font-bold text-sm leading-[18px] md:w-11 md:h-11 md:text-lg md:leading-[22px]'
              }
            >
              {pageNum}
            </button>
          </li>
        ))}
      </ul>

      <div className='flex gap-1.5 md:gap-2'>
        <button
          className='group p-2.5 border border-inputs disabled:border-disabled rounded-full'
          onClick={handleNextPage}
          disabled={page === totalPages}
        >
          <svg
            className='fill-text-dark group-disabled:opacity-[0.5] stroke-transparent rotate-180 md:w-6 md:h-6'
            width={20}
            height={20}
          >
            <use href={`${sprite}#icon-arrow-small`}></use>
          </svg>
        </button>
        <button
          className='group flex py-2.5 px-1.5 border disabled:border-disabled border-inputs rounded-full'
          onClick={handleEndPage}
          disabled={page === totalPages}
        >
          <svg
            className='fill-text-dark group-disabled:opacity-[0.5] stroke-transparent rotate-180 -mr-1.5 md:w-6 md:h-6 md:-mr-2'
            width={20}
            height={20}
          >
            <use href={`${sprite}#icon-arrow-small`}></use>
          </svg>
          <svg
            className='fill-text-dark group-disabled:opacity-[0.5] stroke-transparent rotate-180 -ml-1.5 md:w-6 md:h-6 md:-ml-2'
            width={20}
            height={20}
          >
            <use href={`${sprite}#icon-arrow-small`}></use>
          </svg>
        </button>
      </div>
    </div>
  );
};
export default Pagination;
