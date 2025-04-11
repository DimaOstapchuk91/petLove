import { useSelector } from 'react-redux';
import { selectNotices } from '../../redux/notices/selectors.js';
import NoticesItem from '../NoticesItem/NoticesItem.jsx';

const NoticesList = () => {
  const dataNotices = useSelector(selectNotices);

  return (
    <ul>
      {dataNotices.map(item => (
        <NoticesItem key={item._id} dataItem={item} />
      ))}
    </ul>
  );
};
export default NoticesList;
