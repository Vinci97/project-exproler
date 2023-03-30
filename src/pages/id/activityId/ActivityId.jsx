import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import styles from "./index.module.scss";
import { GET } from "../../../utils/http";
function ActivityId(){
    const { id } = useParams()
    const [product, setProduct]=useState({})
      useEffect(() => {
        GET(`activities?$filter=name%20eq%20%27${id}`).then((res) => 
        setProduct(() => res.results[0]));
      }, []);
    return(
        <div className={styles.ActivityId}>
            {product.name ? (
            <>
            <Link to="/activity">
               <button>X</button>
            </Link>
            <img className={styles.image} src={product.image.url} alt={product.name} />
            <div className={styles.content}>
                <h3 className={styles.title}>{product.name}</h3>
                <p>{product.telephone}</p>
                <p>{product.address.addressLocality}</p>
                <p>{product.address.addressRegion}</p> 
                <p>{product.address.addressCountry}</p> 
                <p className={styles.price}>{product.price}</p>
            </div>
            </>
            ) : (
                <h2>seleziona un altra activity</h2>
            )}
        </div>
    )
}
export default ActivityId