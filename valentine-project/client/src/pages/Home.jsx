import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import videoBg from '../assets/openingscreen.mp4';
import titleImg from '../assets/KhalilCraft.png'; 
import '../pagescss/Home.css';

// --- ASSETS ---
import char1 from '../assets/char1.png';
import char2 from '../assets/char2.png';
import char3 from '../assets/char3.png';
import hangerIcon from '../assets/hanger.png';

const API_URL = "https://nestjs-valentines-backened.onrender.com/guestbook";

function Home() {
  // --- CHARACTER STATE (Now uses Local Storage!) ---
  const [charIndex, setCharIndex] = useState(() => {
    // Check if we have a saved skin, otherwise default to 0
    const saved = localStorage.getItem('selectedSkin');
    return saved ? parseInt(saved) : 0;
  });

  const characters = [
    { img: char1, name: "Viltrumite Lil" },
    { img: char2, name: "lil Lil" },
    { img: char3, name: "MC Lil" }
  ];

  // --- GUESTBOOK STATE ---
  const [messages, setMessages] = useState([]);
  const [form, setForm] = useState({ name: "", message: "" });

  const fetchMessages = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      if (Array.isArray(data)) setMessages(data);
    } catch (error) { console.error("Error fetching messages:", error); }
  };

  useEffect(() => { fetchMessages(); }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.message) return;
    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setForm({ name: "", message: "" });
    fetchMessages();
  };

  // --- NEW: Cycle Character & Save to Memory ---
  const cycleCharacter = () => {
    setCharIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % characters.length;
      localStorage.setItem('selectedSkin', newIndex); // <--- SAVES IT
      return newIndex;
    });
  };

  return (
    <div className="home-container">
      <video className="video-bg" autoPlay loop muted playsInline>
        <source src={videoBg} type="video/mp4" />
      </video>
      <div className="video-overlay"></div>
      
      {/* LEFT SIDE: GUESTBOOK */}
      <div className="guestbook-sidebar">
        <h3>Server Chat</h3>
        <div className="chat-box">
          {messages.map((msg, i) => (
            <div key={i} className="chat-msg">
              <span className="chat-name">&lt;{msg.name}&gt;</span> {msg.message}
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="chat-form">
          <input className="chat-input" placeholder="Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} maxLength={15} />
          <input className="chat-input" placeholder="Message..." value={form.message} onChange={e => setForm({...form, message: e.target.value})} maxLength={50} />
          <button type="submit" className="mc-btn-small">Send</button>
        </form>
      </div>

      {/* CENTER: MENU */}
      <div className="mc-content">
        <img src={titleImg} alt="KhalilCraft" className="mc-title-img" />
        <div className="menu-grid">
          <Link to="/about" className="mc-btn">Information</Link>
          <Link to="/gallery" className="mc-btn">Gallery</Link>
          <Link to="/portfolio" className="mc-btn">Portfolio</Link>
          <Link to="/socials" className="mc-btn">Socials</Link>
        </div>
      </div>

      {/* RIGHT SIDE: CHARACTER */}
      <div className="character-display">
        <div className="char-nametag">{characters[charIndex].name}</div>
        <img src={characters[charIndex].img} alt="Character" className="char-skin" />
        <button className="hanger-btn" onClick={cycleCharacter}>
          <img src={hangerIcon} alt="Switch" />
        </button>
      </div>
    </div>
  );
}

export default Home;