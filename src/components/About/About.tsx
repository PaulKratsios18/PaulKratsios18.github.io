import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect/dist/core';
import GraphemeSplitter from 'grapheme-splitter';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { Engine } from "tsparticles-engine";

const About = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState([false, false, false]);
  
  useEffect(() => {
    const imageSources = [
      `${process.env.PUBLIC_URL}/assets/images/profile/profile1.jpg`,
      `${process.env.PUBLIC_URL}/assets/images/profile/profile2.jpg`,
      `${process.env.PUBLIC_URL}/assets/images/profile/profile3.jpg`
    ];
    
    imageSources.forEach((src, index) => {
      console.log(`Attempting to load image ${index + 1}: ${src}`);
      const img = new Image();
      img.src = src;
      img.onload = () => {
        console.log(`Successfully loaded image ${index + 1}`);
        setImagesLoaded(prev => {
          const newState = [...prev];
          newState[index] = true;
          return newState;
        });
      };
      img.onerror = () => {
        console.error(`Failed to load image ${index + 1}: ${src}`);
      };
    });
  }, []);

  const handleIndicatorClick = (index: number) => {
    setCurrentImage(index);
  };

  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine);
  };

  useEffect(() => {
    const stringSplitter = string => {
      const splitter = new GraphemeSplitter();
      return splitter.splitGraphemes(string);
    };

    const typewriter = new Typewriter('#typewriter', {
      loop: true,
      delay: 45,
      deleteSpeed: 20,
      stringSplitter,
      cursor: '|',
      cursorClassName: 'custom-cursor',
      html: true
    });

    typewriter
      .pauseFor(1000)
      .typeString("Hi, I'm <span class='highlight'>Paul</span> 👋")
      .pauseFor(1000)
      .deleteAll()
      .typeString("I'm a ")
      .typeString("<span class='highlight'>Software Engineer</span> 💻")
      .pauseFor(1000)
      .deleteChars(20)
      .typeString("n ")
      .typeString("<span class='highlight'>Athlete</span> 🚴‍♂️")
      .pauseFor(1000)
      .deleteChars(12)
      .typeString("a ")
      .typeString("<span class='highlight'>Lifelong Learner</span> 📚")
      .pauseFor(1000)
      .deleteChars(19)
      .start();
  }, []);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % imagesLoaded.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(imageInterval);
  }, [imagesLoaded.length]);

  return (
    <section id="about" className="about-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="about-content"
      >
        <div className="banner-container">
          <div className="particle-banner">
            <Particles
              id="banner-particles"
              init={particlesInit}
              options={{
                fullScreen: { enable: false },
                particles: {
                  number: { value: 150, density: { enable: true, value_area: 800 } },
                  color: { value: "#888888" },
                  shape: {
                    type: "circle",
                    stroke: { width: 0, color: "#000000" },
                    polygon: { nb_sides: 5 }
                  },
                  opacity: {
                    value: 0.5,
                    random: false,
                    anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
                  },
                  size: {
                    value: 3,
                    random: true,
                    anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
                  },
                  line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#555555",
                    opacity: 0.4,
                    width: 1
                  },
                  move: {
                    enable: true,
                    speed: 6,
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: { enable: false, rotateX: 600, rotateY: 1200 }
                  }
                },
                interactivity: {
                  detect_on: "canvas",
                  events: {
                    onhover: { enable: false, mode: "repulse" },
                    onclick: { enable: false, mode: "push" },
                    resize: true
                  }
                },
                retina_detect: true,
                background: {
                  color: "transparent"
                }
              }}
            />
            <div id="typewriter" className="typewriter-text"></div>
          </div>
        </div>
        <div className="about-grid">
          <div className="about-text">
            <p>
              I'm a senior at Rensselaer Polytechnic Institute, graduating in
              December 2024 with a Dual Bachelor's in Computer Science and Cognitive Science, plus a Minor in Finance.
              My passion lies at the intersection of Software and Cognition.
            </p>
            <p>
              With a background in machine learning, data science, and software engineering, 
              I have contributed to a wide array of projects. These range from creating an application 
              that assists in making group dining decisions to developing algorithms for predicting 
              reputation damage and financial loss following cyber attacks.
            </p>
            <motion.div
              className="cta-buttons"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <a href="#projects" className="primary-btn">View Projects</a>
            </motion.div>
          </div>
          <div className="about-image">
            {imagesLoaded.map((loaded, index) => (
              <img
                key={index}
                src={`${process.env.PUBLIC_URL}/assets/images/profile/profile${index + 1}.jpg`}
                alt={`Paul Kratsios ${index + 1}`}
                className={`${currentImage === index ? 'active' : ''} ${loaded ? 'loaded' : ''}`}
                style={{ display: loaded ? 'block' : 'none' }}
              />
            ))}
            <div className="image-indicators">
              {imagesLoaded.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${currentImage === index ? 'active' : ''}`}
                  onClick={() => handleIndicatorClick(index)}
                  aria-label={`View image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About; 