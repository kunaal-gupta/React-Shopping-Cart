import './Style.css'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { LoadHomepage } from './Homepage';
import { useEffect } from 'react';

const Products = [
  { id: 0, name: 'Next.js', Price: 20, src: '', count: 0 },
  { id: 1, name: 'Gatsby', Price: 450, src: '', count: 0 },
  { id: 2, name: 'Redux', Price: 360, src: '', count: 0 },
  { id: 3, name: 'Router', Price: 240, src: '', count: 0 },
  { id: 4, name: 'Rebass', Price: 160, src: '', count: 0 },
  { id: 5, name: 'FuseBox', Price: 177, src: '', count: 0 },
  { id: 6, name: 'Vite', Price: 690, src: '', count: 0 },
  { id: 7, name: 'Formik', Price: 340, src: '', count: 0 },
  { id: 8, name: 'Chakra UI', Price: 140, src: '', count: 0 },
  { id: 9, name: 'Recoil', Price: 260, src: '', count: 0 },
  { id: 10, name: 'R.Native', Price: 154, src: '', count: 0 },
  { id: 11, name: 'Razzle', Price: 70, src: '', count: 0 }

];


export function ReactShop() {
  const [currProducts, setProducts] = useState(Products);

  let totalPrice = 0;

  currProducts.forEach(element => {
    totalPrice += element.Price * element.count;

  });

  let totalTax = 0.02 * totalPrice;
  let Total = totalPrice + totalTax;

  function CreateProduct() {

    const Inventory = currProducts.map(Product =>

      <li className='productBox' id='productBox' key={Product.id} >
        <span className='counter'>{Product.count}</span>

        <p id='prodHeading'>
          <span style={{ color: 'black' }}>Name</span>: {Product.name} <br />
          <span style={{ color: 'black' }}>Price:</span> ${Product.Price}  </p>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button className='Add-DelButton' id='AddButton' onClick={() =>
            setProducts(currProducts.map((a) => {
              if (a.id == Product.id) {
                return { ...a, count: a.count + 1 }
              }
              return a;
            }
            ))

          }> + </button>


          <FontAwesomeIcon icon={faShoppingCart} style={{ marginTop: '0%' }} />
          <button className='Add-DelButton' id='DelButton' onClick={() =>
            setProducts(currProducts.map((a) => {
              if (a.id == Product.id && a.count >= 1) {
                return { ...a, count: a.count - 1 }
              }
              return a;
            }
            ))

          }> - </button>        </div><br />



      </li>);

    return (<ul className='Inv'>{Inventory} </ul>);

  }

  function HideShoppingPage() {
    document.getElementById('ShoppingPage').style.display = 'none';
    document.getElementById('sloader').style.display = 'block';

    setTimeout(() => {
      document.getElementById('sloader').style.display = 'none';

      document.getElementById('ShoppingPage').style.display = 'none';
      document.getElementById('CheckoutPage').style.display = 'block';
    }, 500
    )
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

  function LoadCheckoutPage() {

    return (
      <>
        <div className="CheckoutPage">
          <h1 style={{ textAlign: 'center' }}> Thank you for shopping with us</h1><hr /><br></br>


          <div className="Heading-checkoutpage"> Review your Order</div>
          <div>

            <table style={{ border: '1px solid black', width: '100%' }}>
              <thead>
                <tr >
                  <th className='table-Pcount' style={{ backgroundColor: 'lightgrey' }}>Qty</th>
                  <th className='table-Pname' style={{ backgroundColor: 'lightgrey' }}>Product Name</th>
                  <th className='table-Pprice' style={{ backgroundColor: 'lightgrey' }}>Price</th>
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
            </table><br></br>
            <button id='Calc-checkoutpage' className='Calc-checkoutpage' onClick={CalculateBill}>Calculate My Bill </button>
          </div>

          <div className="billing-checkoutpage" id='billing-checkoutpage'>
            <br />
            <table style={{ fontSize: '100%' }}>
              <tr> <td className='BillFinancesHead'> SubTotal:  </td> <td className='BillFinancesValue'>  ${totalPrice.toFixed(2)}   </td></tr>
              <tr> <td className='BillFinancesHead'> Tax (2%): </td> <td className='BillFinancesValue'>  ${(totalTax).toFixed(2)}    </td></tr><br></br>
              <tr> <td style={{ fontWeight: '9000', fontSize: '29px' }} className='BillFinancesHead'> Total:     </td> <td className='BillFinancesValue'>  ${Total.toFixed(2)}       </td></tr>

            </table>
          </div >
          <hr></hr>

        </div >
        <div className='cloader' id='cloader'></div>
      </>
    )
  }



  return (
    <>
      <LoadHomepage />
      <div id='ShoppingPage' style={{ display: 'none' }}>

        <h1 className="ShoppingPageHeading"> Welcome to Courses on React Frameworks</h1><hr style={{ width: "50%" }}></hr>
        <div style={{ marginBottom: '1%', display: 'flex', justifyContent: 'center' }}>
          <CreateProduct />
        </div>

        <button className='CheckoutButton' onClick={HideShoppingPage}>Proceed to Checkout</button>

      </div>
      <div className='sloader' id='sloader'></div>


      <div id='CheckoutPage' style={{ display: 'none' }}>
        <LoadCheckoutPage />
      </div>
    </>
  );
}

