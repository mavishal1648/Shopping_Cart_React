import React from "react";
import styles from "../styles/cartModal.module.css"
import { useValue } from "../context";

function CartModal() {
  const {cart,total,clearCart,handleCart} = useValue();
  return (
    <div className={styles.cartModal}>
      <div className={styles.closeButton} onClick={handleCart}>
        Close
      </div>
      <div className={styles.clearButton} onClick={clearCart}>
        Clear
      </div>
      <div className={styles.itemContainer}>
        {
          cart.map((c)=>{
            return(
              <div className={styles.cartCard} key={c.id}>
                <h1>{c.name}</h1>
                <h3>X {c.qty}</h3>
                <h3>X {c.qty*c.price}</h3>
              </div>
            )
          })
        }
      </div>
      <div className={styles.total}>
        <div className={styles.totalText}>Total</div>
        <div className={styles.totalPrice}>${total}</div>
      </div>
    </div>
  );
}

export default CartModal;
