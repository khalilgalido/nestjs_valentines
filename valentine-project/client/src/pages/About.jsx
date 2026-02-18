import { Link } from 'react-router-dom';
import '../pagescss/About.css';

function About() {
  return (
    <div className="book-overlay">
      <div className="book-container">
        
        {/* --- LEFT PAGE: IDENTITY --- */}
        <div className="book-page left-page">
          <h2 className="page-header">📖 Profile</h2>
          
          <div className="avatar-container">
            <img 
              src="https://api.mineatar.io/body/full/Steve" 
              alt="Skin" 
              className="book-skin"
            />
            <div className="book-name">Khalil</div>
          </div>

          <div className="stats-box">
            <p><strong>Class:</strong> Lazy Developer 👨‍💻</p>
            <p><strong>Level:</strong> IT Student (Lvl 20)</p>
            <p><strong>Guild:</strong> Taguig City</p>
          </div>

          <div className="bio-box">
            <p className="bio-quote">
              "I write code, break code, and then fix code. When I'm not debugging, 
              I'm probably watching the Lakers or sleeping."
            </p>
          </div>
        </div>

        {/* --- RIGHT PAGE: DETAILS --- */}
        <div className="book-page right-page">
          <h2 className="page-header">⚔️ Quest Log</h2>

          <h3 className="section-title">Main Quests (Interests)</h3>
          <ul className="book-list">
            <li>🏀 <strong>Basketball:</strong> Lebron James Fan</li>
            <li>🎮 <strong>Gaming:</strong> Casual Grinding</li>
            <li>📸 <strong>Photography:</strong> Memories</li>
            <li>🚗 <strong>Cars:</strong> JDM & Speed</li>
          </ul>

          <hr className="book-divider"/>

          <h3 className="section-title">🔮 Skill Tree (Tech)</h3>
          <div className="skill-grid">
            <span className="skill-badge">React ⚛️</span>
            <span className="skill-badge">NestJS 🦁</span>
            <span className="skill-badge">MySQL 🐬</span>
            <span className="skill-badge">Arduino 🤖</span>
          </div>

          <hr className="book-divider"/>

          <h3 className="section-title">🎵 Music Discs</h3>
          <p className="music-text">
            Currently Listening: <br/>
            <strong>C418 - Sweden</strong> (Vibe)
          </p>
        </div>

      </div>

      <Link to="/" className="close-btn">Done</Link>
    </div>
  );
}

export default About;