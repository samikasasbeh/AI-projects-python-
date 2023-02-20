import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from "./navabout/aboutme";
import ProjectCategories from "./navprojects/projects";
import styles from './App.css';

function App() {
  return (
    <Router>
      <div className={styles.App}>
        <header>
          <h1>Sami Kasasbeh</h1>
          <nav>
            <Link to="/" className={styles.Link}>Home</Link>
            <Link to="/navprojects/projects" className={styles.Link}>Projects</Link>
            <Link to="/navabout/aboutme" className={styles.Link}>About</Link>
            <Link to="/navaboutporto/portofolio" className={styles.Link}>Learn about this page</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/navabout/aboutme" element={<About />} />
          <Route path = "/navprojects/projects" element={<ProjectCategories/>}/>
        </Routes>
        <footer>
          <p>© 2023 Sami Kasasbeh</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;