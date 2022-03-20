import React from 'react'
import EachProduct from '../Product/EachProduct';
import styles from './styles.module.css'

const JustMen = ({products}) => {
  return (
    <div>
        <h1 className={styles.menTitle} >Hombre</h1>
        <section className={styles.menList} >
        {products.filter((item) => item.gender === "Hombre" ).map((filteredItem) => (
            <EachProduct id={filteredItem.id}
            category={filteredItem.category}
            name={filteredItem.name}
            description={filteredItem.description}
            price={filteredItem.price}
            img={filteredItem.img}
            key={filteredItem.id}/>
        ))}
        </section>
    </div>
  )
}

export default JustMen