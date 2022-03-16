import React, {useState} from 'react'
import { products } from '../../../../../../data/items';
import EachProduct from '../Product/EachProduct';
import styles from './styles.module.css'


const JustWomen = () => {
    const [prodsData, setProdsData] = useState(products);
  return (
        <div>
            <h1 className={styles.womenTitle}>Mujer</h1>
            <section className={styles.womenList}>
            {prodsData.filter((item) => item.gender === "Mujer").map((filteredItem) => (
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

export default JustWomen