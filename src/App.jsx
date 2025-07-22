import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AgendaForm from './components/AgendaForm';
import AgendaPage from './pages/AgendaPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tambah-agenda" element={<AgendaForm />} /> {/* ⬅️ Tambahkan ini */}
          <Route path="/agenda" element={<AgendaPage />} />

      </Routes>
    </Router>
  );
}
export default App;
