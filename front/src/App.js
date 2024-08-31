import logo from './logo.svg';
import './App.css';
import { Global } from '@emotion/react';
import { reset } from './styles/common';
import ClickTogglePage from './pages/ClickTogglePage/ClickTogglePage';

function App() {
  return (
    <>
    <Global styles={reset} />
    <ClickTogglePage />
    </>
  );
}

export default App;
