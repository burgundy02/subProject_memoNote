import { Global } from '@emotion/react';
import { reset } from './styles/common';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import QuestionPage from './pages/QuestionPage/QuestionPage';

function App() {
  return (
    <>
      <Global styles={reset} />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/question' element={<QuestionPage />} />
      </Routes>
    
    </>
  );
}

export default App;
