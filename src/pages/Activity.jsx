import { useEffect, useState } from 'react';
import CardList from '../components/cardList/CardList';
import styles from '../styles/pages/Activity.module.scss';
export default function Activity(){
    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then(res => res.json()).then((data)=> setProducts(data))
    },[])
    const filterList = (list, category) => list.filter((item)=>item.category === category)
    return(
        <div className={styles.Activity}>
            <h1>ELETTRONICA</h1>
            <CardList data={filterList(products, "electronics")}/>

        </div>
    )
}