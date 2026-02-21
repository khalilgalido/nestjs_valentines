import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../pagescss/Portfolio.css';

// --- IMPORT CHARACTERS (For the Journey) ---
import char1 from '../assets/char1.png';
import char2 from '../assets/char2.png';
import char3 from '../assets/char3.png';

// --- IMPORT LOGOS & PHOTOS (Replace with your actual files!) ---
import logoTC from '../assets/logo_tc.png'; 
import logoDB from '../assets/logo_db.png'; 
import logoAPC from '../assets/logo_apc.png'; 

import projAnimal from '../assets/proj_animal.jpg';
import projLib from '../assets/proj_lib.jpg';
import projArduino from '../assets/proj_arduino.png';
import projWeb from '../assets/proj_web.png';

import wireGaming from '../assets/wire_gaming.JPG';
import wireCV from '../assets/wire_cv.JPG';

function Portfolio() {
  const [skin, setSkin] = useState(char1);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [selectedImg, setSelectedImg] = useState(null);
  
  // NEW: State for clicking a school
  const [selectedSchool, setSelectedSchool] = useState(null);

  // --- EDUCATION JOURNEY DATA (Added Descriptions) ---
  const education = [
    { 
      id: 1, 
      level: "Junior High", 
      school: "Thy Covenant", 
      logo: logoTC,
      desc: "Began the main questline here. Built my foundational skills, basic logic, and survived the early-game mob spawns."
    },
    { 
      id: 2, 
      level: "Senior High", 
      school: "Don Bosco Tech. Inst. Makati", 
      logo: logoDB,
      desc: "Tech-Voc / STEM Track. Upgraded my toolset, started learning real coding mechanics, and survived the technical tutorials."
    },
    { 
      id: 3, 
      level: "2nd Year College", 
      school: "Asia Pacific College", 
      logo: logoAPC,
      desc: "Current Respawn Point. Grinding XP in programming, databases, UI/UX, and system architecture. (Leveling up to Full Stack)."
    }
  ];

  const [activeNode, setActiveNode] = useState(education.length - 1);

  // --- PROJECT DATA ---
  const projects = [
    { title: "AnimalPalsCenter", tech: "OutSystems", desc: "A centralized platform to manage pet adoptions and care.", image: projAnimal },
    { title: "Library Management System", tech: "PHP | MongoDB | MySQL", desc: "A hybrid database system for managing books and users.", image: projLib },
    { title: "Arduino Hydro Fold", tech: "Arduino | Sensors", desc: "Automated clothesline that folds itself when it detects rain.", image: projArduino },
    { title: "Minecraft Personal Website", tech: "React | CSS", desc: "A fully custom interactive portfolio styled like Minecraft.", image: projWeb }
  ];

  const wireframes = [
    { title: "Gaming E-Commerce", image: wireGaming },
    { title: "CV Wireframe", image: wireCV }
  ];

  useEffect(() => {
    const savedIndex = localStorage.getItem('selectedSkin');
    if (savedIndex) {
      const index = parseInt(savedIndex);
      if (index === 0) setSkin(char1);
      if (index === 1) setSkin(char2);
      if (index === 2) setSkin(char3);
    }
  }, []);

  const nextProject = () => setCurrentProjectIndex((prev) => (prev + 1) % projects.length);
  const prevProject = () => setCurrentProjectIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));

  return (
    <div className="portfolio-wrapper">
      <div className="mc-panel portfolio-panel">
        <h2 className="mc-title">Quest Log & Inventory</h2>

        {/* --- SECTION 1: HORIZONTAL EDUCATION JOURNEY --- */}
        <h3 className="section-header">🗺️ The Journey (Education)</h3>
        
        <div className="timeline-container">
          <div className="timeline-track" onMouseLeave={() => setActiveNode(education.length - 1)}>
            {education.map((edu, index) => (
              <div 
                key={edu.id} 
                className={`timeline-node ${activeNode === index ? 'is-active' : ''}`}
                onMouseEnter={() => setActiveNode(index)}
                onClick={() => setSelectedSchool(edu)} // Trigger Popup on Click
              >
                
                <div className="school-card">
                  <div className="school-logo-box">
                    <img src={edu.logo} alt="School Logo" className="school-logo" />
                  </div>
                  <div className="school-info">
                    <h4>{edu.school}</h4>
                    <span className="mc-badge">{edu.level}</span>
                  </div>
                  <div className="click-hint">Click for stats ⮞</div>
                </div>

                {/* Character placed BELOW the card, ON the track */}
                {activeNode === index && (
                  <img src={skin} alt="Player Cursor" className="timeline-player" />
                )}
              </div>
            ))}
          </div>
        </div>

        <hr className="mc-divider" />

        {/* --- SECTION 2: PROJECTS CAROUSEL --- */}
        <h3 className="section-header">🛠️ Crafted Systems (Projects)</h3>
        {/* ... (Carousel Code Remains Exactly the Same) ... */}
        <div className="carousel-wrapper">
          <button className="mc-btn-small carousel-btn" onClick={prevProject}>◄</button>
          <div className="carousel-view">
            <div className="carousel-card">
              <div className="carousel-img-box" onClick={() => setSelectedImg(projects[currentProjectIndex].image)}>
                <img src={projects[currentProjectIndex].image} alt="Project" className="carousel-img" />
                <div className="click-to-enlarge">🔍 Click to enlarge</div>
              </div>
              <div className="carousel-details">
                <h4 className="proj-title">{projects[currentProjectIndex].title}</h4>
                <p className="proj-tech"><strong>Tech:</strong> {projects[currentProjectIndex].tech}</p>
                <p className="proj-desc">{projects[currentProjectIndex].desc}</p>
              </div>
            </div>
          </div>
          <button className="mc-btn-small carousel-btn" onClick={nextProject}>►</button>
        </div>

        <hr className="mc-divider" />

        {/* --- SECTION 3: WIREFRAMES --- */}
        <h3 className="section-header">📐 Blueprints (Wireframes)</h3>
        <div className="wireframe-grid">
          {wireframes.map((wire, idx) => (
            <div key={idx} className="wireframe-card" onClick={() => setSelectedImg(wire.image)}>
              <div className="wireframe-img-box">
                <img src={wire.image} alt="Wireframe" className="wireframe-img" />
              </div>
              <p className="wireframe-title">{wire.title}</p>
            </div>
          ))}
        </div>

        <Link to="/" className="back-link">Return Menu</Link>
      </div>

      {/* --- SCHOOL DETAILS MODAL --- */}
      {selectedSchool && (
        <div className="modal-overlay" onClick={() => setSelectedSchool(null)}>
          <div className="modal-content project-modal" onClick={(e) => e.stopPropagation()}>
            <div className="school-logo-box center-logo">
              <img src={selectedSchool.logo} alt="School" className="school-logo" />
            </div>
            <h3 className="modal-title text-center">{selectedSchool.school}</h3>
            
            <div className="modal-body text-center">
              <span className="mc-badge mb-15">{selectedSchool.level}</span>
              <div className="project-desc-box text-left">
                <p>{selectedSchool.desc}</p>
              </div>
            </div>

            <div className="text-center mt-10">
              <button className="mc-btn-small" onClick={() => setSelectedSchool(null)}>Close UI</button>
            </div>
          </div>
        </div>
      )}

      {/* --- IMAGE LIGHTBOX --- */}
      {selectedImg && (
        <div className="modal-overlay" onClick={() => setSelectedImg(null)}>
          <div className="modal-content lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImg} alt="Enlarged" className="lightbox-img" />
            <button className="mc-btn-small mt-10" onClick={() => setSelectedImg(null)}>Close</button>
          </div>
        </div>
      )}

    </div>
  );
}

export default Portfolio;