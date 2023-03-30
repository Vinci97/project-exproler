import styles from '../../styles/pages/Navbar.module.scss';
import { Link } from "react-router-dom";
const Navbar =()=>{
    return(
        <div className={styles.Navbar}>
            <ul className={styles.NavbarContent}>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                   <Link to="/activity">Activity</Link>
                </li>
            </ul>
        </div>
    )
}
export default Navbar