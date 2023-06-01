import gitHubLogo from '../../media/github-mark.png';
import styles from './Navbar.module.scss'
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className="Navbar">
            <nav className="">
                <div className="navbar-nav">
                    <h1 className="m-4 text-white fw-bold">Michael Goldstein</h1>
                 {
                 /*<ul className="d-flex">
                    <NavLink to="/" className={`nav-link ${styles.tabs} `}>Home</NavLink>
                    <NavLink to="/projects" className={`nav-item nav-link ${styles.tabs}`}>Projects</NavLink>
                    <NavLink to="/about" className={`nav-item nav-link ${styles.tabs}`}>About</NavLink>
                  </ul>*/
                  }
                </div>
            </nav>
        </div>
    )
}