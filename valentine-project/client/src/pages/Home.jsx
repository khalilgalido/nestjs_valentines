import { Link } from 'react-router-dom';
import videoBg from '../assets/openingscreen.mp4';
import titleImg from '../assets/KhalilCraft.png'; // <--- Import your new image
import '../pagescss/Home.css';

function Home() {
  return (
    <div className="home-container">
      <video className="video-bg" autoPlay loop muted playsInline>
        <source src={videoBg} type="video/mp4" />
      </video>
      <div className="video-overlay"></div>
      
      <div className="mc-content">
        {/* Replaced text h1 with the image */}
        <img src={titleImg} alt="KhalilCraft" className="mc-title-img" />
        
       

        <div className="menu-grid">
          <Link to="/guestbook" className="mc-btn">Guestbook</Link>
          <Link to="/about" className="mc-btn">Information</Link>
          <Link to="/gallery" className="mc-btn">Gallery</Link>
          <Link to="/portfolio" className="mc-btn">Portfolio</Link>
          <Link to="/socials" className="mc-btn">Socials</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;