import React from 'react';
import { motion } from 'framer-motion';
import { FaSwimmer, FaBiking, FaRunning, FaClock } from 'react-icons/fa';

interface Position {
  role?: string;
  organization?: string;
  location?: string;
  date?: string;
  bullets: string[];
  distances?: {
    swim?: string;
    bike?: string;
    run?: string;
  };
  time?: string;
}

interface ExtracurricularItem {
  title: string;
  location?: string;
  positions: Position[];
  image: string;
  logo?: string;
}

const Extracurriculars = () => {
  const leadership: ExtracurricularItem[] = [
    {
      title: 'Theta Xi Fraternity',
      logo: 'assets/images/extracurriculars/logos/thetaxiLogo.png',
      location: 'RPI - Troy, NY',
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
      image: '/assets/images/extracurriculars/thetaXi_1.png',
    },
    {
      title: 'Eagle Scout',
      logo: 'assets/images/extracurriculars/logos/2024_Troop1-LOGO.png',
      location: 'New York, NY',
      positions: [
        {
          role: 'Eagle Scout & Junior Assistant Scoutmaster',
          organization: 'Scouts BSA Troop 1',
          date: '2010 - 2020',
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
      image: '/assets/images/extracurriculars/eagleScout_1.png'
    }
  ];

  const athletics: ExtracurricularItem[] = [
    {
      title: 'RPI ACHA Ice Hockey Team',
      logo: 'assets/images/extracurriculars/logos/rpiACHALogo.png',
      positions: [{
        location: 'Troy, NY',
        date: 'Fall 2020 - Spring 2025',
        bullets: []
      }],
      image: '/assets/images/extracurriculars/hockey_1.png'
    },
    {
      title: 'America Coast to Coast Bike Tour',
      logo: 'assets/images/extracurriculars/logos/apogee_logo.png',
      positions: [{
        location: 'USA',
        date: 'Summer 2018',
        bullets: [],
        distances: {
          bike: '3,000 mi'
        },
        time: '6 weeks'
      }],
      image: '/assets/images/extracurriculars/ACC_3.png'
    },
    {
      title: 'Spartan Trifecta',
      logo: 'assets/images/extracurriculars/logos/spartanTrifectaLogo.png',
      positions: [{
        location: 'Killington, VT',
        date: 'September 2024',
        bullets: [],
        distances: {
          run: '3+ mi | 6+ mi | 13+ mi'
        },
        time: '07:13:52'
      }],
      image: '/assets/images/extracurriculars/spartanTrifecta_1.png'
    },
    {
      title: 'IRONMAN 70.3 MUSSELMAN',
      logo: 'assets/images/extracurriculars/logos/IM23_703Musselman_Logo.png',
      positions: [{
        location: 'Geneva, NY',
        date: 'July 2024',
        bullets: [],
        distances: {
          swim: '1.2 mi',
          bike: '56 mi',
          run: '13.1 mi'
        },
        time: '05:32:32'
      }],
      image: '/assets/images/extracurriculars/IM70.3Musselman_1.png'
    },
    {
      title: 'Helderberg to Hudson HM',
      logo: 'assets/images/extracurriculars/logos/helderbergToHudsonLogo.png',
      positions: [{
        location: 'Albany, NY',
        date: 'April 2024',
        bullets: [],
        distances: {
          run: '13.1 miles'
        },
        time: '01:38:48'
      }],
      image: '/assets/images/extracurriculars/helderbergToHudson_1.png'
    },
    {
      title: 'IRONMAN 70.3 NEW YORK',
      logo: 'assets/images/extracurriculars/logos/70.3_New_York_Logo.png',
      positions: [{
        location: 'Jones Beach, NY',
        date: 'September 2023',
        bullets: [],
        distances: {
          swim: '1.2 mi',
          bike: '56 mi',
          run: '13.1 mi'
        },
        time: '06:03:27'
      }],
      image: '/assets/images/extracurriculars/IM70.3NY_1.png'
    },
    {
      title: 'Spartan Beast',
      logo: 'assets/images/extracurriculars/logos/spartan_beast_logo.png',
      positions: [{
        location: 'Killington, VT',
        date: 'September 2023',
        bullets: [],
        distances: {
          run: '13+ miles'
        },
        time: '04:32:54'
      }],
      image: '/assets/images/extracurriculars/spartanBeast_1.png'
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
                whileHover={{ scale: 1.02 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="card-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="card-content">
                  <div className="card-header">
                    {item.logo && (
                      <div className="event-logo">
                        <img src={`${process.env.PUBLIC_URL}/${item.logo}`} alt={`${item.title} logo`} />
                      </div>
                    )}
                    <h3>{item.title}</h3>
                  </div>
                  <span className="location">{item.location}</span>
                  {item.positions.map((position, posIndex) => (
                    <div key={posIndex} className="position-content">
                      <div className="position-header">
                        <h4>{position.role}</h4>
                        {position.organization && (
                          <span className="organization">
                            {position.organization}
                            {position.location && ` – ${position.location}`}
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
                whileHover={{ scale: 1.02 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="card-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="card-content">
                  <div className="card-header">
                    {item.logo && (
                      <div className="event-logo">
                        <img src={`${process.env.PUBLIC_URL}/${item.logo}`} alt={`${item.title} logo`} />
                      </div>
                    )}
                    <h3>{item.title}</h3>
                  </div>
                  <span className="location">{item.location}</span>
                  {item.positions.map((position, posIndex) => (
                    <div key={posIndex} className="position-content">
                      <div className="position-header">
                        {position.location && position.location !== item.location && (
                          <span className="location">{position.location}</span>
                        )}
                        {position.date && <span className="date">{position.date}</span>}
                      </div>
                      {position.distances && (
                        <>
                          <div className="race-distances">
                            <div className={`distance-item ${(position.distances.swim || position.distances?.run?.includes('|')) ? 'triathlon' : ''}`}>
                              {position.distances.swim ? (
                                <>
                                  {[
                                    { icon: <FaSwimmer />, distance: position.distances.swim },
                                    { icon: <FaBiking />, distance: position.distances.bike },
                                    { icon: <FaRunning />, distance: position.distances.run }
                                  ].map((item, index) => (
                                    <React.Fragment key={index}>
                                      {index > 0 && <span className="separator">|</span>}
                                      <div className="discipline-group">
                                        <span className="discipline-icon">{item.icon}</span>
                                        <span className="distance">{item.distance}</span>
                                      </div>
                                    </React.Fragment>
                                  ))}
                                </>
                              ) : position.distances?.run?.includes('|') ? (
                                <>
                                  {position.distances.run.split('|').map((distance, index) => (
                                    <React.Fragment key={index}>
                                      {index > 0 && <span className="separator">|</span>}
                                      <div className="discipline-group">
                                        <span className="discipline-icon">
                                          <FaRunning />
                                        </span>
                                        <span className="distance">{distance.trim()}</span>
                                      </div>
                                    </React.Fragment>
                                  ))}
                                </>
                              ) : (
                                <div className="discipline-group">
                                  <span className="discipline-icon">
                                    {position.distances.bike ? <FaBiking /> : <FaRunning />}
                                  </span>
                                  <span className="distance">
                                    {position.distances.bike || position.distances.run}
                                  </span>
                                </div>
                              )}
                            </div>
                          </div>
                          {position.time && (
                            <div className="time-display">
                              <span className="discipline-icon"><FaClock /></span>
                              <span className="time">{position.time}</span>
                            </div>
                          )}
                        </>
                      )}
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