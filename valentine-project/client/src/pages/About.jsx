import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../pagescss/About.css';

// --- IMPORT YOUR CHARACTER IMAGES ---
// Make sure these files exist in your assets folder!
import char1 from '../assets/char1.png';
import char2 from '../assets/char2.png';
import char3 from '../assets/char3.png';

function About() {
  // Default to first character
  const [skin, setSkin] = useState(char1);
  const [skinName, setSkinName] = useState("Viltrumite Lil");

  // --- SKILL DATA (Name + Funny Stat) ---
  const skills = [
    { name: "React.js", icon: "⚛️", stat: "UI Sorcery Lvl 50" },
    { name: "NestJS", icon: "🦁", stat: "Backend Beast Mode" },
    { name: "MySQL", icon: "🐬", stat: "Data Hoarding +100" },
    { name: "Arduino", icon: "🤖", stat: "Hardware Hacking" },
    { name: "CSS/Tailwind", icon: "🎨", stat: "Pixel Perfect Arts" },
    { name: "Supabase", icon: "☁️", stat: "Instant DB Magic" }
  ];

  // --- CHECK MEMORY ON LOAD ---
  useEffect(() => {
    const savedIndex = localStorage.getItem('selectedSkin');
    if (savedIndex) {
      const index = parseInt(savedIndex);
      if (index === 0) { setSkin(char1); setSkinName("Viltrumite Lil"); }
      if (index === 1) { setSkin(char2); setSkinName("lil Lil"); }
      if (index === 2) { setSkin(char3); setSkinName("MC Lil"); }
    }
  }, []);

  return (
    <div className="about-wrapper">
      <div className="mc-panel about-panel">
        <h2 className="mc-title">Player Stats</h2>
        
        <div className="about-split-layout">
          
          {/* --- LEFT SIDE --- */}
          <div className="about-column left-col">
            <div className="avatar-row">
              <div className="avatar-box">
                <img src={skin} alt="Skin" className="about-skin" />
                <div className="gamertag">{skinName}</div>
              </div>
              
              <div className="stats-text">
                <p><strong>Name:</strong> Khalil Galido 👨</p>
                <p><strong>Class:</strong> Lazy Developer 👨‍💻</p>
                <p><strong>Level:</strong> IT Student (Lvl 20)</p>
                <p><strong>Guild:</strong> Taguig City</p>
              </div>
            </div>

            <hr className="mc-divider"/>

            <h3>⚔️ Main Quests (Interests)</h3>
            <ul className="interest-list">
              <li>🏀 <strong>Basketball:</strong> LeBron James (The Goat)</li>
              <li>🎮 <strong>Gaming:</strong> Casual Grinding</li>
              <li>📸 <strong>Photography:</strong> Capturing Moments</li>
              <li>🚗 <strong>Cars:</strong> Speed & Engineering</li>
            </ul>

            <hr className="mc-divider"/>

            <h3>📜 Bio</h3>
            <p className="bio-text">
              "I write code, break code, and then fix code. When I'm not debugging, 
              I'm probably watching the Lakers or sleeping."
            </p>
          </div>

          {/* --- VERTICAL DIVIDER --- */}
          <div className="vertical-line"></div>

          {/* --- RIGHT SIDE --- */}
          <div className="about-column right-col">
            
            <h3>🔮 Skill Tree (Hover for Stats)</h3>
            <div className="skill-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item" data-tooltip={skill.stat}>
                  {skill.icon} {skill.name}
                </div>
              ))}
            </div>

            <hr className="mc-divider"/>

            {/* --- UPDATED MINECRAFT INVENTORY --- */}
            <h3>🎒 Inventory</h3>
            <ul className="interest-list">
              <li>⚔️ <strong>Diamond Sword:</strong> For crushing bugs (and noobs)</li>
              <li>👑 <strong>Gold Helmet:</strong> King James Fanboy Gear</li>
              <li>🚫 <strong>Barrier Block:</strong> That one error I can't find</li>
            </ul>

            <hr className="mc-divider"/>

            <h3>🎵 Music Disc</h3>
            <div className="music-box">
              <p>Now Playing:</p>
              <strong>C418 - Sweden</strong>
              <div className="progress-bar">
                <div className="fill"></div>
              </div>
            </div>
          </div>

        </div>
        <Link to="/" className="back-link">Close GUI</Link>
      </div>
    </div>
  );
}

export default About;