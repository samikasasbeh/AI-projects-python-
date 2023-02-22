/*import React, { useState } from 'react';
import './projects.css';

import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import image4 from './images/image4.jpg';
import mainImage from './images/main-image.jpg';

function ProjectCategories() {
  const [showCategories, setShowCategories] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const handleClick = () => {
    setShowCategories(!showCategories);
  };

  const handleBackClick = () => {
    setShowCategories(false);
  };

  const handleCategoryHover = (category) => {
    setHoveredCategory(category);
  };

  const handleCategoryLeave = () => {
    setHoveredCategory(null);
  };

  return (
    <div className="project-categories">
      {showCategories ? (
        <div className="categories-container">
          <div className="back-button" onClick={handleBackClick}>
            Back
          </div>

          <div className="category" onMouseEnter={() => handleCategoryHover("Category 1")} onMouseLeave={handleCategoryLeave}>
            <img src={image1} alt="category-1" />
            {hoveredCategory === "Category 1" && <div className="text">JavaScript Projects & React</div>}
          </div>
          <div className="category" onMouseEnter={() => handleCategoryHover("Category 2")} onMouseLeave={handleCategoryLeave}>
            <img src={image2} alt="category-2" />
            {hoveredCategory === "Category 2" && <div className="text">Backend Projects with Python & Java</div>}
          </div>
          <div className="category" onMouseEnter={() => handleCategoryHover("Category 3")} onMouseLeave={handleCategoryLeave}>
            <img src={image3} alt="category-3" />
            {hoveredCategory === "Category 3" && <div className="text">AI & Machine Learning Projects</div>}
          </div>
          <div className="category" onMouseEnter={() => handleCategoryHover("Category 4")} onMouseLeave={handleCategoryLeave}>
            <img src={image4} alt="category-4" />
            {hoveredCategory === "Category 4" && <div className="text">Website Projects</div>}
          </div>
        </div>
      ) : (
        
        <div className="square" onClick={handleClick}>
          <img src={mainImage} alt="main-image" />
          <div className="text"></div>
        </div>
        
      )}
    </div>
  );
}

export default ProjectCategories;*/

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import "./projects.css";

function GroupExample() {
  return (
    <CardGroup className="d-flex justify-content-center align-items-center">
      <Card className="mx-3 mb-3">
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card className="mx-3 mb-3">
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card className="mx-3 mb-3">
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card className="mx-3 mb-3">
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default GroupExample;