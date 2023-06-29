
export function LoadHomepage() {
    function Loader () {
  
      document.getElementById('loader').style.display = 'block';
      setTimeout(() =>
      {
        document.getElementById('WelcomePage').style.display = 'none';
        document.getElementById('ShoppingPage').style.display = 'block';
  
      },1000)
  
    }
  
    return (
        <div id='WelcomePage'>        
            <h1 style={{fontSize: '320%', marginLeft: '25%', marginTop: '20%', fontFamily: 'Calibri'}}> Welcome to React Shopping Centre </h1> <br />
            <button className= 'HomepageButton' id='HomepageButton' onClick={Loader}> Start Shopping </button>
            <div className='loader' id='loader'>
            </div>
        </div>
    );
  }
  
  