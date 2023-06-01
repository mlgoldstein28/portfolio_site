import chipThumb from '../../media/chipThumb.png';
import recipesThumb from '../../media/recipesThumb.png';
import styles from './ProjectCards.module.scss';
import { Link } from 'react-router-dom';

const ProjectCards = ({projectDisplay, projects}) => {

    let display = projects.map((x) => {
        let { id, image, title, tools, category } = x;

    return (
        <div key={id} className={`col-lg-6 col-12 mt-4 m-auto mb-4 ${category.every((cat) => cat !== projectDisplay) ? `d-none` : null}`}>
            <div className={`${styles.projectContainer} m-auto text-light`}>
                <h2 className="mt-3 mb-3 text-center fw-bold">{title}</h2>
                <hr className="w-50 m-auto mb-3"/>
                <Link to="/chip"><img className={`${styles.img} shadow-lg shadow-white`} src={image} alt="Chipotle-Clone" /></Link>
                <div className={`${styles.description}`}>
                {
                    (() => {
                        let usedSkills;
                        usedSkills = tools.map((tool, index) => {
                            if (tool) {
                                return (
                                        <div key={index} className="fw-bold m-3 text-center">{tool}</div>
                                )
                            }
                        })
                        return (<>{usedSkills}</>)
                    })
                ()}
                </div>
            </div>
        </div>
    )
})
return <>{display}</>
}

export default ProjectCards;