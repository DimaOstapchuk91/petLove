import s from './UserNav.module.css';
// import sprite from '../../assets/sprite.svg';

const UserNav = () => {
  return (
    <div className={s.userInfo}>
      <button type='button' className={s.logoutBtn}>
        LOG OUT
      </button>

      <>
        <span className={s.iconBox}>
          {/* <svg className={s.userIcon} width='24' height='24'>
            <use href={`${sprite}#icon-user`}></use>
          </svg> */}
        </span>
        <p className={s.userName}>Anonimus</p>
      </>
    </div>
  );
};
export default UserNav;
