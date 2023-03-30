import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import styles from "./index.module.scss";
import { GET } from "../../../utils/http";
function ActivityId(){
    const { id } = useParams()
    const [product, setProduct]=useState({})
      useEffect(() => {
        GET(`attractions?$filter=name%20eq%20%27${id}`).then((res) => setProduct(() => res.results));
      }, []);
    return(
        <div className={styles.ActivityId}>
            {product.title ? (
            <>
            <Link to="/activity">
               <button>X</button>
            </Link>
            <img className={styles.image} src={product.image} alt={product.title} />
            <div className={styles.content}>
                <h3 className={styles.title}>{product.title}</h3>
                <p>{product.description}</p>
                <p>{product.rating.rate}</p>
                <p>{product.rating.count}</p>
                <p className={styles.price}>${product.price}</p>
            </div>
            </>
            ) : (
                <h2>Al momento il prodotto non è disponibile</h2>
            )}
        </div>
    )
}
export default ActivityId