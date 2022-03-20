import React from "react";


export const ShoppingCart = ({ products, cartItem, addToCart }) => {
  return (
    <div>
      <div>
        {cartItem.length === 0 && (
          <div>Tu carrito esta vacio.</div>
        )}
      </div>
      <section>
        {cartItem.map((item) => (
            <div key={item.id}>
                <img src={item.img} alt="Products added to your cart" />
                <h2>{item.category}</h2>
                <p>{item.name}</p>
                <h2>$ {item.price}</h2>
            </div>
        ))}
      </section>
    </div>
  );
};
