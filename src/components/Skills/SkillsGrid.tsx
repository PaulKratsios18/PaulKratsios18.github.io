import React from 'react';
import { motion } from 'framer-motion';
import SkillBar from './SkillBar.tsx';

const SkillsGrid = () => {
  const skillLevels = {
    expert: 100,
    advanced: 75,
    intermediate: 50,
    proficient: 25,
    beginner: 10
  };

  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', level: 'advanced' },
        { name: 'C/C++', level: 'advanced' },
        { name: 'JavaScript/TS', level: 'intermediate' },
        { name: 'HTML/CSS', level: 'intermediate' },
        { name: 'Java', level: 'intermediate' },
        { name: 'R', level: 'proficient' },
        { name: 'Swift', level: 'proficient' }
      ]
    },
    {
      title: 'Machine Learning & Data Science',
      skills: [
        { name: 'Pandas', level: 'advanced' },
        { name: 'TensorFlow', level: 'intermediate' },
        { name: 'Scikit-learn', level: 'intermediate' },
        { name: 'NumPy', level: 'intermediate' },
        { name: 'BeautifulSoup', level: 'intermediate' },
        { name: 'OpenCV', level: 'intermediate' },
        { name: 'PyTorch', level: 'proficient' }
      ]
    },
    {
      title: 'Database Technologies',
      skills: [
        { name: 'PostgreSQL', level: 'advanced' },
        { name: 'MongoDB', level: 'intermediate' },
        { name: 'SQL', level: 'intermediate' },
        { name: 'MySQL', level: 'intermediate' }
      ]
    },
    {
      title: 'Non-Technical Skills',
      skills: [
        { name: 'Communication', level: 'expert' },
        { name: 'Project Management', level: 'advanced' },
        { name: 'Leadership', level: 'advanced' },
        { name: 'Adaptability', level: 'advanced' },
        { name: 'Technical Writing', level: 'intermediate' }
      ]
    },
    {
      title: 'Development Tools',
      skills: [
        { name: 'Git', level: 'advanced' },
        { name: 'Terminal', level: 'advanced' },
        { name: 'Jira', level: 'advanced' },
        { name: 'Miro', level: 'advanced' },
        { name: 'Docker', level: 'intermediate' }
      ]
    },
    {
      title: 'Office & Productivity',
      skills: [
        { name: 'Excel/Sheets', level: 'expert' },
        { name: 'Word/Docs', level: 'expert' },
        { name: 'PowerPoint/Slides', level: 'expert' },
        { name: 'VBA', level: 'intermediate' }
      ]
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
        <h2>Skills</h2>
        <div className="skills-container">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="skill-category"
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <h3>{category.title}</h3>
              <div className="skill-bars">
                {category.skills.map((skill, index) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill.name}
                    level={skillLevels[skill.level]}
                    levelName={skill.level}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SkillsGrid; 