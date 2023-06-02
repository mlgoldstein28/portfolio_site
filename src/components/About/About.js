import { useState } from 'react';
import { Document, Page } from 'react-pdf'
import styles from './About.module.scss';
import gitHubLogo from '../../media/github-mark.png';
import  '../../media/Resume_FD.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';

export default function About() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [body, setBody] = useState('');

    const handleName = (e) => {
        setName(e.currentTarget.value)
    }
    const handleEmail = (e) => {
        setEmail(e.currentTarget.value)
    }
    const handleBody = (e) => {
        setBody(e.currentTarget.value)
    }

    return (
        <div id="contact" className={`${styles.container}`}>
            <div className="w-100 p-5">
                <h1 className="text-center" style={{fontSize: "80px"}}>Contact Me</h1>
                <hr className="w-50 m-auto"/>
            </div>
            <div className="text-center fw-bold">
                <h2 className="mb-3">Michael Goldstein</h2>
                <p className="fw-bold text-primary"><FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:mlgoldstein28@gmail.com">MLGoldstein28@gmail</a><span className="m-3"></span>
                <FontAwesomeIcon icon={faFile} className="me-1"/>Resume<span className="m-3"></span>
                <a href="tel:2018033947"><FontAwesomeIcon icon={faPhone} className="me-1"/>(201) 803-3947</a></p>     
            </div>
            <form className="w-50 border border-light m-auto">
                <div className="w-100 mb-3 d-flex flex-row justify-content-center">
                    <div className="d-flex flex-column m-3">
                    <label className="fw-bold">Your Name</label>
                    <input onChange={handleName} type="text" className={styles.input}></input>
                    </div>
                    <div className="d-flex flex-column m-3">
                    <label className="fw-bold">Your Email</label>
                    <input onChange={handleEmail} className={styles.input} type="email"></input>
                    </div>
                </div>
                <div className="w-75 vh-25 d-flex flex-column justify-content-center m-auto">
                    <label className="fw-bold">Your Message</label>
                    <textarea onChange={handleBody} className={styles.input} style={{height: "120px", marginTop: "15px"}}></textarea>
                    </div>
                <div className="text-center mt-3 mb-3">
                    <a href={`mailto:mlgoldstein28@gmail.com?subject='From${ name}-${email}'&body=${body}`}><button type="button" className="btn btn-success text-center m-auto">Submit<FontAwesomeIcon icon={faArrowCircleRight} className="ms-3"/></button></a>
                </div>
            </form>
                <div className="text-center">
                    <a href="https://github.com/mlgoldstein28"><img src={gitHubLogo} alt="My-GitHub"  className={styles.gitHub} /></a>    
                </div>
        </div>
    )
}