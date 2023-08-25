import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import EmployeesPage from './pages/EmployeesPage';

function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<EmployeesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
