import { useDispatch } from 'react-redux';
import { logoutUser } from '../../redux/user/operations.js';

const LogOutBtn = ({ className }) => {
  const dispatch = useDispatch();

  const hendleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <button className={className} type='button' onClick={hendleLogout}>
      LOG OUT
    </button>
  );
};
export default LogOutBtn;
