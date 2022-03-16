import React, {useState} from 'react'
import { products } from '../../../../../../data/items';
import EachProduct from '../Product/EachProduct';
import styles from './styles.module.css'

const JustMen = () => {
    const [prodsData, setProdsData] = useState(products);
  return (
    <div>
        <h1 className={styles.menTitle} >Hombre</h1>
        <section className={styles.menList} >
        {prodsData.filter((item) => item.gender === "Hombre").map((filteredItem) => (
            <EachProduct id={filteredItem.id}
            category={filteredItem.category}
            name={filteredItem.name}
            description={filteredItem.description}
            price={filteredItem.price}
            img={filteredItem.img}/>
        ))}
        </section>
    </div>
  )
}

export default JustMen