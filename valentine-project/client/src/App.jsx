import { useState, useEffect } from 'react';
import './App.css';

// PASTE YOUR BACKEND URL HERE AFTER STARTING THE SERVER (Step 5)
const API_URL = "https://fuzzy-space-tribble-q7jqqq5pxg992xx44-3000.app.github.dev/guestbook";

function App() {
  const [accepted, setAccepted] = useState(false);
  const [messages, setMessages] = useState([]);
  const [form, setForm] = useState({ name: "", message: "" });
  const [noStyle, setNoStyle] = useState({});

  // Fetch Messages
  const fetchMessages = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      if(Array.isArray(data)) setMessages(data);
    } catch (error) {
      console.error("Error fetching (Check API_URL):", error);
    }
  };

  useEffect(() => { fetchMessages(); }, []);

  // Handle Submit (Post)
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

  // Handle Delete
  const handleDelete = async (id) => {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    fetchMessages();
  };

  // Run-away "No" button
  const moveNo = () => {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    setNoStyle({ transform: `translate(${x}px, ${y}px)` });
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial', textAlign: 'center' }}>

      {/* Valentine Section */}
      <div style={{ marginBottom: '50px' }}>
        <h1>{accepted ? "YAY! 💖" : "Be My Valentine?"}</h1>
        {!accepted && (
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
            <button onClick={() => setAccepted(true)} style={{ fontSize: '20px', padding: '10px 20px', backgroundColor: 'pink', border: 'none', cursor: 'pointer' }}>YES</button>
            <button onMouseEnter={moveNo} style={{ ...noStyle, fontSize: '20px', padding: '10px 20px', transition: '0.2s' }}>No</button>
          </div>
        )}
      </div>

      <hr />

      {/* Guestbook Section */}
      <h2>Guestbook</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <input placeholder="Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} required style={{ marginRight: '10px' }}/>
        <input placeholder="Message" value={form.message} onChange={e => setForm({...form, message: e.target.value})} required style={{ marginRight: '10px' }}/>
        <button type="submit">Sign</button>
      </form>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {messages.map(msg => (
          <li key={msg.id} style={{ border: '1px solid #ccc', margin: '10px auto', maxWidth: '400px', padding: '10px' }}>
            <strong>{msg.name}</strong>: {msg.message}
            <br/>
            <button onClick={() => handleDelete(msg.id)} style={{ marginTop: '5px', fontSize: '10px', color: 'red' }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;