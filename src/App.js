import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
import styles from './App.module.scss';
import bgImage from './media/IMG_0236.JPG';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import About from './components/About/About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  )
}

function Home() {
  return (
    <div className="App">
      <div className={styles.myContainer}>
      <Navbar />
        <div className={styles.myTextContainer}>
          <h1 className="fs-1 fw-bold text-white mb-0">Frontend Developer</h1>
          <p className={`${styles.myIntro}`}>Specializing in <span className="text-decoration-underline">ReactJS</span> and determined<br/>to deliver seamless products.</p>
          <a href="#projects"><button className="btn btn-outline-light fs-3 m-3">My Work</button></a>
          <a href="#contact"><button className="btn btn-outline-light fs-3 m-3">My Information</button></a>
        </div> 
      </div>
      <div className={styles.imgContainer}>
          <img src={bgImage} className={styles.img} alt="backgroundImage" />
      </div>
      <Projects />
      <About />
    </div>
  );
}

export default App;
