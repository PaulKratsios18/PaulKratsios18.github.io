import React from 'react';
import { motion } from 'framer-motion';

const Extracurriculars = () => {
  const leadership = [
    {
      title: 'Theta Xi Fraternity',
      positions: [
        {
          role: 'Recruitment Chairman',
          date: 'Sep 2023 – Dec 2023',
          bullets: [
            'Utilized data analytics to drive decision–making, optimizing recruitment efforts and monetary efficiency',
            'Orchestrated strategic recruitment campaigns and led a cohesive team to attract outstanding individuals',
          ]
        },
        {
          role: 'Treasurer',
          date: 'Jan 2021 – Dec 2021',
          bullets: [
            'Created and managed a budget of $400k per year',
            'Collaborated with Alumni Association, National HQ, and campus administrators to build community relations',
            'Streamlined financial reporting processes and maintained detailed records for tax compliance'
          ]
        },
      ],
      image: '/assets/images/profile/profile3.jpg'
    },
    {
      title: 'Eagle Scout',
      positions: [
        {
          role: 'Eagle Scout & Junior Assistant Scoutmaster',
          organization: 'Scouts BSA Troop 1',
          location: 'New York, NY',
          date: '2016 - 2020',
          bullets: [
            'Served as Senior Patrol Leader, leading and mentoring 50+ scouts through weekly meetings and monthly camping trips',
            'Managed troop inventory and logistics as Quartermaster, ensuring proper equipment maintenance and distribution',
          ]
        },
        {
          role: 'World Scout Jamboree USA Contingent Quartermaster',
          organization: '24th World Scout Jamboree',
          location: 'Summit Bechtel Reserve, WV',
          date: 'Summer 2019',
          bullets: [
            'Managed equipment and supplies for a contingent of 40+ scouts during the international scouting event',
            'Collaborated with scouts from over 150 countries to promote global citizenship and cultural exchange'
          ]
        }
      ],
        image: '/assets/images/profile/profile3.jpg'
    }
  ];

  const athletics = [
    {
      title: 'RPI Ice Hockey',
      positions: [{
        role: 'RPI American Collegiate Hockey Association Men\'s Ice Hockey Team',
        date: 'Fall 2020 – Spring 2025',
        bullets: []
      }],
      image: '/assets/images/profile/profile3.jpg'
    },
    {
      title: 'Spartan Trifecta 2024',
      positions: [{
        role: 'Spartan Trifecta - Mount Killington',
        location: 'Killington, VT',
        date: 'September 2024',
        bullets: []
      }],
      image: '/assets/images/profile/profile3.jpg'
    },
    {
      title: 'IRONMAN 70.3 MUSSELMAN',
      positions: [{
        role: 'IRONMAN 70.3',
        location: 'Geneva, NY',
        date: 'July 2024',
        bullets: []
      }],
      image: '/assets/images/profile/profile3.jpg'
    },
    {
      title: 'IRONMAN 70.3 NEW YORK',
      positions: [{
        role: 'IRONMAN 70.3',
        location: 'Jones Beach, NY',
        date: 'September 2023',
        bullets: []
      }],
      image: '/assets/images/profile/profile3.jpg'
    },
    {
      title: 'Spartan Beast 2023',
      positions: [{
        role: 'Spartan Beast - Mount Killington',
        location: 'Killington, VT',
        date: 'September 2023',
        bullets: []
      }],
      image: '/assets/images/profile/profile3.jpg'
    }
  ];

  return (
    <section id="extracurriculars" className="extracurriculars-section">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2>Leadership & Athletics</h2>
        
        <div className="section-container">
          <h3 className="section-title">Leadership Experience</h3>
          <div className="leadership-grid">
            {leadership.map((item, index) => (
              <motion.div
                key={index}
                className="extracurricular-card leadership-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="card-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="card-content">
                  <h3>{item.title}</h3>
                  {item.positions.map((position, posIndex) => (
                    <div key={posIndex} className="position-content">
                      <div className="position-header">
                        <h4>{position.role}</h4>
                        {position.organization && (
                          <span className="organization">
                            {position.organization} – {position.location}
                          </span>
                        )}
                        {position.date && <span className="date">{position.date}</span>}
                      </div>
                      {position.bullets.length > 0 && (
                        <ul className="position-bullets">
                          {position.bullets.map((bullet, bulletIndex) => (
                            <li key={bulletIndex}>{bullet}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="section-container">
          <h3 className="section-title">Athletic Achievements</h3>
          <div className="athletics-grid">
            {athletics.map((item, index) => (
              <motion.div
                key={index}
                className="extracurricular-card athletic-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="card-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="card-content">
                  <h3>{item.title}</h3>
                  {item.positions.map((position, posIndex) => (
                    <div key={posIndex} className="position-content">
                      <div className="position-header">
                        <h4>{position.role}</h4>
                        {position.location && (
                          <span className="organization">
                            {position.location}
                          </span>
                        )}
                        {position.date && <span className="date">{position.date}</span>}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Extracurriculars; 