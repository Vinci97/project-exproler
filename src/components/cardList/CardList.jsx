import styles from "./CardList.module.scss"
import Card from "../Card/Card"
const CardList =({data})=>{
    return(
        <div className={styles.CardList}>
            {
                data.map((item, i)=><Card data={item} key={i}/>)
            }
        </div>
    )
}
export default CardList