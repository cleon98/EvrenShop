
import React from 'react'
import { Link, useParams } from "react-router-dom";
import styles from './styles.module.css'

const ProductsView = ({products, addToCart}) => {

    const {id} = useParams();
    const product = products.find(product => product.id ==  id);

  return (
    <div>
        <section className={styles.viewProduct} >
        <img  className={styles.viewImage} src={product.img} alt="Selected product" />
        <div className={styles.viewTextBox} >
        <h2 className={styles.viewTextCategory} >{product.category}</h2>
        <p className={styles.viewTextName}>{product.name}</p>
        <h3 className={styles.viewTextPrice}> <span  className={styles.viewTextPriceTitle} >Precio:</span><br/> $ {product.price}</h3>
        <p className={styles.viewTextDescription}><span className={styles.viewTextDescriptionTitle} >Descripción</span><br/> {product.description}</p>
        </div>
        </section>
        <div className={styles.viewButtons} >
            <button className={styles.viewAddCart} onClick={() => addToCart(products)} >Añadelo al carrito</button>
            <Link to='/catalogo'><button className={styles.viewBack} >Sigue comprando</button></Link>
        </div>
    </div>
  )
}

export default ProductsView