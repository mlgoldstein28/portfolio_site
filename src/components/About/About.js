import styles from './About.module.scss';
import Navbar from '../../components/Navbar/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function About() {
    return (
        <div className={`${styles.container} col-12`}>
            <Navbar />
            <h1 className="fs-1 fw-bold text-center">About Me</h1>
            <hr  className='w-50 m-auto'/>
            <div className="row col-12 m-auto mt-4">
            <div className={`row col-lg-3 col-12 ${styles.textContainer} shadow-lg rounded m-auto mt-5`}>
                <p className="fw-bold m-auto mt-3 pt-3 w-75 text-center">
	            <span className={styles.tab}></span>My career began in Public Relations with an opportunity to work as a Junior Publicist with a boutique PR firm in Manhattan. 
                After learning the industry, I soon became a Publicist and began managing my own accounts. 
                One year later, I was offered a position of Marketing Manager at a Promotional Products company based in Norwood, New Jersey. 
                This position was paramount in my growth, but I still wished to improve my skills, as I felt I was not utilizing my full potential. 
                With this notion, I began learning about Computer Science and different elements of programming.
                I quickly realized my future in the industry. 
                <br /> <br />
                Since then, I have become adept at Frontend Development by the hands of JavaScript and it's libraries and frameworks. 
                And although I believe myself to be a very promising developer, my desire to learn has only increased.
	            
                </p>
            </div>
            <div className="col-lg-3 col-12 w-25 m-0">
                <p className="fs-2 text-center m-0 me-5 p-0 fw-bold">Stack</p>
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
            </div>
            <div className="col-lg-9 col-12 text-center">
                <button type="button" className="btn btn-outline-success mt-5 me-5 shadow fw-bold"><span className="me-1"><FontAwesomeIcon icon={faEnvelope} /></span>MLGoldstein28@gmail.com</button>
                <button type="button" className="btn btn-outline-success mt-5 shadow fw-bold"><span className="me-1"><FontAwesomeIcon icon={faPhone} /></span>(201) 803-3947</button>
            </div>
            </div>
        </div>
    )
}