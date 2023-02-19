import React, { useState } from 'react';
import './projects.css';

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
          <div className="category">Category 1</div>
          <div className="category">Category 2</div>
          <div className="category">Category 3</div>
          <div className="category">Category 4</div>
        </div>
      ) : (
        <div className="square" onClick={handleClick}>
          Click to Show Categories
        </div>
      )}
    </div>
  );
}

export default ProjectCategories;