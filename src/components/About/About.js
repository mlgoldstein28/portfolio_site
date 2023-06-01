import styles from './About.module.scss';
import gitHubLogo from '../../media/github-mark.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';

import Navbar from '../../components/Navbar/Navbar'

export default function About() {
    return (
        <div id="contact" className={`${styles.container}`}>
            <div className="w-100 p-5">
                <h1 className="text-center" style={{fontSize: "80px"}}>Contact Me</h1>
                <hr className="w-50 m-auto"/>
            </div>
            <div className="text-center fw-bold">
                <h2 className="mb-3">Michael Goldstein</h2>
                <p className="fw-bold text-primary"><FontAwesomeIcon icon={faEnvelope} /> MLGoldstein28@gmail<span className="m-5"></span><a href="tel:2018033947"><FontAwesomeIcon icon={faPhone} className="me-1"/>(201) 803-3947</a></p>     
            </div>
            <form className="w-50 border border-light m-auto">
                <div className="w-100 mb-3 d-flex flex-row justify-content-center">
                    <div className="d-flex flex-column m-3">
                    <label className="fw-bold">Your Name</label>
                    <input type="text" className={styles.input}></input>
                    </div>
                    <div className="d-flex flex-column m-3">
                    <label className="fw-bold">Your Email</label>
                    <input className={styles.input} type="email"></input>
                    </div>
                </div>
                <div className="w-75 vh-25 d-flex flex-column justify-content-center m-auto">
                    <label className="fw-bold">Your Message</label>
                    <textarea className={styles.input} style={{height: "120px", marginTop: "15px"}}></textarea>
                    </div>
                <div className="text-center mt-3 mb-3">
                    <button type="submit" className="btn btn-success text-center m-auto">Submit<FontAwesomeIcon icon={faArrowCircleRight} className="ms-3"/></button>
                </div>
            </form>
            <footer>
            </footer>
            <div className="w-25">
                <p className="fs-2 text-center m-auto fw-bold">Stack</p>
                <ul className="list-group">
                    <li className='list-group-item m-0 text-center'>JavaScript</li>
                    <li className='list-group-item m-0 text-center'>ReactJS</li>
                    <li className='list-group-item m-0 text-center'>SQL</li>
                    <li className='list-group-item m-0 text-center'>HTML</li>
                    <li className='list-group-item m-0 text-center'>CSS</li>
                    <li className='list-group-item m-0 text-center'>CSS Precursors</li>
                    <li className='list-group-item m-0 text-center'>Bootstrap</li>
                    <li className='list-group-item m-0 text-center'>Knowledge of API's</li>
                    <li className='list-group-item m-0 text-center'>Knowledge of Git & Github</li>
                </ul>
                <div className="text-center">
                    <a href="https://github.com/mlgoldstein28"><img src={gitHubLogo} alt="My-GitHub"  className={styles.gitHub} /></a>    
                </div>
            </div>
            <div className="col-lg-9 col-12 text-center">
                <button type="button" className="btn btn-outline-success mt-5 me-5 shadow fw-bold"><span className="me-1"><FontAwesomeIcon icon={faEnvelope} /></span>MLGoldstein28@gmail.com</button>
                <button type="button" className="btn btn-outline-success mt-5 shadow fw-bold"><a href="tel:2018033947"><span className="me-1"><FontAwesomeIcon icon={faPhone} /></span>(201) 803-3947</a></button>
            </div>
        </div>
    )
}