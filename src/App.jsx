import './Style.css'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { LoadHomepage } from './Homepage';



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

export function CreateProduct() {
  const [currProducts, setProducts] = useState(Products);

  function AddProduct(id) {
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

  function DeleteProduct(id) {
    setProducts(prevProduct => {
      return prevProduct.map(product => {
        if (product.id === id && product.count > 0) {
          return {
            ...product,
            count: product.count - 1,
          };
        }
        else return product;
      });
    })
  }

  const Inventory = currProducts.map(Product =>

    <li className='productBox' id='productBox' key={Product.id} >
      <p id='prodHeading'>
        Name: {Product.name} <br />
        Price: ${Product.Price}  </p>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button className='Add-DelButton' onClick={() => AddProduct(Product.id)}> + </button>
        <FontAwesomeIcon icon={faShoppingCart} style={{ marginTop: '3%' }} />
        <button className='Add-DelButton' onClick={() => DeleteProduct(Product.id)}> - </button>
      </div><br />

      {Product.count} in the cart

    </li>);

  return (<ul>{Inventory} </ul>);

}


export function ReactShop() {
  return (
    <>
      <LoadHomepage />

      <div id='ShoppingPage' style={{ display: 'none' }}>

        <h1 className="ShoppingPageHeading"> Welcome to my React Shop </h1> <br />

        <div style={{ marginBottom: '1%', display: 'flex', justifyContent: 'center' }}>
          <CreateProduct />
        </div>

      </div>
    </>
  );
}

