import React, { useState, useEffect } from "react";
import "./home.scss";

const PostsData = [
  {
    category: "News",
    title: "CNN Acquire BEME",
    text: "CNN purchased Casey Neistat's Beme app for $25million.",
    image: "https://source.unsplash.com/user/erondu/600x400",
  },
  {
    category: "Travel",
    title: "Nomad Lifestyle",
    text: "Learn our tips and tricks on living a nomadic lifestyle",
    image: "https://source.unsplash.com/user/_vickyreyes/600x400",
  },
  {
    category: "Development",
    title: "React and the WP-API",
    text: "The first ever decoupled starter theme for React & the WP-API",
    image: "https://source.unsplash.com/user/ilyapavlov/600x400",
  },
  {
    category: "News",
    title: "CNN Acquire BEME",
    text: "CNN purchased Casey Neistat's Beme app for $25million.",
    image: "https://source.unsplash.com/user/erondu/600x400",
  },
  {
    category: "Travel",
    title: "Nomad Lifestyle",
    text: "Learn our tips and tricks on living a nomadic lifestyle",
    image: "https://source.unsplash.com/user/_vickyreyes/600x400",
  },
  {
    category: "Development",
    title: "React and the WP-API",
    text: "The first ever decoupled starter theme for React & the WP-API",
    image: "https://source.unsplash.com/user/ilyapavlov/600x400",
  },
];

function Main() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(PostsData);
  }, []);

  return (
    <body> 
      <div>
    <header className="app-header"></header>
    <Title />
    <div className="app-card-list" id="app-card-list">
      {posts.map((post, index) => (
        <Card key={index} details={post} />
      ))}
    </div>
  </div>
  </body>
    
  );
}

function Title() {
  return (
    <section className="app-title">
      <div className="app-title-content">
        <h1>Latest News</h1>
        <p>Covering March & April 2015</p>
        
      </div>
    </section>
  );
}

function Button() {
  return (
    <button className="button button-primary">
      <i className="fa fa-chevron-right"></i> Find out more
    </button>
  );
}

function CardHeader(props) {
  const { image, category } = props;
  const style = {
    backgroundImage: "url(" + image + ")",
  };

  return (
    <header style={style} className="card-header">
      <h4 className="card-header--title">{category}</h4>
    </header>
  );
}
function CardBody(props) {
  return (
    <div className="card-body">
      <p className="date">March 20 2015</p>
      
      <h2>{props.title}</h2>
      
      <p className="body-content">{props.text}</p>
      
      <Button />
    </div>
  );
}

function Card(props) {
  return (
    <article className="card">
      <CardHeader category={props.details.category} image={props.details.image}/>
      <CardBody title={props.details.title} text={props.details.text}/>
    </article>
  );
}

/*ReactDOM.render(
  <Main />,
  document.getElementById('app')
);*/

export default Main;