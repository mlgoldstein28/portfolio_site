import { useState } from 'react';
import recipesThumb from '../../media/recipesThumb.png';
import chipThumb from '../../media/chipThumb.png';
import styles from './Projects.module.scss';
import Navbar from '../Navbar/Navbar';
import ProjectCards from './ProjectCards';

const Projects = () => {
    let projects =  [
        {"id": "1", "title": "Recipes", "image": recipesThumb, "subHead": "ReactJs", "tools": ["API", "Bootstrap", "SAAS", "GitHub"], "category": ["API", "JavaScript", "All"]},
        {"id": "2", "title": "Chipotle Clone","image": chipThumb, "subHead": "ReactJs", "tools": ["Bootstrap", "SAAS", "GitHub"], "category": ["Design", "Animation", "All"]}
    ]

    const [projectDisplay, setProjectDisplay] = useState('All');
    const [activeState, setActiveState] = useState('false')

    const handleClick = (e) => {
                setProjectDisplay(e.target.value)
                console.log(projectDisplay)
            }

    return (
        <div id="projects" className="">
            <style jsx>
                {`
                .x:checked + label {
                    background-color: white;
                    color: black
                }
                input[type="radio"] { display: none; }
                `}
            </style>
            <div className={styles.container}>
                <div className="w-100 text-light p-1">
                    <h1 className="m-3 mb-0 text-left fw-bold" style={{fontSize: "50px"}}>My Recent Work</h1>
                    <hr className="w-25 m-3"/>
                    <br/>
                </div>
                <div className="w-100 m-auto text-center d-flex justify-content-center">
                    <div className="form-check">
                        <input onClick={handleClick} name="categoryRadio" className="form-check-input x" type="radio" value="Design" id="Design"></input>
                        <label  className="btn btn-outline-light" for="Design" value="Design">Design</label>
                    </div>
                    <div className="form-check">
                        <input onClick={handleClick}  name="categoryRadio" className="form-check-input x" type="radio" value="API" id="API"></input>
                        <label  className="btn btn-outline-light" for="API" value="API">API</label>
                    </div>
                    <div className="form-check">
                        <input onClick={handleClick}  name="categoryRadio" className="form-check-input x" type="radio" value="Animation" id="Animation"></input>
                        <label  className="btn btn-outline-light" for="Animation" value="Animation">Animation</label>
                    </div>
                    <div className='form-check'>
                        <input onClick={handleClick}  name="categoryRadio" className="form-check-input x" type="radio" value="JavaScript" id="JavaScript"></input>
                        <label  className="btn btn-outline-light" for="JavaScript" value="JavaScript">JavaScript</label>
                    </div>
                    <div className="form-check">
                        <input onClick={handleClick}  name="categoryRadio" className="form-check-input x" type="radio" value="All" id="All"></input>
                        <label  className="btn btn-outline-light" for="All" value="All">All</label>
                    </div>
                </div>
                <div className="row">
                    <ProjectCards projects={projects}
                                  setProjectDisplay={setProjectDisplay}
                                  projectDisplay={projectDisplay}/>
                </div>
            </div>
        </div>
    )
}

export default Projects;