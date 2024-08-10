import logo from './logo.svg';
import './App.css';
import { Global } from '@emotion/react';
import { reset } from './styles/common';

function App() {
  return (
    <>
    <Global styles={reset} />
    </>
  );
}

export default App;
