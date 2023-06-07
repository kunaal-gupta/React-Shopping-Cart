import './Style.css'
import { useState } from 'react';

const Products = [
  { id: 0, name: 'Table', Price: 203, src: '', count: 0 },
  { id: 1, name: 'Chair', Price: 40, src: '', count: 0 },
  { id: 2, name: 'Television', Price: 60, src: '', count: 0 },
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
  const [count, setCount] = useState(0);

  function Add(id) {
    
    setCount(count + 1);
  }

  function Delete(id) {
    setCount(count - 1);
  }

  const Inventory = Products.map(Product => 
    
      <li className='box' key={Product.id} style={{display: 'inline-block', marginBottom: '1%'}}>
        <p>Name: {Product.name} </p>
        <p>Price: {Product.Price} </p>
        
        <div style={{display: 'flex'}}> 
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

