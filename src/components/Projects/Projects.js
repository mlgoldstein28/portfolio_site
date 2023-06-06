import { useState } from 'react';
import recipesThumb from '../../media/recipesThumb.png';
import chipThumb from '../../media/chipThumb.png';
import styles from './Projects.module.scss';
import ProjectCards from './ProjectCards';
import FilterButtons from './FilterButtons';

const Projects = () => {

    //Add Projects Here
    let projects =  [
        {"id": "1", 
        "title": "Recipes", 
        "image": recipesThumb, 
        "subHead": "ReactJs", 
        "category": ["API", "ReactJS", "JavaScript", "All"], 
        "summaryOne": "Built with MealDB's API, 'Recipes' is a culinary site that lets you search recipes by Nationality, Ingredient, Type or by Search.",
        "gitHubLink": "https://github.com/mlgoldstein28/recipes-net ",
        "demoLink": "https://master--melodic-strudel-fce1e4.netlify.app/"},
        {"id": "2", 
        "title": "Chipotle Clone",
        "image": chipThumb, 
        "subHead": "ReactJs", 
        "category": ["ReactJS", "JavaScript", "Design", "Animation", "All"], 
        "summaryOne": "This clone project illustrates my ability to deliver a product from a wireframe.",
        "gitHubLink": "https://github.com/mlgoldstein28/chipotle-mock",
        "demoLink": "https://master--comforting-zabaione-621a63.netlify.app/",}
    ]

    const [projectDisplay, setProjectDisplay] = useState('All');


    return (
        <div id="projects">
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
                <div className="w-100 text-light pt-1">
                    <h1 className="m-3 mb-0 text-left fw-bold" style={{fontSize: "2.3rem"}}>My Recent Work</h1>
                    <hr className="m-3" style={{width: "160px"}}/>
                    <br/>
                </div>
                <div className="m-auto d-flex justify-content-around" style={{width: "40%"}}>
                    <FilterButtons projectDisplay={projectDisplay}
                                setProjectDisplay={setProjectDisplay}/>
                </div>
                <div className="row m-auto">
                    <ProjectCards projects={projects}
                                  setProjectDisplay={setProjectDisplay}
                                  projectDisplay={projectDisplay}/>
                </div>
            </div>
        </div>
    )
}

export default Projects;