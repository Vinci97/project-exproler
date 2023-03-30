import styles from '../../styles/pages/Navbar.module.scss';
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';

const Navbar =()=>{
  const navigate = useNavigate()
  const [inputValue, setInputValue]= useState("");
  const onHandleInput = (e)=> setInputValue(()=> e.target.value);
  const onHandelSubmit = (e) => {
    e.preventDefault();
    navigate(`/city/${inputValue}`)
    setInputValue(()=>"")
  }
  return(
    <div className={styles.Navbar}>
      <form onSubmit={onHandelSubmit}>
        <input value={inputValue} onChange={onHandleInput} className={styles.search} type="text" placeholder="Search..." required/>
      </form>
      <ul className={styles.NavbarContent}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/activity">Activity</Link>
        </li>
      </ul>
    </div>
  )
}
export default Navbar