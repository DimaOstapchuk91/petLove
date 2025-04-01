import { Suspense } from 'react';
import Header from '../Header/Header.jsx';
import { Toaster } from 'react-hot-toast';
import Loader from '../Loader/Loader.jsx';

const Layout = ({ children }) => {
  const isLoader = false;
  return (
    <main>
      <Header />
      {isLoader ? <Loader /> : <Suspense fallback={null}>{children}</Suspense>}
      <Toaster />
    </main>
  );
};
export default Layout;
