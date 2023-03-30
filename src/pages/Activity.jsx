import { useEffect, useState } from 'react';
import CardList from '../components/cardList/CardList';
import styles from '../styles/pages/Activity.module.scss';
import { GET } from "../utils/http";
export default function Activity(){
    const [products, setProducts] = useState([])
  useEffect(() => {
    GET("activities").then((res) => setProducts(() => res.results));
  }, []);
    const filterList = (list, type) => 
    list.filter((item)=>item["@type"].includes(type) )
    return(
        <div className={styles.Activity}>
            <h1>Categoria: Ristoranti</h1>
            <CardList data={filterList(products, "Restaurant")}/>
            <h1>Categoria: Museum </h1>
            <CardList data={filterList(products, "Museum")}/>
            <h1>Categoria: CafeOrCoffeeShop</h1>
            <CardList data={filterList(products, "CafeOrCoffeeShop")}/>

        </div>
    )
}