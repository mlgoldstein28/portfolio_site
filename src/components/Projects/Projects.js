import styles from './Projects.module.scss';
import Navbar from '../Navbar/Navbar';
import ProjectCards from './ProjectCards';

const Projects = () => {
    
    return (
        <div>
            <div className={styles.container}>
            <Navbar />
                <h1 className="m-auto text-center text-light fw-bold mb-2" style={{fontSize: "80px"}}>Portfolio</h1>
                <hr className="w-50 m-auto"/>
                <div className="row">
                    <ProjectCards />
                </div>
            </div>
        </div>
    )
}

export default Projects;