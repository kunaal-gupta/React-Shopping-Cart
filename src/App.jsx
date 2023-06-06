import './Style.css'

const Product = [
  {id: 0, name: 'Table', Price: 203, src: ''},
  {id: 0, name: 'Chair', Price: 40, src: ''},
  {id: 0, name: 'Television', Price: 60, src: ''},
  {id: 0, name: 'Mobile', Price: 240, src: '' }
  ];





export function Boxes() {
  const Inventory = Product.map(Val => 
    <li className='box' key={Val.id}>
      <p>Name: {Val.name} </p>
      <p>Price: { Val.Price} </p>
    </li>
  );

  return (<ul>{Inventory} </ul>);

}

export function BoxesList() {
  return (
    <div style={{ display: 'flex', marginBottom: '2%' }}>
      <Boxes />

    </div>
  )
}

export function MyButton() {

  return (
    <div>
      <h1 className="Heading"> Welcome to my React app </h1>
      <BoxesList />
      <BoxesList />
      <BoxesList />
    </div>
  );
}