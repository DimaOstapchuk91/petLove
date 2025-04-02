import AuthIllustration from '../../components/AuthIllustration/AuthIllustration.jsx';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm.jsx';

const RegistrationPage = () => {
  return (
    <section className='container'>
      <div className='flex flex-col py-5 gap-2.5'>
        <AuthIllustration isPet={'cat'} />
        <RegistrationForm />
      </div>
    </section>
  );
};
export default RegistrationPage;
