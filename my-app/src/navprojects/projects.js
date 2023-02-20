import React, { useState } from 'react';
import './projects.css';

import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import image4 from './images/image4.jpg';
import mainImage from './images/main-image.jpg';

function ProjectCategories() {
  const [showCategories, setShowCategories] = useState(false);

  const handleClick = () => {
    setShowCategories(!showCategories);
  };

  const handleBackClick = () => {
    setShowCategories(false);
  };

  return (
    <div className="project-categories">
      {showCategories ? (
        <div className="categories-container">
          <div className="back-button" onClick={handleBackClick}>
            Back
          </div>
          <div className="category">
            <img src={image1} alt="category-1" />
          </div>
          <div className="category">
            <img src={image2} alt="category-2" />
          </div>
          <div className="category">
            <img src={image3} alt="category-3" />
          </div>
          <div className="category">
            <img src={image4} alt="category-4" />
          </div>
        </div>
      ) : (
        <div className="square" onClick={handleClick}>
          <img src={mainImage} alt="main-image" />
        </div>
      )}
    </div>
  );
}

export default ProjectCategories;