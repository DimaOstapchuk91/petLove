import AuthIllustration from '../../components/AuthIllustration/AuthIllustration.jsx';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm.jsx';

const RegistrationPage = () => {
  return (
    <section className='container'>
      <div className='flex flex-col py-5 gap-2.5 md:py-8 md:gap-4 xl:flex-row xl:gap-8 xl:items-stretch '>
        <AuthIllustration isPet={'cat'} />
        <RegistrationForm />
      </div>
    </section>
  );
};
export default RegistrationPage;
