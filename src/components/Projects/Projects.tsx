import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard.tsx';

const Projects = () => {
  const projects = [
    {
      title: 'Dinder',
      description: 'A group dining decision-making platform that makes restaurant selection fun and collaborative through swipe-based interactions.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Google APIs'],
      image: `${process.env.PUBLIC_URL}/assets/images/dinder/homepage.png`,
      // video: `${process.env.PUBLIC_URL}/videos/projects/dinder-demo.mp4`,
      github: 'https://github.com/PaulKratsios18/Dinder',
      live: 'https://dinder-app.com'
    },
    {
      title: 'HiroFit',
      description: 'ML-powered fitness app providing real-time workout tracking and feedback using computer vision.',
      technologies: ['Swift', 'CoreML', 'Computer Vision', 'iOS'],
      image: '/assets/images/hirofit/homepage.png',
      // video: '/videos/projects/hirofit-demo.mp4',
      github: 'https://github.com/PaulKratsios18/HiroFit'
    },
    {
      title: 'Adaptive Agents',
      description: 'Research project exploring reinforcement learning in uncertain environments.',
      technologies: ['Python', 'TensorFlow', 'Reinforcement Learning'],
      // image: '/images/projects/adaptive-agents/main.png',
      github: 'https://github.com/PaulKratsios18/AdaptiveAgentsInUncertainEnvironments'
    },
    {
      title: 'Hockey Puck Tracking',
      description: 'Real-time computer vision system for tracking hockey pucks and analyzing player movements.',
      technologies: ['Python', 'OpenCV', 'Machine Learning'],
      // image: '/images/projects/hockey/tracking.png',
      // video: '/videos/projects/hockey-demo.mp4',
      github: 'https://github.com/PaulKratsios18/HockeyPuckTrackingSystem'
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;