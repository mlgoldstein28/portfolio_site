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
                <div className="text-center">
                    <a href="https://github.com/mlgoldstein28"><img src={gitHubLogo} alt="My-GitHub"  className={styles.gitHub} /></a>    
                </div>
        </div>
    )
}