import './Style.css'
import { useState } from 'react';

const Products = [
  { id: 0, name: 'Table', Price: 203, src: '', count: 0 },
  { id: 1, name: 'Chair', Price: 40, src: '', count: 0 },
  { id: 2, name: 'WI-Fi', Price: 60, src: '', count: 0 },
  { id: 3, name: 'Mobile', Price: 240, src: '', count: 0 },
  { id: 4, name: 'Ladder', Price: 203, src: '', count: 0 },
  { id: 5, name: 'Ball', Price: 40, src: '', count: 0 },
  { id: 6, name: 'Car', Price: 60, src: '', count: 0 },
  { id: 7, name: 'Truck', Price: 240, src: '', count: 0 },
  { id: 8, name: 'Ball', Price: 40, src: '', count: 0 },
  { id: 9, name: 'Car', Price: 60, src: '', count: 0 },
  { id: 10, name: 'Truck', Price: 240, src: '', count: 0 },
  { id: 11, name: 'Laptop', Price: 240, src: '', count: 0 }

];


export function Boxes() {
  const [currProducts, setProducts] = useState(Products);

  function Add(id) {
    setProducts(prevProducts => {
      return prevProducts.map(product => {
        if (product.id === id) {
          return {
            ...product,
            count: product.count + 1
          };
        }
        else return product;
      });
    })
  }


  function Delete(id) {
    setProducts(prevProduct => {
      return prevProduct.map(product => {
        if (product.id === id && product.count >0) {
          return {
            ...product,
          count: product.count - 1
        };
      }
      else return product;
    });
  })
}

  const Inventory = currProducts.map(Product =>

    <li className='box' key={Product.id} style={{ display: 'inline-block', marginBottom: '1%' }}>
      <p>Name: {Product.name} </p>
      <p>Price: {Product.Price} </p>

      <div style={{ display: 'flex' }}>
        <button className='button' onClick={() => Add(Product.id)}> + </button>  {Product.count} in the cart
        <button className='button' onClick={() => Delete(Product.id)}> - </button>
      </div>
    </li>
  );

  return (<ul>{Inventory} </ul>);

}

export function BoxesList() {
  return (
    <div style={{ marginBottom: '1%' }}>
      <Boxes />
    </div>
  )
}


export function MyButton() {

  return (
    <div>
      <h1 className="Heading"> Welcome to my React app </h1> <br />
      <BoxesList />
    </div>
  );
}

