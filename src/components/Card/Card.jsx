import { useNavigate } from "react-router-dom";
import styles from "./Card.module.scss"

const Card =({data})=>{
    const navigate = useNavigate();

    const onHandleClick = () => {
      navigate(`/activity/${data.id}`);
    };
    return(
        <div className={styles.Card} onClick={onHandleClick}>
            <img className={styles.image} src={data.image} alt={data.title} />
            <div className={styles.content}>
                <h3 className={styles.title}>{data.title}</h3>
                <p className={styles.price}>${data.price}</p>
            </div>
        </div>
    )
}
export default Card