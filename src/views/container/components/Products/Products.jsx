import React, { useState } from "react";
import EachProduct from "./components/Product/EachProduct";
import  { products } from "../../../../data/items"
import styles from './styles.module.css'

const Products = () => {
    const [prodsData, setProdsData] = useState(products);
  return (
    <div>
      <h1 className={styles.productsTitle}>Catálogo</h1>
      <section className={styles.productsList}>
        {prodsData.map((item, index) => (
            <EachProduct id={item.id}
            category={item.category}
            name={item.name}
            description={item.description}
            price={item.price}
            gender={item.gender}
            img={item.img}
            key={index} />
        ))}
        
      </section>
    </div>
  );
};

export default Products;
