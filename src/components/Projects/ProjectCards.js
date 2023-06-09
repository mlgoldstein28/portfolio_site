import styles from './ProjectCards.module.scss';

const ProjectCards = ({projectDisplay, projects}) => {

    let display = projects.map((x) => {
        let { id, image, title, category, summaryOne, gitHubLink, demoLink } = x;
        
    return (
        <div key={id} className={`col-lg-6 col-12 mt-4 m-auto mb-4 ${category.every((cat) => cat !== projectDisplay) ? `d-none` : null}`}>
            <div className={`${styles.projectContainer} m-auto text-light`}>
                <h2 className="mt-3 mb-3 text-center fw-bold">{title}</h2>
                <hr className="w-50 m-auto mb-3"/>
                <a href={demoLink}>
                  <div className={styles.imgContainer}>
                        <img className={`${styles.img} shadow-lg shadow-white`} src={image} alt={title} />
                        <div className={styles.summary}>{summaryOne} <br/><br/>
                            <a href={demoLink} className="text-decoration-underline m-2">Live Demo Here</a>
                            <a href={gitHubLink} className="text-decoration-underline m-2">Code Here</a>
                        </div>
                  </div>
                </a>
            </div>
        </div>
    )
})
return <>{display}</>
}

export default ProjectCards;