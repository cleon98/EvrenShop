import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.css'

const EachProduct = (props) => {
    const {id, category, name, price, img} = props
  return (
    <Link to={`/catalogo/${id}`}>
        <section className={styles.eachProductList}>
            <img src={img} alt="products listed in the website"/>
            <h2>{category}</h2>
            <p>{name}</p>
            <h3>{price}</h3>
        </section>
    </Link>
  )
}

export default EachProduct