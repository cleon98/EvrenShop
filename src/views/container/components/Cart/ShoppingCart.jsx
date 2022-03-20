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
            <p></p>
        ))}
      </section>
    </div>
  );
};
