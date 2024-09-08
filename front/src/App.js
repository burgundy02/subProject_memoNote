import { Global } from '@emotion/react';
import { reset } from './styles/common';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import BackgroundPage from './pages/BackgroundPage/BackgroundPage';
import Startpage from './pages/Startpage/Startpage';
import RegisterMemoPage from './pages/RegisterMemoPage/RegisterMemoPage';

function App() {
  return (
    <>
      <Global styles={reset} />
      <BackgroundPage>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/memo/start' element={<Startpage />} />
          <Route path='/memo/add' element={<RegisterMemoPage />} />
        </Routes>
      </BackgroundPage>
    </>
  );
}

export default App;
