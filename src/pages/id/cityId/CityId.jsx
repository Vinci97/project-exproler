import styles from './index.module.scss';
import { GET } from "../../../utils/http";
import { useState,useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
export default function CityId(){
    const [product, setProduct] = useState({});
    const [search]= useSearchParams();
    const inputSearch = search.get('search');
    useEffect(() => {
        GET(`activities?$filter=name%20eq%20%27${inputSearch}%27`).then((res) => 
        setProduct(() => res.results[0]));
      }, [])
    return(
        <div className={styles.City}>
            {product.name ? (
            <>
            <Link to="/">
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
                <h2>spiacenti questa città non è stata trovata...</h2>
            )}
        </div>
    )
}