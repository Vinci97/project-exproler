import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/Navbar';
import styles from '../styles/pages/About.module.scss';
export default function About() {
    return(
        <div className={`${styles.About} container`}>
            <Navbar/>
            <h1>about</h1>
            <Footer/>
        </div>
    )
}