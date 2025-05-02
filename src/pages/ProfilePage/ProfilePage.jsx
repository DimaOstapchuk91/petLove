import MyNotices from '../../components/MyNotices/MyNotices.jsx';
import UserCard from '../../components/UserCard/UserCard.jsx';

const ProfilePage = () => {
  return (
    <section className='container'>
      <div className="pt-15 pb-20 md:pt-21.5 xl:pt-24'">
        <UserCard />
        <MyNotices />
      </div>
    </section>
  );
};
export default ProfilePage;
