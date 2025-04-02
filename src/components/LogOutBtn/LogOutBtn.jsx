import { useDispatch } from 'react-redux';
import { logoutUser } from '../../redux/user/operations.js';

const LogOutBtn = () => {
  const dispatch = useDispatch();

  const hendleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <button type='button' onClick={hendleLogout}>
      LOG OUT
    </button>
  );
};
export default LogOutBtn;
