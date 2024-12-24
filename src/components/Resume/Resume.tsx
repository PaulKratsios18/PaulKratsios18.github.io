import React from 'react';
import { motion } from 'framer-motion';
import { FaEye, FaDownload } from 'react-icons/fa';

const Resume = () => {
  const RESUME_URL = 'https://drive.google.com/file/d/1kYy5ksGrnNnSKpvNjSGVV4uoiRsM1g7A/view?usp=sharing';
  const DOWNLOAD_URL = 'https://drive.google.com/uc?export=download&id=1kYy5ksGrnNnSKpvNjSGVV4uoiRsM1g7A';

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
            
            <div className="cta-buttons">
              <a 
                href={DOWNLOAD_URL}
                className="blue-gradient"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDownload className="btn-icon" />
                Download Resume
              </a>
              
              <a 
                href={RESUME_URL}
                className="secondary-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaEye className="btn-icon" />
                View Resume
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Resume; 