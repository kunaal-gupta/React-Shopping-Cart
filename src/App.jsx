import './Style.css'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { LoadHomepage } from './Homepage';
import { useEffect } from 'react';
import { element } from 'prop-types';




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


export function ReactShop() {
  const [currProducts, setProducts] = useState(Products);


   function CreateProduct() {
  
    useEffect(() => {
      console.log(currProducts);
    });
  
    const Inventory = currProducts.map(Product =>
  
      <li className='productBox' id='productBox' key={Product.id} >
        <p id='prodHeading'>
          Name: {Product.name} <br />
          Price: $ {Product.Price}  </p>
  
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button className='Add-DelButton' onClick={() =>
            setProducts(currProducts.map((a) => {
              if (a.id == Product.id) {
                return { ...a, count: a.count + 1 }
              }
              return a;
            }
            ))
  
          }> + </button>
  
  
          <FontAwesomeIcon icon={faShoppingCart} style={{ marginTop: '3%' }} />
          <button className='Add-DelButton' onClick={() => DeleteProduct(Product.id)}> - </button>
        </div><br />
  
  
        {Product.count} in the cart
  
      </li>);
  
    return (<ul>{Inventory} </ul>);
  
  }

  let totalPrice = 0;
  currProducts.forEach(element => {
    totalPrice += element.Price * element.count; 

  });

  return (
    <>
      <LoadHomepage />

      <div id='ShoppingPage' style={{ display: 'none' }}>

        <h1 className="ShoppingPageHeading"> Welcome to my React Shop </h1> <br />

        <div style={{ marginBottom: '1%', display: 'flex', justifyContent: 'center' }}>
          <CreateProduct />
        </div>

        <button className='CheckoutButton'>Proceed to Checkout</button>
        <div>
          <h3>Price: {totalPrice}</h3>
        </div>

      </div>
    </>
  );
}

