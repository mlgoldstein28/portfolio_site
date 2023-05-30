import {useState} from 'react'
import chipThumb from '../../media/chipThumb.png';
import styles from './Projects.module.scss';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar'

const Projects = () => {
    return (
        <div>
            <div className={styles.container}>
            <Navbar />
               <h1 className="text-center text-light fw-bold w-25 m-auto mb-2" style={{fontSize: "80px"}}>Portfolio</h1>
               <hr className=" w-50 m-auto"/>
               <div className="container row mt-4 d-flex m-auto">
                    <div className={`${styles.projectContainer} m-auto text-light text-center`}>
                        <h2 className="mt-3 fw-bold">Chipotle Clone</h2>
                        <Link to="/chip"><img className={`${styles.img} shadow-lg`} src={chipThumb} alt="Chipotle-Clone" /></Link>
                        <p className="mt-3 fw-bold fs-5 mb-0">Key Skills/Tools: </p>
                        <p className="fw-bold">ReactJS, JavaScript, Bootstrap, SASS, GitHub</p>
                        <p className={`${styles.description}`}>In this project, I focused on design and attention to detail.</p>
                    </div>
                    <div className={`${styles.projectContainer} m-auto  text-center`}>
                        <h2 className="mt-3 fw-bold">Chipotle Clone</h2>
                        <Link to="/chip"><img className={`${styles.img} shadow-lg`} src={chipThumb} alt="Chipotle-Clone" /></Link>
                        <p className="mt-3 fw-bold fs-5 mb-0">Key Skills/Tools: </p>
                        <p className="fw-bold">ReactJS, JavaScript, Bootstrap, SASS, GitHub</p>
                        <p className={`${styles.description}`}>In this project, I focused on design and attention to detail.</p>
                    </div>
                    <div className={`${styles.projectContainer} m-auto  text-center`}>
                        <h2 className="mt-3 fw-bold">Chipotle Clone</h2>
                        <Link to="/chip"><img className={`${styles.img} shadow-lg`} src={chipThumb} alt="Chipotle-Clone" /></Link>
                        <p className="mt-3 fw-bold fs-5 mb-0">Key Skills/Tools: </p>
                        <p className="fw-bold">ReactJS, JavaScript, Bootstrap, SASS, GitHub</p>
                        <p className={`${styles.description}`}>In this project, I focused on design and attention to detail.</p>
                    </div>
                    <div className="col-lg-3 col-12 m-auto">

                    </div>
               </div>
            </div>
        </div>
    )
}

export default Projects;