import './styles/style.css';
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';
import Path from './components/Path';

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Path />
      </BrowserRouter>
    </>
  );
}

export default App;
