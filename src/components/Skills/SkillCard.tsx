import React from 'react';
import { motion } from 'framer-motion';

interface SkillCardProps {
  title: string;
  skills: string[];
}

const SkillCard = ({ title, skills }: SkillCardProps) => {
  return (
    <motion.div 
      className="skill-card"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <h3>{title}</h3>
      <div className="skills-list">
        {skills.map((skill) => (
          <motion.span
            key={skill}
            className="skill-tag"
            whileHover={{ scale: 1.1 }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCard; 