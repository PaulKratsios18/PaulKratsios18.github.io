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
        className="resume-content"
      >
        <h2>Resume</h2>
        <div className="resume-container">
          <iframe
            src={`/assets/docs/PaulKratsiosResume.pdf#toolbar=0&navpanes=0&scrollbar=0`}
            width="100%"
            height="418px"
            style={{ 
              border: 'none',
              maxWidth: '1200px',
              width: '100%'
            }}
            title="Paul Kratsios Resume"
          />
          <a 
            href="/assets/docs/PaulKratsiosResume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="primary-btn download-btn"
          >
            Download Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Resume; 