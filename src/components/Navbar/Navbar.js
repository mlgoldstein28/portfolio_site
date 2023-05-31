import gitHubLogo from '../../media/github-mark.png';
import styles from './Navbar.module.scss'
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className="Navbar">
            <nav className="">
                <a className="" href="https://github.com/mlgoldstein28">
                    <img src={gitHubLogo} className={styles.logo} alt="gitHubAccount" />
                </a>
                <div className="navbar-nav">
                  <ul className="d-flex">
                    <NavLink to="/" className={`nav-link ${styles.tabs} `}>Home</NavLink>
                    <NavLink to="/projects" className={`nav-item nav-link ${styles.tabs}`}>Projects</NavLink>
                    <NavLink to="/about" className={`nav-item nav-link ${styles.tabs}`}>About Me</NavLink>
                    <NavLink to="/contact" className={`nav-item nav-link ${styles.tabs}`}>Contact</NavLink>
                  </ul>
                </div>
            </nav>
        </div>
    )
}