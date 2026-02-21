import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Socials from './pages/Socials';

// --- IMPORT YOUR NEW POPUP HERE ---
// (Make sure the path matches where you saved the file!)
import ResourcesPopup from '<div className="" />
<components></components>/ResourcesPopup'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/socials" element={<Socials />} />
      </Routes>

      {/* --- ADD THE POPUP HERE SO IT SHOWS ON EVERY PAGE --- */}
      <ResourcesPopup />
      
    </Router>
  );
}

export default App;