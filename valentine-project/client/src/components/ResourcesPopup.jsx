import { useState } from 'react';
import './ResourcesPopup.css';

function ResourcesPopup() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* The Floating 'Recipe Book' Button */}
      <button className="mc-floating-btn" onClick={() => setIsOpen(true)} title="View Resources">
        📘
      </button>

      {/* The Popup Modal */}
      {isOpen && (
        <div className="modal-overlay" onClick={() => setIsOpen(false)}>
          <div className="modal-content resources-modal" onClick={(e) => e.stopPropagation()}>
            <h3 className="modal-title">Crafting Recipes (Resources)</h3>
            
            <div className="resources-list">
              <div className="resource-item">
                <h4>⚛️ Core Tech Stack</h4>
                <p>React.js, NestJS, MongoDB, MySQL, and Custom CSS.</p>
              </div>
              
              <div className="resource-item">
                <h4>🎨 Design & Assets</h4>
                <p>
                  • <a href="https://textcraft.net/" target="_blank" rel="noreferrer" className="mc-link">Textcraft.net</a> (Minecraft Text/Logos)<br/>
                  • <a href="https://www.canva.com/" target="_blank" rel="noreferrer" className="mc-link">Canva</a> (Graphics & Layouts)<br/>
                  • Dribbble (UI Inspiration)
                </p>
              </div>

              <div className="resource-item">
                <h4>🤖 AI & Development Tools</h4>
                <p>
                  • <a href="https://gemini.google.com/app/0fa3266b9ee86a41" target="_blank" rel="noreferrer" className="mc-link">Gemini AI</a> (Coding Assistant)<br/>
                  • VS Code, Git, GitHub
                </p>
              </div>
            </div>

            <button className="mc-btn-small mt-15" onClick={() => setIsOpen(false)}>
              Close UI
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ResourcesPopup;