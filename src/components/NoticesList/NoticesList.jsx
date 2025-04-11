import { useSelector } from 'react-redux';
import { selectNotices } from '../../redux/notices/selectors.js';
import NoticesItem from '../NoticesItem/NoticesItem.jsx';

const NoticesList = () => {
  const dataNotices = useSelector(selectNotices);

  return (
    <ul className='flex flex-col gap-5 mb-11 md:flex-row md:flex-wrap md:mb-15 xl:gap-x-8 xl:gap-y-10'>
      {dataNotices.map(item => (
        <NoticesItem key={item._id} dataItem={item} />
      ))}
    </ul>
  );
};
export default NoticesList;
