import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import styles from "./index.module.scss"

const MainLayout = ()=>{
    return(
        <div className={styles.MainLayout}>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};
export default MainLayout