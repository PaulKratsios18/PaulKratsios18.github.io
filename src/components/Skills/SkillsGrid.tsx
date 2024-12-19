import React from 'react';
import { motion } from 'framer-motion';
import SkillCard from './SkillCard.tsx';

const SkillsGrid = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['Python', 'C/C++', 'JavaScript', 'TypeScript', 'SQL', 'Java', 'Swift', 'R']
    },
    {
      title: 'Data Science',
      skills: ['Pandas', 'NumPy', 'Beautiful Soup', 'Scikit-learn']
    },
    {
      title: 'Frontend',
      skills: ['React', 'HTML/CSS', 'Bootstrap', 'Material-UI']
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express', 'Flask', 'REST APIs']
    },
    {
      title: 'Databases',
      skills: ['MongoDB', 'MySQL', 'PostgreSQL']
    },
    {
      title: 'Tools',
      skills: ['Git', 'Docker', 'AWS', 'CI/CD']
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2>Skills & Technologies</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <SkillCard {...category} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SkillsGrid; 