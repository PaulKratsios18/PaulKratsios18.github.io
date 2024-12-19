import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  video?: string;
  github?: string;
  live?: string;
}

const ProjectCard = ({
  title,
  description,
  technologies,
  image,
  video,
  github,
  live,
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="project-card"
      whileHover={{ scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="project-image">
        {video && isHovered ? (
          <video autoPlay loop muted>
            <source src={video} type="video/mp4" />
          </video>
        ) : (
          <img src={image} alt={title} />
        )}
      </div>
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="tech-stack">
          {technologies.map((tech) => (
            <span key={tech} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
        <div className="project-links">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer">
              View Code
            </a>
          )}
          {live && (
            <a href={live} target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard; 