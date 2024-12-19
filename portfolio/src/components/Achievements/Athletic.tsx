import React from 'react';
import { motion } from 'framer-motion';

const Athletic = () => {
  const achievements = [
    {
      title: '2x IRONMAN 70.3 Finisher',
      description: 'Completed two IRONMAN 70.3 triathlons, demonstrating endurance and dedication.'
    },
    {
      title: '2x Spartan Trifecta',
      description: 'Earned the Spartan Trifecta twice, completing Sprint, Super, and Beast races.'
    },
    {
      title: 'America Coast to Coast Bike Tour',
      description: 'Cycled across America, covering over 3,000 miles from coast to coast.'
    },
    {
      title: 'Eagle Scout',
      description: 'Achieved the highest rank in Boy Scouts of America, demonstrating leadership and service.'
    }
  ];

  return (
    <section id="athletic" className="athletic-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="athletic-content"
      >
        <h2>Athletic Achievements</h2>
        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              className="achievement-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h3>{achievement.title}</h3>
              <p>{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Athletic; 