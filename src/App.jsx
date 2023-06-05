import './Style.css'

const Product = {

  
}

export function Boxes() {
  return (
    <div className='box'> 
      <p>j</p>
      <p>Name: {} </p>
      <p>Price: {} </p>
    </div>
  );
}

export function BoxesList() {
  return (
    <div style={{display: 'flex', marginBottom: '2%'}}>
      <Boxes />
      <Boxes />
      <Boxes />
      <Boxes />
      <Boxes />
    </div>
  )
}

export function MyButton() {

  return (
    <div>
      <h1 className="Heading"> Welcome to my React app </h1>
      <BoxesList/>
      <BoxesList/>
      <BoxesList/>
    </div>
  );
}