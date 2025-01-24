import React from 'react';
import './Experiences.css';

const experiences = [
  {
    date: '2024 - present',
    role: 'Fullstack developer/consultant',
    company: 'Logdigital',
    description:
      'We design and build responsive user interfaces, develop secure server-side logic, and manage databases to deliver scalable, high-performance applications. I collaborate with clients and teams to assess technical needs, recommend suitable solutions, and oversee project execution.',
    tags: ['react', 'Nodejs', 'Mongodb', 'tailwindCss'],
  },
  {
    date: 'Jan 2024 - Nov 2024',
    role: 'Frontend developer',
    company: 'Style IT',
    description:
      'Frontend Developer at StyleIT, transforming innovative designs into seamless, functional code. Redefined the web development process by streamlining the implementation of user-focused interfaces and ensuring optimal performance across platforms.',
    tags: ['react', 'Framer motion', 'tailwindCss'],
  },
  {
    date: 'Dec 2022 - May 2024',
    role: 'Fullstack developer',
    company: 'Diadem Plc - California',
    description:
      'Developed and maintained a bespoke e-commerce platform for Diadem Plc, a company specializing in Nigerian cuisine, employing React js for frontend and Node.js, Express.js, and MongoDB for backend. Integrated secure payment options, ensuring seamless transactions.',
    tags: ['Nodejs', 'react', 'Mongodb', 'tailwindCss'],
  },
  {
    date: 'Aug 2022 - Present',
    role: 'Fullstack developer',
    company: 'Oden Unlimited - United Kingdom',
    description:
      'The team collaborated to develop Oden Unlimited, leveraging Node.js, MongoDB, and EJS. Responsible for translating design concepts into responsive web elements, managing debugging processes, and implementing features such as page rendering and automated transactions.',
    tags: ['Nodejs', 'MongoDB', 'EJS'],
  },
];

const Experiences = () => {
  return (
    <section className="experiences">
      <h1 className="experiences-title">Experiences</h1>
      <div className="experiences-list">
        {experiences.map((experience, index) => (
          <div key={index} className="experience">
            <div className="experience-date">{experience.date}</div>
            <div className="experience-content">
              <h2 className="experience-role">
                {experience.role} - <span className="experience-company">{experience.company}</span>
              </h2>
              <p className="experience-description">{experience.description}</p>
              <div className="experience-tags">
                {experience.tags.map((tag, idx) => (
                  <span key={idx} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experiences;
