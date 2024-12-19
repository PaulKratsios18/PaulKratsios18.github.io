import React from 'react';
import { motion } from 'framer-motion';

const Timeline = () => {
  const experiences = [
    {
      title: 'Machine Learning Engineer Intern',
      company: 'CyberSaint Security',
      date: 'May 2024 - August 2024',
      description: 'Led development of ML models for cyber attack impact analysis.'
    },
    {
      title: 'Data and Finance Intern',
      company: 'Parkbridge Financial',
      date: 'Jun 2023 - Aug 2023',
      description: 'Analyzed commercial mortgage-backed security contracts.'
    },
    {
      title: 'Data Science Intern',
      company: 'Kapitus',
      date: 'Sep 2022 - Dec 2022',
      description: 'Developed risk score models for loan pricing.'
    },
    {
      title: 'Software Engineer Intern',
      company: 'HiroFit',
      date: 'May 2022 - Sep 2022',
      description: 'Led iOS development for ML-based fitness app.'
    }
  ];

  return (
    <div className="timeline">
      <h3>Experience</h3>
      <div className="timeline-grid">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="timeline-item"
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="timeline-content">
              <h4>{exp.title}</h4>
              <h5>{exp.company}</h5>
              <p className="date">{exp.date}</p>
              <p>{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline; 