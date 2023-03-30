import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import styles from "./index.module.scss"

const MainLayout = ()=>{
    return(
        <div className={styles.MainLayout}>
            <Navbar/>
            <div className={styles.content}>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};
export default MainLayout