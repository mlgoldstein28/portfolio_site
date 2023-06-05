import { useState } from 'react';
import recipesThumb from '../../media/recipesThumb.png';
import chipThumb from '../../media/chipThumb.png';
import styles from './Projects.module.scss';
import ProjectCards from './ProjectCards';

const Projects = () => {
    let projects =  [
        {"id": "1", 
        "title": "Recipes", 
        "image": recipesThumb, 
        "subHead": "ReactJs", 
        "category": ["API", "ReactJS", "JavaScript", "All"], 
        "summaryOne": "Built with MealDB's API, 'Recipes' is a culinary site designed to introduce foods from different nationalities."},
        {"id": "2", 
        "title": "Chipotle Clone",
        "image": chipThumb, 
        "subHead": "ReactJs", 
        "category": ["ReactJS", "JavaScript", "Design", "Animation", "All"], 
        "summaryOne": "The purpose of this project was to illustrate my ability to receive a wireframe and deliver a seamless product."}
    ]

    const [projectDisplay, setProjectDisplay] = useState('All');

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
                    <hr className="m-3" style={{width: "340px"}}/>
                    <br/>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="form-check">
                        <input onClick={handleClick} name="categoryRadio" className="form-check-input x" type="radio" value="ReactJS" id="ReactJS"></input>
                        <label  className="btn btn-outline-light" for="ReactJS" value="ReactJS">ReactJS</label>
                    </div>
                    <div className="form-check">
                        <input onClick={handleClick}  name="categoryRadio" className="form-check-input x" type="radio" value="API" id="API"></input>
                        <label  className="btn btn-outline-light" for="API" value="API">API</label>
                    </div>
                    <div className="form-check">
                        <input onClick={handleClick} name="categoryRadio" className="form-check-input x" type="radio" value="Design" id="Design"></input>
                        <label  className="btn btn-outline-light" for="Design" value="Design">Design</label>
                    </div>
                    <div className="form-check">
                        <input onClick={handleClick}  name="categoryRadio" className="form-check-input x" type="radio" value="All" id="All"></input>
                        <label  className="btn btn-outline-light" for="All" value="All">All</label>
                    </div>
                </div>
                <div className="row m-auto ms-3">
                    <ProjectCards projects={projects}
                                  setProjectDisplay={setProjectDisplay}
                                  projectDisplay={projectDisplay}/>
                </div>
            </div>
        </div>
    )
}

export default Projects;