import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import FeaturePage from './pages/FeaturePage';
import EmployeesPage from './pages/EmployeesPage';

function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<FeaturePage />} />
        <Route path="/schedule" element={<EmployeesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
