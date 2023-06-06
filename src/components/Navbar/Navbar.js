import styles from './Navbar.module.scss'


export default function Navbar() {

    return (
        <div className="Navbar">
            <nav className="">
                <div className="d-flex ">
                    <h1 className="m-4 text-white fw-bold">Michael Goldstein</h1>
                    <ul className={`nav navbar-nav mt-4 ms-auto ${styles.stackContainer}`}>
                        <button className={`btn btn-light fs-3 ms-auto ${styles.myStack}`}>My Stack</button>
                        <ul className={`list-group ${styles.hiddenDrop}`}>
                            <li className='list-group-item m-0 text-center'>JavaScript</li>
                            <li className='list-group-item m-0 text-center'>ReactJS</li>
                            <li className='list-group-item m-0 text-center'>Boostrap</li>
                            <li className='list-group-item m-0 text-center'>HTML</li>
                            <li className='list-group-item m-0 text-center'>CSS</li>
                            <li className='list-group-item m-0 text-center'>SASS</li>
                            <li className='list-group-item m-0 text-center'>SQL</li>
                            <li className='list-group-item m-0 text-center'>Knowledge of REST API's</li>
                            <li className='list-group-item m-0 text-center'>Knowledge of Git & Github</li>
                        </ul>
                    </ul>
                </div>
            </nav>
        </div>
    )
}