import gitHubLogo from '../../media/github-mark.png';
import styles from './Navbar.module.scss'
export default function Navbar() {
    return (
        <div className="Navbar">
            <nav className="">
                <a className="" href="https://github.com/mlgoldstein28">
                    <img src={gitHubLogo} className={styles.logo} alt="gitHubAccount" />
                </a>
                <div className="navbar-nav">
                  <ul className="d-flex">
                    <li className={`nav-item nav-link ${styles.tabs}`} href="/">Projects</li>
                    <li className={`nav-item nav-link ${styles.tabs}`} href="/">About Me</li>
                    <li className={`nav-item nav-link ${styles.tabs}`} href="/">Contact</li>
                  </ul>
                </div>
            </nav>
        </div>
    )
}