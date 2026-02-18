import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; // Global Styles

// Pages
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Socials from './pages/Socials';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/guestbook" element={<Guestbook />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/socials" element={<Socials />} />
      </Routes>
    </Router>
  );
}

export default App;