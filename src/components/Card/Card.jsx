import { useNavigate } from "react-router-dom";
import styles from "./Card.module.scss"

const Card =({data})=>{
    const navigate = useNavigate();

    const onHandleClick = () => {
        navigate(`/activity/${data.name}%27`);
      };
    return(
        <div className={styles.Card} onClick={onHandleClick}>
            <img className={styles.image} src={data.image.url} alt={data.title} />
            <div className={styles.content}>
                <h3 className={styles.title}>{data.name}</h3>
                <p className={styles.price}>{data.telephone}</p>
                <p className={styles.price}>{data.address.addressCountry}</p>
            </div>
        </div>
    )
}
export default Card