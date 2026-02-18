import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../pagescss/About.css';

// --- IMPORT CHARACTERS ---
import char1 from '../assets/char1.png';
import char2 from '../assets/char2.png';
import char3 from '../assets/char3.png';

// --- IMPORT MUSIC COVERS (Make sure these files exist!) ---
// If you don't have them yet, you can temporarily use char1.png as a placeholder
import cover1 from '../assets/song1.jpg'; 
import cover2 from '../assets/song2.jpg';
import cover3 from '../assets/song3.jpg';

function About() {
  const [skin, setSkin] = useState(char1);
  const [skinName, setSkinName] = useState("Viltrumite Lil");
  
  // State for Popups
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [playingSong, setPlayingSong] = useState(null); // <--- NEW MUSIC STATE

  // --- SKILL DATA ---
  const skills = [
    { name: "PHP", icon: "🐘", level: 90, desc: "Confident. My main weapon." },
    { name: "MySQL", icon: "🐬", level: 60, desc: "Okay. I can handle queries." },
    { name: "HTML & CSS", icon: "🎨", level: 65, desc: "Okay. I can build layouts." },
    { name: "OutSystems", icon: "🚀", level: 50, desc: "Okay. Low-code dev." },
    { name: "React.js", icon: "⚛️", level: 25, desc: "Learning. Still grinding." },
    { name: "NestJS", icon: "🦁", level: 20, desc: "Novice. Backend exploration." },
    { name: "Arduino", icon: "🤖", level: 15, desc: "Beginner. Hardware is hard." },
    { name: "MongoDB", icon: "🍃", level: 20, desc: "Novice. NoSQL database." },
  ];

  // --- MUSIC LIST (Top 3) ---
  const musicTracks = [
    { title: "Die With A Smile", artist: "Lady Gaga & Bruno", cover: cover1 },
    { title: "Snooze", artist: "SZA", cover: cover2 },
    { title: "Sweden", artist: "C418", cover: cover3 },
  ];

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
          
          {/* LEFT SIDE */}
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
              <li>🚗 <strong>Cars:</strong> SUPRAAAAAAAAAAAAAAAAAAAA</li>
            </ul>
            <hr className="mc-divider"/>
            <h3>📜 Bio</h3>
            <p className="bio-text">
              "I write code, break code, and then fix code. Always ready for some 
              emergency hoop session. I only my bed and my mama and my girl 
              and Lebron (2018 bron for the specifics)"
            </p>
          </div>

          <div className="vertical-line"></div>

          {/* RIGHT SIDE */}
          <div className="about-column right-col">
            
            {/* SKILL TREE */}
            <h3>🔮 Skill Tree (Hover for Peek)</h3>
            <div className="skill-grid">
              {skills.map((skill, index) => (
                <div 
                  key={index} 
                  className="skill-item" 
                  onClick={() => setSelectedSkill(skill)}
                  data-tooltip={skill.desc}
                >
                  {skill.icon} {skill.name}
                </div>
              ))}
            </div>

            <hr className="mc-divider"/>

            {/* INVENTORY */}
            <h3>🎒 Inventory</h3>
            <ul className="interest-list">
              <li>⚔️ <strong>Diamond Sword:</strong> For crushing bugs</li>
              <li>👑 <strong>Gold Helmet:</strong> King James Fanboy Gear</li>
              <li>🚫 <strong>Barrier Block:</strong> That one error I can't find</li>
            </ul>

            <hr className="mc-divider"/>

            {/* --- NEW JUKEBOX SECTION --- */}
            <h3>🎵 Jukebox (Top 3)</h3>
            <div className="jukebox-list">
              {musicTracks.map((song, i) => (
                <div key={i} className="music-disc-row" onClick={() => setPlayingSong(song)}>
                  <div className="disc-icon">💿</div>
                  <div className="song-info">
                    <span className="song-title">{song.title}</span>
                    <span className="song-artist">{song.artist}</span>
                  </div>
                  <div className="play-arrow">▶</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Link to="/" className="back-link">Return menu</Link>
      </div>

      {/* --- SKILL LEVEL POPUP (XP BAR) --- */}
      {selectedSkill && (
        <div className="modal-overlay" onClick={() => setSelectedSkill(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3 className="modal-title">{selectedSkill.name} Mastery</h3>
            <div className="xp-bar-container">
              <div className="xp-bar-fill" style={{ width: `${selectedSkill.level}%` }}></div>
              <span className="xp-text">Lvl {selectedSkill.level}</span>
            </div>
            <p className="modal-desc">{selectedSkill.desc}</p>
            <button className="mc-btn-small" onClick={() => setSelectedSkill(null)}>Close</button>
          </div>
        </div>
      )}

      {/* --- NEW MUSIC PLAYER POPUP --- */}
      {playingSong && (
        <div className="modal-overlay" onClick={() => setPlayingSong(null)}>
          <div className="modal-content music-player" onClick={(e) => e.stopPropagation()}>
            <h3 className="modal-title">Now Playing</h3>
            
            {/* Album Art */}
            <div className="album-art-box">
              <img src={playingSong.cover} alt="Cover" className="album-img" />
            </div>

            {/* Song Info */}
            <h2 className="player-title">{playingSong.title}</h2>
            <p className="player-artist">{playingSong.artist}</p>

            {/* Fake Progress Bar */}
            <div className="player-progress">
              <div className="player-fill"></div>
            </div>

            {/* Controls */}
            <div className="player-controls">
              <button className="control-btn">⏮</button>
              <button className="control-btn play-btn">⏸</button>
              <button className="control-btn">⏭</button>
            </div>

            <button className="mc-btn-small" onClick={() => setPlayingSong(null)}>Eject Disc</button>
          </div>
        </div>
      )}

    </div>
  );
}

export default About;