import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaTimes, FaChevronLeft, FaChevronRight, FaExternalLinkAlt } from 'react-icons/fa';

interface ProjectCardProps {
  title: string;
  description: string;
  detailedDescription?: string;
  technologies: string[];
  image: string;
  imageCaption?: string;
  additionalImages?: Array<{
    url: string;
    caption: string;
    type?: string;
  }>;
  videos?: Array<{
    url: string;
    caption: string;
    type?: string;
  }>;
  github?: string;
  live?: string;
  features?: Array<{
    title: string;
    description: string;
  }>;
}

const ProjectCard = ({
  title,
  description,
  detailedDescription,
  technologies,
  image,
  imageCaption,
  additionalImages = [],
  videos = [],
  github,
  live,
  features = [],
}: ProjectCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Only create media items if there are videos or images
  const hasMedia = videos.length > 0 || additionalImages.length > 0;
  
  // Expanded view media handling (prioritize videos, then additional images)
  const allMedia = hasMedia ? [
    ...videos.map(video => 
      typeof video === 'string' 
        ? { url: video, caption: '', type: '' } 
        : video
    ),
    ...additionalImages.map(img => 
      typeof img === 'string' 
        ? { url: img, caption: '', type: '' } 
        : img
    )
  ].slice(0, 5) : [];

  const mediaItems = allMedia.map(item => ({
    ...item,
    url: item.type === 'youtube' ? item.url : `${process.env.PUBLIC_URL}/${item.url}`
  }));

  // Thumbnail handling
  const thumbnailPath = image ? `${process.env.PUBLIC_URL}/${image}` : null;

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % mediaItems.length);
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev - 1 + mediaItems.length) % mediaItems.length);
  };

  const handleIndicatorClick = (index: number) => {
    setCurrentSlide(index);
  };

  // Add this helper function at the top of the component
  const isVideo = (path: string, type?: string): boolean => {
    return type === 'youtube' || path.endsWith('.mp4');
  };

  const renderMedia = (url: string, type?: string, title?: string) => {
    if (type === 'youtube') {
      const enhancedUrl = `${url}?playsinline=1&rel=0&modestbranding=1`;
      return (
        <iframe
          width="100%"
          height="100%"
          src={enhancedUrl}
          frameBorder="0"
          title={title || 'Project video'}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; playsinline"
          allowFullScreen
        />
      );
    }
    // For local MP4 videos
    return (
      <video 
        src={url} 
        controls 
        playsInline 
        preload="metadata"
        controlsList="nodownload"
      />
    );
  };

  return (
    <>
      <motion.div
        className="project-card"
        whileHover={{ scale: 1.02 }}
        onClick={() => setIsExpanded(true)}
        style={{ cursor: 'pointer' }}
      >
        {thumbnailPath && (
          <div className="project-image">
            <img src={thumbnailPath} alt={title} />
          </div>
        )}
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
              <motion.a 
                href={github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="primary-btn"
                whileHover={{ scale: 1.05 }}
                onClick={(e) => e.stopPropagation()}
              >
                <FaGithub style={{ marginRight: '0.5rem' }} /> GitHub
              </motion.a>
            )}
            {live && (
              <motion.a 
                href={live} 
                target="_blank" 
                rel="noopener noreferrer"
                className="live-button"
                onClick={(e) => e.stopPropagation()}
              >
                Live Demo
              </motion.a>
            )}
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="expanded-project-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsExpanded(false)}
          >
            <motion.div
              className="expanded-project-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-button" onClick={() => setIsExpanded(false)}>
                <FaTimes />
              </button>

              <h2 className="expanded-title">{title}</h2>

              {hasMedia && mediaItems.length > 0 && (
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
                    {isVideo(mediaItems[currentSlide].url, mediaItems[currentSlide].type) ? (
                      <div className="media-wrapper">
                        {renderMedia(
                          mediaItems[currentSlide].url, 
                          mediaItems[currentSlide].type,
                          `${title} - ${mediaItems[currentSlide].caption || 'video'}`
                        )}
                      </div>
                    ) : (
                      <div className="media-wrapper">
                        <img 
                          src={mediaItems[currentSlide].url} 
                          alt={`${title} - ${currentSlide + 1}`} 
                        />
                        {mediaItems[currentSlide].caption && (
                          <p className="media-caption">{mediaItems[currentSlide].caption}</p>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="media-indicators">
                    {mediaItems.map((_, index) => (
                      <button
                        key={index}
                        className={`indicator ${currentSlide === index ? 'active' : ''}`}
                        onClick={() => handleIndicatorClick(index)}
                        aria-label={`View media ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              )}

              <div className="project-details">
                <p className="detailed-description">{detailedDescription}</p>
                
                {features.length > 0 && (
                  <>
                    <h4 className="features-title">Key Features</h4>
                    <ul className="features-list">
                      {features.map((feature, index) => (
                        <li key={index}>
                          <strong>{feature.title}:</strong> {feature.description}
                        </li>
                      ))}
                    </ul>
                  </>
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
                      className="primary-btn expanded-github-btn"
                      whileHover={{ scale: 1.05 }}
                    >
                      <FaGithub style={{ marginRight: '0.5rem' }} /> GitHub
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
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard;