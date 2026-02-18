import { useState } from 'react'; // <--- Added useState
import { Link } from 'react-router-dom';
import videoBg from '../assets/openingscreen.mp4';
import titleImg from '../assets/KhalilCraft.png'; 
import '../pagescss/Home.css';

// --- NEW ASSETS ---
import char1 from '../assets/char1.png';
import char2 from '../assets/char2.png';
import char3 from '../assets/char3.png';
import hangerIcon from '../assets/hanger.jpg';

function Home() {
  // State to track which character is currently showing
  const [charIndex, setCharIndex] = useState(0);

  // Data for your characters
  const characters = [
    { img: char1, name: "Viltrumite Khalil" },      // Change these names to match your designs
    { img: char2, name: "Weirdkid" },
    { img: char3, name: "Khalil sa Minecraft" }
  ];

  // Function to switch character
  const cycleCharacter = () => {
    setCharIndex((prevIndex) => (prevIndex + 1) % characters.length);
  };

  return (
    <div className="home-container">
      <video className="video-bg" autoPlay loop muted playsInline>
        <source src={videoBg} type="video/mp4" />
      </video>
      <div className="video-overlay"></div>
      
      {/* CENTER MENU (UNCHANGED) */}
      <div className="mc-content">
        <img src={titleImg} alt="KhalilCraft" className="mc-title-img" />
        
        {/* You removed the subtitle in your snippet, so I removed it here too. 
            If you want it back, put the <p> tag here. */}

        <div className="menu-grid">
          <Link to="/guestbook" className="mc-btn">Guestbook</Link>
          <Link to="/about" className="mc-btn">Information</Link>
          <Link to="/gallery" className="mc-btn">Gallery</Link>
          <Link to="/portfolio" className="mc-btn">Portfolio</Link>
          <Link to="/socials" className="mc-btn">Socials</Link>
        </div>
      </div>

      {/* --- NEW FEATURE: CHARACTER DISPLAY --- */}
      <div className="character-display">
        {/* Name Tag */}
        <div className="char-nametag">
          {characters[charIndex].name}
        </div>

        {/* Character Image */}
        <img 
          src={characters[charIndex].img} 
          alt="Character" 
          className="char-skin" 
        />

        {/* Hanger Button */}
        <button className="hanger-btn" onClick={cycleCharacter}>
          <img src={hangerIcon} alt="Switch" />
        </button>
      </div>

    </div>
  );
}

export default Home;