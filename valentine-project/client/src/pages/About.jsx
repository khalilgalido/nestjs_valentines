import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="mc-panel">
      <h2 className="mc-title">Information</h2>
      <div className="info-section">
        <h3>Stats</h3>
        <p><strong>Name:</strong> Rei Khalil S. Galido</p>
        <p><strong>Class:</strong> Web Developer</p>
        <p><strong>Level:</strong> 20</p>
      </div>
      <hr />
      <div className="info-section">
        <h3>Inventory (Skills)</h3>
        <ul>
          <li>React.js (Frontend)</li>
          <li>Nest.js (Backend)</li>
          <li>Supabase (Database)</li>
        </ul>
      </div>
      <Link to="/" className="back-link">Back to Menu</Link>
    </div>
  );
}

export default About;