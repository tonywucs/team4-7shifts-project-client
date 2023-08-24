import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import FeaturePage from './pages/FeaturePage/FeaturePage';

function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<FeaturePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
