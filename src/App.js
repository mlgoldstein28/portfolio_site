import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import styles from './App.module.scss';
import bgImage from './media/IMG_0236.JPG';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import AppChip from './src-chip/App';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/chip" element={<AppChip />}></Route>
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
          <h1 className={styles.myName}>Michael Goldstein</h1>
          <p className={styles.myIntro}><span className="fw-bold">Frontend Developer</span><br/>Specializing in <span className="text-decoration-underline">ReactJS</span> and determined<br/>to deliver seamless products.</p>
          <button className="btn btn-outline-light fs-3 mt-3">My Projects</button>
      </div> 
      </div>
      <div className={styles.imgContainer}>
          <img src={bgImage} className={styles.img} alt="backgroundImage" />
      </div>
      <Projects />
    </div>
  );
}

export default App;
