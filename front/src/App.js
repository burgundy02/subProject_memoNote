import { Global } from '@emotion/react';
import { reset } from './styles/common';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import QuestionPage from './pages/QuestionPage/QuestionPage';
import BackgroundPage from './pages/BackgroundPage/BackgroundPage';

function App() {
  return (
    <>
      <Global styles={reset} />
      <BackgroundPage>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/question' element={<QuestionPage />} />
        </Routes>
      </BackgroundPage>
    </>
  );
}

export default App;
