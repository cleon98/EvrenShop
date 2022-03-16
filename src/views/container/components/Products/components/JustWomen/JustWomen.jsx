import React, {useState} from 'react'
import { products } from '../../../../../../data/items';
import EachProduct from '../Product/EachProduct';


const JustWomen = () => {
    const [prodsData, setProdsData] = useState(products);
  return (
        <section>
            <h1>Mujer</h1>
            {prodsData.filter((item) => item.gender === "Mujer").map((filteredItem) => (
                <EachProduct id={filteredItem.id}
                category={filteredItem.category}
                name={filteredItem.name}
                description={filteredItem.description}
                price={filteredItem.price}
                img={filteredItem.img}/>
            ))}
        </section>
      )
    }

export default JustWomen