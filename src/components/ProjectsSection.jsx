import React from "react";
import "./ProjectsSection.css";
import { motion } from "framer-motion";


const projects = [
  {
    title: "Log Digital",
    description:
      "LogDigital is a comprehensive marketing site offering a wide range of services including social media management, web development, and digital marketing. The expert team delivers tailored strategies to enhance your online presence, drive traffic, and boost engagement.",
    image: "https://res.cloudinary.com/daxeovezx/image/upload/v1737654413/Screenshot_2025-01-23_184251_dn57wb.png",
    github: "#",
    live: "https://www.logdigitalltd.com/",
    tags: ["Nodejs", "React", "TailwindCSS"],
  },
  {
    title: "Kreate",
    description:
      "Kreate is an innovative platform designed to streamline the job market by connecting employers and job seekers seamlessly. Employers can post job listings with detailed descriptions, requirements, and expectations, while job seekers can browse opportunities, submit applications, and manage their profiles.",
    image: "https://res.cloudinary.com/daxeovezx/image/upload/v1737654412/Screenshot_2025-01-23_184426_a6asd7.png", // Replace with your image URL
    github: "#",
    live: "https://kreate.onrender.com/",
    tags: ["Nodejs", "MongoDB", "JS", "TailwindCSS"],
  },

  {
    title: "Sh-Feet",
    description:
      "SH-FEET is a handcrafted leather footwear brand offering a wide range of stylish, durable, and comfortable designs. The website showcases a collection of meticulously handmade shoes that reflect quality craftsmanship and timeless elegance. Whether for casual or formal occasions.",
    image: "https://res.cloudinary.com/daxeovezx/image/upload/v1737654732/Screenshot_2025-01-23_185140_ssyxhf.png", // Replace with your image URL
    github: "#",
    live: "https://www.shfeet.com.ng/",
    tags: ["Nodejs", "MongoDB", "JS", "TailwindCSS"],
  },

  {
    title: "Epochouse",
    description:
      "Epochouse is a dynamic platform for a cutting-edge recording studio and band. The website highlights their state-of-the-art facilities, professional sound production services, and live performances. With a talented in-house band, Epochouse bridges the gap between exceptional studio recording and electrifying live music experiences.",
    image: "https://res.cloudinary.com/daxeovezx/image/upload/v1737654732/Screenshot_2025-01-23_185041_kux3in.png", // Replace with your image URL
    github: "#",
    live: "https://www.epochousepro.com/",
    tags: ["Nodejs", "MongoDB", "JS", "TailwindCSS"],
  },

  {
    title: "Oden Unlimited",
    description:
      "Oden Lounge is a premium destination for exquisite dining and relaxation. This website showcases a modern lounge that offers a wide selection of delicious meals and expertly crafted drinks. Whether you're looking for a vibrant social spot or a laid-back evening with friends, Oden Lounge delivers an unparalleled experience.",
    image: "https://res.cloudinary.com/daxeovezx/image/upload/v1737663514/Screenshot_2025-01-23_211756_xqwady.png", // Replace with your image URL
    github: "#",
    live: "https://oden-lounge-2g4t.vercel.app/",
    tags: ["Nodejs", "MongoDB", "JS", "TailwindCSS"],
  },

  {
    title: "Diadem Foods",
    description:
      "Diadem Foods is your go-to destination for homemade, finger-licking delicacies. The website offers a mouthwatering array of freshly prepared meals made with the finest ingredients. Whether you're craving traditional favorites or new flavors, Diadem Foods promises an unforgettable culinary experience that feels just like home.",
    image: "https://res.cloudinary.com/daxeovezx/image/upload/v1737666116/Screenshot_2025-01-23_215841_or7s72.png", // Replace with your image URL
    github: "#",
    live: "https://www.diademfoods.com/",
    tags: ["Nodejs", "MongoDB", "JS", "TailwindCSS"],
  },


  {
    title: "Monogram",
    description:
      "Monogram is a sleek e-commerce website clone offering a seamless shopping experience. With features like 'Add to Cart' and a visually appealing layout, it provides a modern interface for showcasing products. Perfect for exploring how an online store can look and function, Monogram delivers style and functionality.",
    image: "https://res.cloudinary.com/daxeovezx/image/upload/v1737654413/Screenshot_2025-01-23_184408_an2x2k.png", // Replace with your image URL
    github: "#",
    live: "https://monogram-five.vercel.app/#",
    tags: ["React", "TailwindCSS"],
  },
  {
    title: "Finance Flow",
    description:
      "Finance Flow is a sleek and intuitive platform designed to simplify cryptocurrency trading and portfolio management. The website features detailed sections on real-time pricing, token insights, and expert trading tips, providing users with a comprehensive guide to navigating the world of digital assets with confidence and ease.",
    image: "https://res.cloudinary.com/daxeovezx/image/upload/v1737654411/Screenshot_2025-01-23_184515_tywjq7.png", // Replace with your image URL
    github: "#",
    live: "https://onojapeter.github.io/Finance-Flow/home.html",
    tags: ["JS", "CSS"],
  },
];

const Projects = () => {
    const bounceAnimation = {
        whileHover: { scale: 1.1, transition: { type: "spring", stiffness: 300 } },
        whileTap: { scale: 0.9 },
    };

  return (
    <section className="projects-section">
      <h1 className="projects-title">Projects</h1>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <motion.div className="project-image">
              <img src={project.image} alt={project.title} />
            </motion.div>
            <div className="project-content">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </a>
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;


