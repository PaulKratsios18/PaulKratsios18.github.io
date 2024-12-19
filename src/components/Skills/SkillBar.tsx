import React from 'react';
import { motion } from 'framer-motion';

interface SkillBarProps {
  skill: string;
  level: number;
  levelName: string;
  index: number;
}

const SkillBar = ({ skill, level, levelName, index }: SkillBarProps) => {
  return (
    <div className="skill-bar-container">
      <div className="skill-info">
        <span className="skill-name">{skill}</span>
        <span className="skill-level">{levelName.charAt(0).toUpperCase() + levelName.slice(1)}</span>
      </div>
      <div className="skill-bar-bg">
        <motion.div
          className="skill-bar-fill"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ 
            duration: 1.2,
            delay: index * 0.2,
            ease: "easeOut"
          }}
        />
      </div>
    </div>
  );
};

export default SkillBar; 