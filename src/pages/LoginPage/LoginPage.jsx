import AuthIllustration from '../../components/AuthIllustration/AuthIllustration.jsx';
import LoginForm from '../../components/LoginForm/LoginForm.jsx';

const LoginPage = () => {
  return (
    <section className='container'>
      <div className='flex flex-col gap-2.5 py-5'>
        <AuthIllustration isPet={'dog'} />
        <LoginForm />
      </div>
    </section>
  );
};
export default LoginPage;
