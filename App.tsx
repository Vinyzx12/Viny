import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './sections/Navbar';
import Footer from './sections/Footer';
import Home from './pages/Home';
import Apostilas from './pages/Apostilas';
import Scripts from './pages/Scripts';
import Tutoriais from './pages/Tutoriais';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white overflow-x-hidden">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/apostilas" element={<Apostilas />} />
            <Route path="/scripts" element={<Scripts />} />
            <Route path="/tutoriais" element={<Tutoriais />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
