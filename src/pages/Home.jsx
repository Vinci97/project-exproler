import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import styles from '../styles/pages/Home.module.scss';

function Home() {

  return (
    <div className={styles.Home}>
      <Navbar/>
      <h1>home</h1>
      <Footer/>
    </div>
  )
}

export default Home
