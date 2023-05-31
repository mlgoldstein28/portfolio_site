import chipThumb from '../../media/chipThumb.png';
import styles from './ProjectCards.module.scss';
import { Link } from 'react-router-dom';

const ProjectCards = () => {
    let projects =  [
        {"id": "1", "title": "Recipes", "image": chipThumb, "subHead": "ReactJs", "Tools": ["API", "Bootstrap", "SAAS", "GitHub"]},
        {"id": "2", "title": "Chipotle Clone","image": chipThumb, "subHead": "ReactJs", "Tools": ["Bootstrap", "SAAS", "GitHub"]},
    ]

    let display = projects.map((x) => {
    let { id, image, title, tools } = x;

    return (
        <div key={id} className="col-lg-3 col-12 mt-4 m-auto">
            <div className={`${styles.projectContainer} m-auto text-black`}>
                <h2 className="mt-3 mb-3 text-center fw-bold">{title}</h2>
                <Link to="/chip"><img className={`${styles.img} shadow-lg`} src={image} alt="Chipotle-Clone" /></Link>
                <p className="fw-bold">{tools}</p>
                <p className={`${styles.description}`}>In this project, I focused on design and attention to detail.</p>
            </div>
        </div>
    )
})
return <>{display}</>
}

export default ProjectCards;