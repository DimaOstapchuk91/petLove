import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFriendsData } from '../../redux/friends/operations.js';
import { selectFriendsData } from '../../redux/friends/selectors.js';
import FriendsItem from '../FriendsItem/FriendsItem.jsx';

const FriendsList = () => {
  const dispatch = useDispatch();
  const friendsData = useSelector(selectFriendsData);

  console.log(friendsData);

  useEffect(() => {
    dispatch(getFriendsData());
  }, []);

  return (
    <ul className='flex flex-col gap-5 mt-10 md:flex-row md:flex-wrap xl:gap-y-7'>
      {friendsData.map(item => (
        <FriendsItem key={item._id} dataItem={item} />
      ))}
    </ul>
  );
};
export default FriendsList;
