import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../pagescss/Gallery.css';

// --- IMPORT IMAGES ---
// (Make sure these exist in your assets folder!)
import me1 from '../assets/me1.jfif';
import me2 from '../assets/me2.jpg';
import me3 from '../assets/me3.jfif';

import fam1 from '../assets/fam1.jpg';
import fam2 from '../assets/fam2.jpg';
import fam3 from '../assets/fam3.jpg';

import boys1 from '../assets/bois3.jpeg';
import boys2 from '../assets/bois2.jpg';
import boys3 from '../assets/bois4.jpeg';

import gf1 from '../assets/gf1.jfif';
import gf2 from '../assets/gf2.jpg';
import gf3 from '../assets/gf3.jfif';

function Gallery() {
  // State for active tab (Default is 'Me')
  const [activeTab, setActiveTab] = useState('Me');
  const [selectedImg, setSelectedImg] = useState(null);

  // --- DATA STRUCTURE ---
  const galleryData = {
    'Me': [
      { src: me1, caption: "Skin: Steve" },
      { src: me2, caption: "Main Character" },
      { src: me3, caption: "Respawn Point" }
    ],
    'My Family': [
      { src: fam1, caption: "The Server Admins" },
      { src: fam2, caption: "Home Base" },
      { src: fam3, caption: "Clan Members" }
    ],
    'My Boys': [
      { src: boys1, caption: "Raid Party" },
      { src: boys2, caption: "The Griefers" },
      { src: boys3, caption: "PVP Squad" }
    ],
    'Me & My Girlfriend': [
      { src: gf1, caption: "My Player 2" },
      { src: gf2, caption: "Tamed Wolf <3" },
      { src: gf3, caption: "Shared Inventory" }
    ]
  };

  return (
    <div className="gallery-wrapper">
      <div className="mc-panel gallery-panel">
        <h2 className="mc-title">Gallery</h2>

        {/* --- INVENTORY TABS --- */}
        <div className="gallery-tabs">
          {['Me', 'My Family', 'My Boys', 'Me & My Girlfriend'].map((tab) => (
            <button
              key={tab}
              className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === 'Me' && '👤'}
              {tab === 'My Family' && '🏡'}
              {tab === 'My Boys' && '⚔️'}
              {tab === 'Me & My Girlfriend' && '🌹'}
              <span className="tab-text">{tab}</span>
            </button>
          ))}
        </div>

        {/* --- PHOTO GRID --- */}
        <div className="photo-grid-container">
          <h3 className="category-title">{activeTab}</h3>
          <div className="photo-grid">
            {galleryData[activeTab].map((photo, index) => (
              <div 
                key={index} 
                className="mc-frame" 
                onClick={() => setSelectedImg(photo)}
              >
                <div className="frame-inner">
                  <img src={photo.src} alt="Gallery" className="frame-img" />
                </div>
                <p className="frame-caption">{photo.caption}</p>
              </div>
            ))}
          </div>
        </div>

        <Link to="/" className="back-link">Return to Menu</Link>
      </div>

      {/* --- LIGHTBOX MODAL --- */}
      {selectedImg && (
        <div className="modal-overlay" onClick={() => setSelectedImg(null)}>
          <div className="modal-content lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImg.src} alt="Full Size" className="lightbox-img" />
            <p className="lightbox-caption">{selectedImg.caption}</p>
            <button className="mc-btn-small" onClick={() => setSelectedImg(null)}>Close</button>
          </div>
        </div>
      )}

    </div>
  );
}

export default Gallery;