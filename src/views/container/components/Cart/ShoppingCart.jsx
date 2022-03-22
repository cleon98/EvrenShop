import React from "react";
import { Link } from "react-router-dom";
import styles from './styles.module.css'

export const ShoppingCart = ({ cartItem, removeCart, sendOrder }) => {
const totalPrice = cartItem.reduce((accumulate, current) => accumulate + current.price, 0)

  return (
    <div>
        <h1 className={styles.cartTitle}>Tu carrito de compras: </h1>
      <div className={styles.cartConditional} >
        {cartItem.length === 0 && (
          <div className={styles.cartConditional1}>Tu carrito esta vacio.</div>
        )}
      </div>
      <section className={styles.cartSection} >
        {cartItem.map((item, index) => (
            <div className={styles.cartInfo} key={index}>
                <img src={item.img} alt="Products added to your cart" />
                <div className={styles.cartInfoText}>
                <h1>{item.category}</h1>
                <p>{item.name}</p>
                <h2>$ {item.price}</h2>
                <button className={styles.cartBtnRemove} onClick={() => removeCart(item)} >Eliminar producto</button>
                </div>
            </div>
        ))}
      </section>
      <p className={styles.cartTotalPrice} >El precio total es: <br/> $ {totalPrice} </p>
      <div className={styles.cartBtns} >
        <button onClick={sendOrder} className={styles.cartBtn}>Realiza tu pedido</button>
        <button className={styles.cartBtn}><Link className={styles.cartLinkCatalog} to='/catalogo'>Sigue Comprando</Link></button>
      </div>
    </div>
  );
};
