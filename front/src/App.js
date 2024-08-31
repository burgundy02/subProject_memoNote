import { Global } from '@emotion/react';
import { reset } from './styles/common';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import QuestionPage from './pages/QuestionPage/QuestionPage';
import MainLayoutPage from './pages/MainLayoutPage/MainLayoutPage';

function App() {
  return (
    <>
      <Global styles={reset} />
      <MainLayoutPage>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/question' element={<QuestionPage />} />
        </Routes>
      </MainLayoutPage>
    
    </>
  );
}

export default App;
