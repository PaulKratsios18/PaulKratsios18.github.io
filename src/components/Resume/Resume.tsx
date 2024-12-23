import React from 'react';
import { motion } from 'framer-motion';

const Resume = () => {
  return (
    <section id="resume" className="resume-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2>Resume</h2>
        <div className="resume-container">
          <div className="resume-preview">
            <div className="preview-content">
              <p className="preview-subtitle">B.S. Computer Science and Cognitive Science, Minor in Finance</p>
              <p className="preview-school">Rensselaer Polytechnic Institute</p>
              
              <div className="preview-highlights">
                <div className="highlight-item">
                  <h4>Experience Highlights</h4>
                  <ul>
                    <li>Machine Learning Engineer Intern @ CyberSaint Security</li>
                    <li>Data Science Intern @ Kapitus</li>
                    <li>Software Engineer Intern @ HiroFit</li>
                  </ul>
                </div>
                
                <div className="highlight-item">
                  <h4>Technical Skills</h4>
                  <ul>
                    <li>Languages: Python, C/C++, JavaScript, HTML/CSS</li>
                    <li>Technologies: TensorFlow, React, Node.js, MongoDB</li>
                    <li>Tools: Git, Docker, AWS</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="preview-overlay">
              <div className="overlay-content">
                <p>View or download my full resume for complete details</p>
                <div className="resume-buttons">
                  <a 
                    href="https://drive.google.com/uc?export=download&id=1orcZksRQa96mAfZUjKiqLhYpv7n6zaXB"
                    download="Paul_Kratsios_Resume.pdf"
                    className="primary-btn"
                  >
                    Download PDF
                  </a>
                  <a 
                    href="https://drive.google.com/file/d/1orcZksRQa96mAfZUjKiqLhYpv7n6zaXB/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="secondary-btn"
                  >
                    View PDF
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Resume; 