import React from 'react'
import EachProduct from '../Product/EachProduct';
import styles from './styles.module.css'


const JustWomen = ({products}) => {
  return (
        <div>
            <h1 className={styles.womenTitle}>Mujer</h1>
            <section className={styles.womenList}>
            {products.filter((item) => item.gender === "Mujer").map((filteredItem) => (
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

export default JustWomen