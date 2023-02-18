import React, { useState } from 'react';

import styles from "./contentsaboutme.module.css";

function AboutMe() {
  const [showParagraph, setShowParagraph] = useState(false);

  const handleClick = () => {
    setShowParagraph(!showParagraph);
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>About Me</h2>
      <button className={styles.button} onClick={handleClick}>Click to know a little about me!</button>
      {showParagraph && <p className={styles.paragraph}>Hello and welcome to my portfolio website! My name is Sami Kasasbeh, and I am a Computer Science student at Dalhousie University in Canada. With a passion for coding and AI, I specialize in both frontend and backend development and stay UpToDate with the latest technologies. On this website, you will find a showcase of my latest projects, where I aim to create high-quality, efficient, and user-friendly applications that meet clients' needs. Additionally, you will find a glimpse of what I work on in my spare time, demonstrating my commitment to continuous learning and improvement. Thank you for visiting, and please feel free to explore my work!</p>}
    </div>
  );
}

export default AboutMe;


