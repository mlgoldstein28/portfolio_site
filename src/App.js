import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import styles from './App.module.scss';
import jsIcon from './media/JavaScript-logo.png';
import reactIcon from './media/react-2.svg';
import nodeJSIcon from './media/nodejs-seeklogo.com.svg';
import htmlIcon from './media/html-logo.png';
import cssIcon from './media/css-alt.png';
import bgImage from './media/IMG_0236.JPG';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import About from './components/About/About'; 


export default function App() {
  return (
    <div className="App">
      <div className={styles.myContainer}>
      <Navbar />
        <div className={styles.myTextContainer}>
          <h1 className={styles.myTitle}>Frontend Developer</h1>
          <p className={`${styles.myIntro}`}><span className="text-decoration-underline">ReactJS</span> Specialist <br/> Determined to deliver seamless products</p>
          <a href="#projects"><button className="btn btn-outline-light fs-3 m-3">My Work</button></a>
          <a href="#contact"><button className="btn btn-outline-light fs-3 m-3">My Information</button></a>
            <p className={styles.myStack}>
                <span><img src={jsIcon} alt="JS" className={styles.stackLogo}/></span>
                <span><img src={reactIcon} alt="" className={styles.stackLogo}/></span>
                <span><img src={nodeJSIcon} alt="" className={styles.stackLogo}/></span>
                <span><img src={htmlIcon} alt="" className={styles.stackLogo}/></span>
                <span><img src={cssIcon} alt="" className={styles.stackLogo} style={{width: '30px', height: '30px', margin: '15px'}} /></span>
                <span><img src="https://www.mysql.com/common/logos/logo-mysql-170x115.png" alt="" className={styles.stackLogo} /></span>
            </p>
        </div> 
      </div>
      <div className={styles.imgContainer}>
          <img src={bgImage} className={styles.img} alt="" />
      </div>
      <Projects />
      <About />
    </div>
  );
}
