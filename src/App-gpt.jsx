

import React, { useState } from 'react';

export function Boxes() {
  const [products, setProducts] = useState(Product);

  function handleAdd(id) {
    setProducts(prevProducts => {
      return prevProducts.map(product => {
        if (product.id === id) {
          return {
            ...product,
            count: product.count + 1
          };
        }
        return product;
      });
    });
  }

  function handleDelete(id) {
    setProducts(prevProducts => {
      return prevProducts.map(product => {
        if (product.id === id && product.count > 0) {
          return {
            ...product,
            count: product.count - 1
          };
        }
        return product;
      });
    });
  }

  const Inventory = products.map(product => (
    <li className='box' key={product.id} style={{ display: 'inline-block', marginBottom: '1%' }}>
      <p>Name: {product.name}</p>
      <p>Price: {product.price}</p>
      <div style={{ display: 'flex' }}>
        <button className='button' onClick={() => handleAdd(product.id)}>+</button>
            {product.count} in the cart
        <button className='button' onClick={() => handleDelete(product.id)}>-</button>
      </div>
    </li>
  ));

  return <ul>{Inventory}</ul>;
}

const Product = [
  { id: 1, name: 'Product 1', price: 10, count: 0 },
  { id: 2, name: 'Product 2', price: 20, count: 0 },
  { id: 3, name: 'Product 3', price: 30, count: 0 },
];
