import { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import './App.css';

// Import your 4 photos from the assets folder
import herBefore from './assets/her1.png';
import meBefore from './assets/me1.png';
import usAfter1 from './assets/us1.png';
import usAfter2 from './assets/us2.png';

const API_URL = "https://nestjs-valentines-backened.onrender.com/guestbook";

function App() {
  const [accepted, setAccepted] = useState(false);
  const [messages, setMessages] = useState([]);
  const [form, setForm] = useState({ name: "", message: "" });
  const [noStyle, setNoStyle] = useState({});

  const fetchMessages = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      if (Array.isArray(data)) setMessages(data);
    } catch (error) {
      console.error("Error fetching (Check API_URL and Port 3000 visibility):", error);
    }
  };

  useEffect(() => { fetchMessages(); }, []);

  const handleYes = () => {
    setAccepted(true);
    confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setForm({ name: "", message: "" });
    fetchMessages();
  };

  const moveNo = () => {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    setNoStyle({ transform: `translate(${x}px, ${y}px)` });
  };

  return (
    <div className="main-wrapper">
      {/* Side Photos Container */}
      <div className="side-photos">
        <img 
          src={accepted ? usAfter1 : herBefore} 
          className={`floating-photo left-p ${accepted ? 'success-zoom' : ''}`} 
          alt="left-side" 
        />
        <img 
          src={accepted ? usAfter2 : meBefore} 
          className={`floating-photo right-p ${accepted ? 'success-zoom' : ''}`} 
          alt="right-side" 
        />
      </div>

      <div className="app-container">
        <div className="hero">
          <h1>{accepted ? "YAY! ❤️" : "Alessandra Will U Be My Valentine?"}</h1>
          {!accepted ? (
            <>
              <div className="buttons">
                <button className="yes-btn" onClick={handleYes}>YES</button>
                <button className="no-btn" style={noStyle} onMouseEnter={moveNo}>No</button>
              </div>
              <p className="pleading-text">Please don't press No! 🥺</p>
            </>
          ) : (
            <div className="success-emoji">👩‍❤️‍👨</div>
          )}
        </div>

        <hr style={{ opacity: 0.3, margin: "20px 0" }} />

        <div className="guestbook">
          <h2>Guestbook</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input 
                placeholder="Name" 
                value={form.name} 
                onChange={e => setForm({...form, name: e.target.value})} 
                required 
              />
              <input 
                placeholder="Message" 
                value={form.message} 
                onChange={e => setForm({...form, message: e.target.value})} 
                required 
              />
            </div>
            <button type="submit" className="sign-btn">Send Message</button>
          </form>

          <ul className="message-list">
            {messages.map(msg => (
              <li key={msg.id} className="message-card">
                <div><strong>{msg.name}:</strong> {msg.message}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;