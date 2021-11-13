import Dashboard from './components/Dashboard';
import './styles/style.css';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import QuizHome from './components/QuizHome';

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Dashboard />} />
          <Route path="/quiz/:category/:level" element={<QuizHome />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
