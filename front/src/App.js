import { Global } from '@emotion/react';
import { reset } from './styles/common';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import QuestionPage from './pages/QuestionPage/QuestionPage';
import BackgroundPage from './pages/BackgroundPage/BackgroundPage';
import SearchMainPage from './pages/SearchMainPage/SearchMainPage';

function App() {
  return (
    <>
      <Global styles={reset} />
      <BackgroundPage>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/question' element={<QuestionPage />} />
          <Route path='/search' element={< SearchMainPage />} />
        </Routes>
      </BackgroundPage>
    </>
  );
}

export default App;
