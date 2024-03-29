import { useState } from 'react';
import recipesThumb from '../../media/recipesThumb.png';
import chipThumb from '../../media/chipThumb.png';
import threadsThumb from '../../media/threadsThumb.png';
import capricorpThumb from '../../media/capricorpThumb.png';
import styles from './Projects.module.scss';
import ProjectCards from './ProjectCards';
import FilterButtons from './FilterButtons';

const Projects = () => {

    //Add Projects Here
    let projects =  [
        {
        "id": "1", 
        "title": "Recipes", 
        "image": recipesThumb, 
        "subHead": "ReactJs", 
        "category": ["REST API", "ReactJS", "JavaScript", "All"], 
        "summaryOne": "Built with MealDB's API, 'Recipes' is a culinary site that lets you search recipes by Nationality, Ingredient, Type or by Search.",
        "gitHubLink": "https://github.com/mlgoldstein28/recipes-net",
        "demoLink": "https://internationalrecipes.netlify.app/"
        },
        {
            "id": "3",
        "title": "ThreadsDB",
        "image": threadsThumb,
        "subHead": "",
        "category": ["ReactJS", "MERN", "REST API", "All"],
        "summaryOne": "This CRUD application was created for a boutique clothing store in order to organize their college orders.",
        "gitHubLink": "https://github.com/mlgoldstein28/threads-college",
        "demoLink": ""
        },
        {
        "id": "2", 
        "title": "Chipotle Clone",
        "image": chipThumb, 
        "subHead": "ReactJs", 
        "category": ["ReactJS", "JavaScript", "Design", "Animation", "All"], 
        "summaryOne": "This clone project illustrates my ability to deliver a product from a wireframe.",
        "gitHubLink": "https://github.com/mlgoldstein28/chipotle-mock",
        "demoLink": "https://chipotle-clone.netlify.app/",
        },
        {"id": "4", 
        "title": "Capricorp Tracker",
        "image": capricorpThumb, 
        "subHead": "", 
        "category": ["ReactJS", "JavaScript", "Design", "Animation", "All"], 
        "summaryOne": "This is an  internal program used to improve organization and communication regarding past, current, and upcoming projects .",
        "gitHubLink": "https://github.com/mlgoldstein28/capricorp-net",
        "demoLink": "",
        }
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
            <div className={`bg-dark bg-gradient ${styles.container}`}>
                <div className="w-100 text-light pt-1">
                    <h1 className="m-3 mb-0 text-left fw-bold" style={{fontSize: "2.3rem"}}>My Recent Work</h1>
                    <hr className="m-3" style={{width: "160px"}}/>
                    <br/>
                </div>
                <div className={styles.filterButtonContainer} style={{width: "40%", display: 'none'}}>
                    <FilterButtons projectDisplay={projectDisplay}
                                setProjectDisplay={setProjectDisplay}/>
                </div>
                <div className="m-auto">
                    <ProjectCards projects={projects}
                                  setProjectDisplay={setProjectDisplay}
                                  projectDisplay={projectDisplay}/>
                </div>
            </div>
        </div>
    )
}

export default Projects;