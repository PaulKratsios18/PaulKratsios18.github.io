import React from 'react';
import { motion } from 'framer-motion';
import { FaEye, FaDownload } from 'react-icons/fa';

const Resume = () => {
  const handleViewResume = () => {
    window.open('/assets/documents/PaulKratsios_Resume.pdf', '_blank');
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/assets/documents/PaulKratsios_Resume.pdf';
    link.download = 'PaulKratsios_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="resume-section">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="resume-container"
      >
        <h2>Resume</h2>
        
        <motion.div 
          className="resume-preview"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="preview-content">
            <div className="preview-description">
              <p>
                My resume provides a comprehensive overview of my professional journey, 
                technical expertise, and key achievements. You can view it directly in your 
                browser or download a copy for your records.
              </p>
            </div>
            
            <div className="resume-actions">
              <button 
                className="resume-btn view-btn"
                onClick={handleViewResume}
              >
                <FaEye className="btn-icon" />
                <span>View Resume</span>
              </button>
              
              <button 
                className="resume-btn download-btn"
                onClick={handleDownloadResume}
              >
                <FaDownload className="btn-icon" />
                <span>Download Resume</span>
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Resume; 