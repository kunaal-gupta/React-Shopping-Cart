import './Style.css'

const Product = [
  { id: 0, name: 'Table', Price: 203, src: '' },
  { id: 1, name: 'Chair', Price: 40, src: '' },
  { id: 2, name: 'Television', Price: 60, src: '' },
  { id: 3, name: 'Mobile', Price: 240, src: '' },
  { id: 4, name: 'Ladder', Price: 203, src: '' },
  { id: 5, name: 'Ball', Price: 40, src: '' },
  { id: 6, name: 'Car', Price: 60, src: '' },
  { id: 7, name: 'Truck', Price: 240, src: '' },
  { id: 8, name: 'Ball', Price: 40, src: '' },
  { id: 9, name: 'Car', Price: 60, src: '' },
  { id: 10, name: 'Truck', Price: 240, src: '' },
  { id: 11, name: 'Laptop', Price: 240, src: '' }

];



export function Boxes() {
  function Add() {
    alert('Added to cart');
  }

  function Delete() {
    alert('Removed from cart');
  }
  const Inventory = Product.map(Val =>
    <li className='box' key={Val.id} style={{display: 'inline-block', marginBottom: '1%'}}>
      <p>Name: {Val.name} </p>
      <p>Price: {Val.Price} </p>

      <div style={{display: 'flex'}}> 
        <button className='button' onClick={Add}> + </button>

        <button className='button' onClick={Delete}> - </button>
      </div>

    </li>
  );

  return (<ul>{Inventory} </ul>);

}

export function BoxesList() {
  return (
    <div style={{marginBottom: '1%'}}>
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