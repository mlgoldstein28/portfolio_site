import chipThumb from '../../media/chipThumb.png';
import styles from './Projects.module.scss';
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <div>
            <div className="w-100 vh-100 bg-dark">
               <h1 className="text-light pt-5 text-center" style={{fontSize: "80px"}}>Projects</h1>
               <hr className="text-light w-50 m-auto"/>
               <div className="container row mt-4 d-flex m-auto">
                    <div className="m-auto text-light text-center">
                        <h2>Chipotle Clone</h2>
                        <Link to="/chip"><img className={styles.img} src={chipThumb} alt="Chipotle-Clone" /></Link>
                        <p>In this project, I focused on design and attention to detail.</p>
                    </div>
                    <div className="col-lg-3 col-12 m-auto">

                    </div>
               </div>
            </div>
        </div>
    )
}

export default Projects;