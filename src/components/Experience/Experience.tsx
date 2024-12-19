import React from 'react';
import { motion } from 'framer-motion';
import Timeline from '../About/Timeline.tsx';

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="experience-content"
      >
        <h2>Experience</h2>
        <Timeline />
      </motion.div>
    </section>
  );
};

export default Experience; 