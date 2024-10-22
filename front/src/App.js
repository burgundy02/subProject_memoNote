import { Global } from '@emotion/react';
import { reset } from './styles/common';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import BackgroundPage from './pages/BackgroundPage/BackgroundPage';
import Startpage from './pages/Startpage/Startpage';
import AddPage from './pages/AddPage/AddPage';
import SearchMainPage from './pages/SearchMainPage/SearchMainPage';
import SignPage from './pages/SignPage/SignPage';

function App() {
  return (
    <>
      <Global styles={reset} />
      <BackgroundPage>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/memo/start' element={<Startpage />} />
          <Route path='/memo/add' element={<AddPage />} />
          <Route path='/memo/search' element={<SearchMainPage/>} />
          
          <Route path='/auth/sign' element={<SignPage />} />


          <Route path='*' element={<h1>Not Found</h1>} />
        </Routes>
      </BackgroundPage>
    </>
  );
}

export default App;
