import AuthIllustration from '../../components/AuthIllustration/AuthIllustration.jsx';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm.jsx';

const RegistrationPage = () => {
  return (
    <section className='container'>
      <div className='flex flex-col py-7 gap-2.5'>
        <AuthIllustration />
        <RegistrationForm />
      </div>
    </section>
  );
};
export default RegistrationPage;
