import React from "react";
import styles from "../styles/Total.module.css";
import { useValue } from "../context"; 
function Navbar() {
  const {total,item,handleReset,handleCart} = useValue();
  return (
    <div className={styles.container}>
      <h1>Total : &#x20B9; {total}</h1>
      <h1>Items: {item}</h1>
      <div className={styles.buttonContainer}>
      <button onClick={handleCart}>Cart</button>
      <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default Navbar;
