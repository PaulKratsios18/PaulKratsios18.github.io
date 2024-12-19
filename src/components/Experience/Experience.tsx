import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard.tsx';

const Experience = () => {
  const experiences = [
    {
      title: 'Machine Learning Engineer Intern',
      company: 'CyberSaint Security',
      location: 'Boston, MA (Remote)',
      date: 'May 2024 - August 2024',
      logo: `${process.env.PUBLIC_URL}/assets/images/companies/cybersaint.jpg`,
      bullets: [
        'Led the design and development of a project to quantify reputation damage from cyber attacks by assessing equity losses, market share, competitor performance, and market sentiment',
        'Analyzed, modeled, and benchmarked machine learning models to predict financial loss from cyber attacks',
        'Maintained a cyber-focused IBM WatsonX LLM used to generate actionable insights on cyber attacks',
        'Developed crosswalks for cyber risk frameworks to enhance predictive accuracy and risk assessment'
      ]
    },
    {
      title: 'Data and Finance Intern',
      company: 'Parkbridge Financial',
      location: 'New York, NY',
      date: 'Jun 2023 - Aug 2023',
      logo: `${process.env.PUBLIC_URL}/assets/images/companies/parkbridge.jpg`,
      bullets: [
        'Collected and organized essential data from over 100 commercial mortgage-backed security contracts',
        'Utilized Excel VBA to aggregate, arrange, and format data from multiple sources'
      ]
    },
    {
      title: 'Data Science Intern',
      company: 'Kapitus',
      location: 'New York, NY (Remote)',
      date: 'Sep 2022 - Dec 2022',
      logo: `${process.env.PUBLIC_URL}/assets/images/companies/kapitus.jpg`,
      bullets: [
        'Aided in the development of an application that leverages a proprietary risk score model to price loans accurately',
        'Created a system to reorganize the team\'s test code to be more readable, editable, and efficient',
        'Implemented policy and pricing decision rules created by the Risk Team'
      ]
    },
    {
      title: 'Software Engineer Intern',
      company: 'HiroFit',
      location: 'Troy, NY',
      date: 'May 2022 - Sep 2022',
      logo: `${process.env.PUBLIC_URL}/assets/images/companies/hirofit.png`,
      bullets: [
        'Led iOS development for HiroFit, a machine learning-based fitness app',
        'Designed and implemented the front end of HiroFit\'s iOS app using Swift'
      ]
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2>Professional Experience</h2>
        <div className="experience-grid">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ExperienceCard {...experience} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience; 