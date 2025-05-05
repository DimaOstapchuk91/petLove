import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';
import NewsPage from './pages/NewsPage/NewsPage.jsx';
import NoticesPage from './pages/NoticesPage/NoticesPage.jsx';
import OurFriendsPage from './pages/OurFriendsPage/OurFriendsPage.jsx';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage.jsx';
import LoginPage from './pages/LoginPage/LoginPage.jsx';
import ProfilePage from './pages/ProfilePage/ProfilePage.jsx';
import AddPetPage from './pages/AddPetPage/AddPetPage.jsx';
import useAuthToken from './redux/service/configApi.js';
import StartScreen from './components/StartScreen/StartScreen.jsx';

function App() {
  useAuthToken();
  return (
    <>
      <Routes>
        <Route path='/' element={<StartScreen />} />
        <Route element={<Layout />}>
          <Route path='/home' element={<HomePage />} />
          <Route path='/news' element={<NewsPage />} />
          <Route path='/notices' element={<NoticesPage />} />
          <Route path='/friends' element={<OurFriendsPage />} />
          <Route path='/register' element={<RegistrationPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/add-pet' element={<AddPetPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
