import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface ExpandedProjectCardProps {
  title: string;
  description: string;
  detailedDescription?: string;
  technologies: string[];
  images?: string[];
  video?: string;
  github?: string;
  live?: string;
  onClose: () => void;
}

const ExpandedProjectCard = ({
  title,
  description,
  detailedDescription,
  technologies,
  images = [],
  video,
  github,
  live,
  onClose,
}: ExpandedProjectCardProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const mediaItems = video ? [video, ...images] : images;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % mediaItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + mediaItems.length) % mediaItems.length);
  };

  return (
    <motion.div
      className="expanded-project-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="expanded-project-content"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
      >
        <button className="close-button" onClick={onClose}>
          <FaTimes />
        </button>

        <div className="media-carousel">
          {mediaItems.length > 1 && (
            <>
              <button className="carousel-button prev" onClick={prevSlide}>
                <FaChevronLeft />
              </button>
              <button className="carousel-button next" onClick={nextSlide}>
                <FaChevronRight />
              </button>
            </>
          )}
          
          <div className="media-container">
            {currentSlide === 0 && video ? (
              <video autoPlay loop muted controls>
                <source src={`${process.env.PUBLIC_URL}${video}`} type="video/mp4" />
              </video>
            ) : (
              <img src={`${process.env.PUBLIC_URL}${mediaItems[currentSlide]}`} alt={`${title} - ${currentSlide + 1}`} />
            )}
          </div>
        </div>

        <div className="project-details">
          <h2>{title}</h2>
          <p className="description">{description}</p>
          {detailedDescription && (
            <p className="detailed-description">{detailedDescription}</p>
          )}
          
          <div className="tech-stack">
            {technologies.map((tech) => (
              <span key={tech} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>

          <div className="project-links">
            {github && (
              <motion.a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
                whileHover={{ scale: 1.1 }}
              >
                <FaGithub /> View Code
              </motion.a>
            )}
            {live && (
              <motion.a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="live-link"
                whileHover={{ scale: 1.1 }}
              >
                <FaExternalLinkAlt /> Live Demo
              </motion.a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ExpandedProjectCard; 