import styles from "./CardList.module.scss"
import Card from "../Card/Card"
const CardList =({data})=>{
    return(
        <div className={styles.CardList}>
            {
                data.map(item=><Card data={item} key={item.id}/>)
            }
        </div>
    )
}
export default CardList