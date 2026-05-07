import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashbooard';
import ProjectDetail from './pages/ProjectDetail';

function App() {
  return (
    <Routes>

      <Route path="/" element={<Dashboard />} />

      <Route path="/proyecto/:id" element={<ProjectDetail />} />

    </Routes>
  );
}

export default App;
