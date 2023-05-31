import chipThumb from '../../media/chipThumb.png';
import recipesThumb from '../../media/recipesThumb.png';
import styles from './ProjectCards.module.scss';
import { Link } from 'react-router-dom';

const ProjectCards = () => {
    let projects =  [
        {"id": "1", "title": "Recipes", "image": recipesThumb, "subHead": "ReactJs", "tools": ["API", "Bootstrap", "SAAS", "GitHub"]},
        {"id": "2", "title": "Chipotle Clone","image": chipThumb, "subHead": "ReactJs", "tools": ["Bootstrap", "SAAS", "GitHub"]},
    ]
    let display = projects.map((x) => {
    let { id, image, title, tools } = x;
    console.log(tools)
    return (
        <div key={id} className="col-lg-3 col-12 mt-4 m-auto">
            <div className={`${styles.projectContainer} m-auto text-black`}>
                <h2 className="mt-3 mb-3 text-center fw-bold">{title}</h2>
                <hr className="w-50 m-auto mb-3"/>
                <Link to="/chip"><img className={`${styles.img} shadow-lg`} src={image} alt="Chipotle-Clone" /></Link>
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