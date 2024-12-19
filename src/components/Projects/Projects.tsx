import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard.tsx';

const Projects = () => {
  const projects = [
    {
      title: 'Dinder',
      description: 'A web application designed to make group restaurant decisions fun and collaborative by letting users swipe left or right on restaurant options.',
      detailedDescription: 'Dinder uses advanced ranking and matching algorithms to find the perfect spot for everyone. Users can host or join sessions using unique codes, set preferences like cuisine and price range, and see matches in real-time.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
      image: '/assets/images/dinder/thumbnail.png',
      videos: [
        {
          url: '/assets/videos/dinder/demo-setup.mp4',
          caption: 'Setting up a new dining session'
        },
        {
          url: '/assets/videos/dinder/demo-match.mp4',
          caption: 'Finding restaurant matches'
        },
        {
          url: '/assets/videos/dinder/demo-results.mp4',
          caption: 'Viewing final results'
        },
        {
          url: '/assets/videos/dinder/demo-matchless.mp4',
          caption: 'Handling no matches scenario'
        }
      ],
      additionalImages: [
        {
          url: '/assets/images/dinder/HostLobby-Post-PreferenceSelection.png',
          caption: 'Host lobby interface after preference selection'
        },
        {
          url: '/assets/images/dinder/MatchScreen.png',
          caption: 'Match results screen'
        }
      ],
      github: 'https://github.com/PaulKratsios18/Dinder',
      features: [
        {
          title: "Group Matchmaking",
          description: "Host or join sessions using a unique code to decide as a group."
        },
        {
          title: "Preference Filtering",
          description: "Set preferences like cuisine, price range, and location."
        },
        {
          title: "Interactive Swiping",
          description: "Swipe through restaurant options with detailed info (e.g., ratings, distance)."
        },
        {
          title: "Real-Time Results",
          description: "See matches live and make decisions easily."
        }
      ]
    },
    {
      title: 'HiroFit',
      description: 'A machine learning-based fitness app that utilizes computer vision to track workouts and provide real-time improvement tips.',
      detailedDescription: 'Led iOS frontend development for HiroFit, creating a user-friendly interface for workout tracking. The app uses computer vision to monitor movements and provides personalized feedback based on performance.',
      technologies: ['Swift', 'iOS', 'Computer Vision', 'Machine Learning'],
      image: '/assets/images/hirofit/thumbnail.png',
      additionalImages: [
        {
          url: '/assets/images/hirofit/workoutselection.png',
          caption: 'Workout Selection Screen'
        },
        {
          url: '/assets/images/hirofit/cameraview.png',
          caption: 'Camera View'
        },
        {
          url: '/assets/images/hirofit/results.png',
          caption: 'Results Screen'
        }
      ],
      github: 'https://github.com/PaulKratsios18/HiroFit'
    },
    {
      title: 'Adaptive Agents in Uncertain Environments',
      description: 'Research project exploring reinforcement learning agents\' adaptation to uncertainty in variations of the Monty Hall problem.',
      detailedDescription: 'A dual-learning algorithm enables agents to optimize their decision-making while modeling the cognitive traits of other agents. The project includes analysis of different decision-making strategies in uncertain environments.',
      technologies: ['Python', 'TensorFlow', 'Reinforcement Learning', 'Probability Theory'],
      image: '/assets/images/agents/agentlearning.png',
      github: 'https://github.com/PaulKratsios18/AdaptiveAgentsInUncertainEnvironments'
    },
    {
      title: 'Hockey Puck Tracking System',
      description: 'A sophisticated computer vision system designed to track hockey pucks and analyze stick movements in real-time.',
      detailedDescription: 'Leverages advanced image processing and machine learning techniques for precise puck detection and tracking. The system includes stick movement analysis for comprehensive training insights and features a user-friendly interface for visualizing tracking results.',
      technologies: ['Python', 'OpenCV', 'Machine Learning', 'Computer Vision'],
      image: '/assets/images/hockey/tracking.png',
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