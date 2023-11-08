import styles from './ProjectCards.module.scss';
import jsIcon from '../../media/JavaScript-logo.png';
import reactIcon from '../../media/react-2.svg';
import nodeJSIcon from '../../media/nodejs-seeklogo.com.svg';
import htmlIcon from '../../media/html-logo.png';
import cssIcon from '../../media/css-alt.png';
import gitHubLogo from '../../media/github-mark.png';
import mongoDBIcon from '../../media/icons8-mongodb-48.png';
import mySqlIcon from '../../media/IMG_0236.JPG'


export default function ProjectCards({projects}) {
    return (
        <div>
            <div id="projectContainer" className="m-auto text-white p-3 mb-3" style={{width: '760px'}}>
                <div id="imageAndTextContainer" className={styles.imageAndTextContainer}>
                    <div className={styles.textContainer}>
                        <p className="">{projects[3].summaryOne}</p>
                        <a href={projects[3].gitHubLink}>
                            <p className="d-inline fw-bold mb-4 btn btn-light">Code Here<img src={gitHubLogo} alt="" style={{width: '20px', height: '20px', margin: '10px'}}/></p>
                        </a>
                        <div className='mt-4 mb-0'>
                            <p className={styles.myStack}>
                                <span><img src={jsIcon} alt="JS" className="stackLogo"/></span>
                                <span><img src={reactIcon} alt="" className="stackLogo"/></span>
                                <span><img src={htmlIcon} alt="" className="stackLogo"/></span>
                                <span><img src={cssIcon} alt="" className="stackLogo" style={{width: '30px', height: '30px', margin: '15px'}} /></span>
                                <span><img src={nodeJSIcon} alt="" className="stackLogo"/></span>
                                <span><img src="https://www.mysql.com/common/logos/logo-mysql-170x115.png" alt="" className="stackLogo"/></span>
                            </p>
                        </div>
                    </div> 
                    <div>
                        <h2 className="fw-bold">{projects[3].title}</h2>  
                        <hr  className="w-25 text-light"/> 
                        <a href={projects[3].demoLink}><img src={projects[3].image} alt="" className=""/> </a>
                    </div>
                </div>
            </div>
            <hr className="w-75 text-light m-auto"/>
            <div id="projectContainer" className="m-auto mb-3 text-white p-3" style={{width: '760px'}}>
                <div id="imageAndTextContainer" className={styles.imageAndTextContainer}>
                    <div>
                        <h2 className="fw-bold">{projects[0].title}</h2>
                        <hr className="w-25"/>
                        <a href={projects[0].demoLink}><img src={projects[0].image} className=""/> </a>
                    </div>
                    <div className={styles.textContainer}>
                        <p className="">{projects[0].summaryOne}</p>
                        <a href={projects[0].gitHubLink}>
                            <p className="d-inline fw-bold mb-4 btn btn-light">Code Here<img src={gitHubLogo} alt="" style={{width: '20px', height: '20px', margin: '10px'}}/></p>
                        </a>
                        <div className="mt-4 mb-0">
                            <p className={`${styles.myStack}`}>
                                <span><img src={jsIcon} alt="JS" className="stackLogo"/></span>
                                <span><img src={reactIcon} alt="" className="stackLogo"/></span>
                                <span><img src={htmlIcon} alt="" className="stackLogo"/></span>
                                <span><img src={cssIcon} alt="" className="stackLogo" style={{width: '30px', height: '30px', margin: '15px'}} /></span>
                            </p>
                        </div>
                    </div>    
                </div>
            </div>
            <hr className="w-75 text-light m-auto"/>

            <div id="projectContainer" className="m-auto text-white p-3 mb-3" style={{width: '760px'}}>
                <div id="imageAndTextContainer" className={styles.imageAndTextContainer}>
                    <div className={styles.textContainer}>
                        <p className="">{projects[2].summaryOne}</p>
                        <a href={projects[2].gitHubLink}>
                            <p className="d-inline fw-bold mb-4 btn btn-light">Code Here<img src={gitHubLogo} alt="" style={{width: '20px', height: '20px', margin: '10px'}}/></p>
                        </a>
                        <div className='mt-4 mb-0'>
                            <p className={styles.myStack}>
                                <span><img src={jsIcon} alt="JS" className="stackLogo"/></span>
                                <span><img src={reactIcon} alt="" className="stackLogo"/></span>
                                <span><img src={htmlIcon} alt="" className="stackLogo"/></span>
                                <span><img src={cssIcon} alt="" className="stackLogo" style={{width: '30px', height: '30px', margin: '15px'}} /></span>
                            </p>
                        </div>
                    </div> 
                    <div>
                        <h2 className="fw-bold">{projects[2].title}</h2>  
                        <hr  className="w-25 text-light"/> 
                        <a href={projects[2].demoLink}><img src={projects[2].image} alt="" className=""/> </a>
                    </div>
                </div>
            </div>
            <hr  className="w-75 m-auto text-light"/>

            <div id="projectContainer" className="m-auto mb-3 text-white p-3" style={{width: '760px'}}>
                <div id="imageAndTextContainer" className={styles.imageAndTextContainer}>
                    <div>
                        <h2 className="fw-bold">{projects[1].title}</h2>
                        <hr className="w-25"/>
                        <a href={projects[1].gitHubLink}><img src={projects[1].image} alt="" className="" /> </a>
                    </div>
                    <div className={styles.textContainer}>
                        <p className="">{projects[1].summaryOne}</p>
                        <a href={projects[1].gitHubLink}>
                            <p className="d-inline fw-bold mb-4 btn btn-light">Code Here<img src={gitHubLogo} alt="" style={{width: '20px', height: '20px', margin: '10px'}}/></p>
                        </a>
                        <div className="mt-4 mb-0">
                            <p className={`${styles.myStack}`}>
                                <span><img src={jsIcon} alt="JS" className="stackLogo"/></span>
                                <span><img src={reactIcon} alt="React" className="stackLogo"/></span>
                                <span><img src={htmlIcon} alt="HTML" className="stackLogo"/></span>
                                <span><img src={cssIcon} alt="CSS" className="stackLogo" style={{width: '30px', height: '30px', margin: '15px'}} /></span>
                                <span><img src={nodeJSIcon} alt="NodeJS" className="stackLogo"/></span>
                                <span><img src={mongoDBIcon} alt="MongoDB" className="stackLogo"/></span>
                            </p>
                        </div>
                    </div>    
                </div>
            </div>
            <hr className="w-75 text-light m-auto"/>
        </div>
    )
}