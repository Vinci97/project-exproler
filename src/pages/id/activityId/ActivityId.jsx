import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./index.module.scss";
function ActivityId(){
    const { id } = useParams()
    const [product, setProduct]=useState({})
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id || 1}`)
          .then((data) => data.json())
          .then((res) => setProduct(res));
      }, []);
    return(
        <div className={styles.ActivityId}>
            {product.title ? (
            <>
            <img className={styles.image} src={product.image} alt={product.title} />
            <div className={styles.content}>
                <h3 className={styles.title}>{product.title}</h3>
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