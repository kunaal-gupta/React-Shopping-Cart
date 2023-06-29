import './Style.css'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { LoadHomepage } from './Homepage';
import { useEffect } from 'react';

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

  let totalPrice = 0;

  currProducts.forEach(element => {
    totalPrice += element.Price * element.count;

  });

  let totalTax = 0.2 * totalPrice;
  let Total = totalPrice + totalTax;



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

  function HideShoppingPage() {
    document.getElementById('ShoppingPage').style.display = 'none';
    document.getElementById('CheckoutPage').style.display = 'block';

  }

  function CalculateBill() {
    document.getElementById('Calc-checkoutpage').style.display = 'none';
    document.getElementById('cloader').style.display = 'block';

    setTimeout(() => {
      document.getElementById('cloader').style.display = 'none';
      document.getElementById('billing-checkoutpage').style.display = 'block';
    }, 500
    )


  }
  let isCountZeroForallProducts = currProducts.every(items => items.count === 0)

  function LoadCheckoutPage() {

    return (
      <>
        <div className="CheckoutPage">
          <div className="Heading-checkoutpage"> Review your Order</div><hr />
          <div>
            <table style={{ border: '1px solid black', width: '100%' }}>
              <thead>
                <tr >
                  <th className='table-Pcount' style={{ backgroundColor: 'rgb(230, 205, 205)' }}>Count</th>
                  <th className='table-Pname' style={{ backgroundColor: 'rgb(230, 205, 205)' }}>Name</th>
                  <th className='table-Pprice' style={{ backgroundColor: 'rgb(230, 205, 205)' }}>Price</th>
                </tr>
              </thead>
              <tbody>
                {              
                  currProducts.map((element) => {
                            if (element.count != 0) {
                      return (
                        <tr key={element.id}>
                          <td className='table-Pcount'>  x{element.count}</td>
                          <td className='table-Pname'>    {element.name} </td>
                          <td className='table-Pprice'>  ${element.Price}</td>
                        </tr>
                      )
                    } 
                  }
                  )}

              </tbody>
            </table>
            <button id='Calc-checkoutpage' className='Calc-checkoutpage' onClick={CalculateBill}>Calculate My Bill </button>
          </div>

          <div className="billing-checkoutpage" id='billing-checkoutpage'>
            <br /><hr />
            <table style={{ fontSize: '100%' }}>
              <tr> <td className='BillFinancesHead'> SubTotal:  </td> <td className='BillFinancesValue'>  ${totalPrice}   </td></tr>
              <tr> <td className='BillFinancesHead'> Tax (20%): </td> <td className='BillFinancesValue'>  ${totalTax}     </td></tr>
              <tr> <td className='BillFinancesHead'> Total:     </td> <td className='BillFinancesValue'>  ${Total}       </td></tr>

            </table>
          </div >

        </div >
        <div className='cloader' id='cloader'></div>
      </>
    )
  }


  return (
    <>
      <LoadHomepage />

      <div id='ShoppingPage' style={{ display: 'none' }}>

        <h1 className="ShoppingPageHeading"> Welcome to my React Shop </h1> <br />
        <div style={{ marginBottom: '1%', display: 'flex', justifyContent: 'center' }}>
          <CreateProduct />
        </div>
        <button className='CheckoutButton' onClick={HideShoppingPage}>Proceed to Checkout</button>

      </div>

      <div id='CheckoutPage' style={{ display: 'none' }}>
        <LoadCheckoutPage />
      </div>


    </>
  );
}

