import './Style.css'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';



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
          count: product.count - 1,
          

        };
      }
      else return product;
    });
  })
}

  const Inventory = currProducts.map(Product =>

    <li className='box' id = 'box' key={Product.id} >
      <p id='prodHeading'> 
        Name: {Product.name} <br/>
        Price: ${Product.Price}  </p>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button className='Add_Del_button' onClick={() => Add(Product.id)}> + </button>  
        <FontAwesomeIcon icon={faShoppingCart} style={{marginTop: '3%'}}/>
        <button className='Add_Del_button' onClick={() => Delete(Product.id)}> - </button>
      </div><br/>

      {Product.count} in the cart

    </li>
    
  );

  return (<ul>{Inventory} </ul>);

}

export function BoxesList() {
  return (
    <div style={{ marginBottom: '1%', display: 'flex', justifyContent: 'center' }}>
      <Boxes />
    </div>
  )
}



export function Homepage() {
  function hideHomepage () {

    document.getElementById('loader').style.display = 'block';
    setTimeout(() =>
    {
      document.getElementById('welcomepage').style.display = 'none';
      document.getElementById('shoppingPage').style.display = 'block'


    },2000)



  }

  return (
      <div id='welcomepage'>        
          <h1 style={{fontSize: '320%', marginLeft: '25%', marginTop: '20%', fontFamily: 'Calibri'}}> Welcome to React Shopping Cart </h1> <br />
          <button className= 'HomepageButton' id='HomepageButton' onClick={hideHomepage}> Start Shopping </button>
          <div className='loader' id='loader'>
          </div>
      </div>
  );
}

3
export function ReactShop() {
  return (
    <>
      <Homepage />

      <div id = 'shoppingPage' style={{display: 'none'}}>
        <h1 className="Heading"> Welcome to my React Shopping app </h1> <br />
        <BoxesList />
  
      </div>
      {/* <ul> {Products.map((e) => {
        return <li key={e.id}> {e.name}  {e.count} </li>
      })}
      </ul> */}
    </>
  );
}

