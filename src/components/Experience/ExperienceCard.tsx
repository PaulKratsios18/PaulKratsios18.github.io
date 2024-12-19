import React from 'react';

interface ExperienceCardProps {
  title: string;
  company: string;
  location: string;
  date: string;
  expected?: string;
  logo: string;
  bullets: string[];
}

const ExperienceCard = ({
  title,
  company,
  location,
  date,
  logo,
  bullets
}: ExperienceCardProps) => {
  return (
    <div className="experience-card">
      <div className="experience-header">
        <div className="company-logo">
          <img src={logo} alt={`${company} logo`} />
        </div>
        <div className="experience-info">
          <h3>{title}</h3>
          <h4>{company} – {location}</h4>
        </div>
        <span className="experience-date">{date}</span>
      </div>
      <ul className="experience-bullets">
        {bullets.map((bullet, index) => (
          <li key={index}>{bullet}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard; 