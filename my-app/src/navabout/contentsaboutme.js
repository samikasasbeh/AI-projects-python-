import React, { useState } from 'react';
import styles from "./contentsaboutme.module.css";
import { FaLinkedin, FaEnvelope, FaGithub, FaPhone } from 'react-icons/fa';

function AboutMe() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [showContactIcons, setShowContactIcons] = useState(false);

  const handleParagraphClick = () => {
    setShowParagraph(!showParagraph);
    setShowContactIcons(false);
  }

  const handleContactClick = () => {
    setShowContactIcons(!showContactIcons);
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>About Me</h2>
      <button className={styles.button} onClick={handleParagraphClick}>Click to know a little about me!</button>
      {showParagraph && 
        <div className={styles.content}>
          <p className={styles.paragraph}>Hello and welcome to my portfolio website! My name is Sami Kasasbeh, and I am a Computer Science student at Dalhousie University in Canada. With a passion for coding and AI, I specialize in both frontend and backend development and stay up-to-date with the latest technologies. On this website, you will find a showcase of my latest projects, where I aim to create high-quality, efficient, and user-friendly applications that meet clients' needs. Additionally, you will find a glimpse of what I work on in my spare time, demonstrating my commitment to continuous learning and improvement. Thank you for visiting, and please feel free to explore my work!</p>
          <button className={styles.contactButton} onClick={handleContactClick}>How to Reach Out</button>
          {showContactIcons &&
            <div className={styles.iconContainer}>
              <a href="https://www.linkedin.com/in/samikasasbeh/" target="_blank" rel="noopener noreferrer"><FaLinkedin className={styles.icon} /></a>
              <a href="mailto:sami.kasasbeh@gmail.com"><FaEnvelope className={styles.icon} /></a>
              <a href="https://github.com/SamiKasasbeh" target="_blank" rel="noopener noreferrer"><FaGithub className={styles.icon} /></a>
              <a href="tel:+14165356260"><FaPhone className={styles.icon} /></a>
            </div>
          }
        </div>
      }
    </div>
  );
}

export default AboutMe;
