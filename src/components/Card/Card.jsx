import styles from "./Card.module.scss"

const Card =({data})=>{
    return(
        <div className={styles.Card}>
            <img src={data.image} alt={data.title} />
            <h3>{data.title}</h3>
            <p>{data.price}</p>
        </div>
    )
}
export default Card