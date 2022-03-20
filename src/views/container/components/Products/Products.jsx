import React from "react";
import EachProduct from "./components/Product/EachProduct";
import styles from './styles.module.css'

const Products = ({products}) => {
  return (
    <div>
      <h1 className={styles.productsTitle}>Catálogo</h1>
      <section className={styles.productsList}>
        {products.map((item, index) => (
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
