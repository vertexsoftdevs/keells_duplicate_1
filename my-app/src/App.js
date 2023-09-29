import logo from './logo.svg';
import './App.css';

import { Border, Search, BoxArrowRight, GeoAltFill, Truck, Receipt, HeartFill } from 'react-bootstrap-icons';

import Logo from './imgs/logo.png';

function App() {
  return (
    <div className="App">

      <div style={{ backgroundColor: "#051500" }} className=' text-sm flex flex-row items-center text-white w-screen bg-green-950 h-10'>
        <div className=' lg:w-1/2 md:ml-20 ml-20'>

        </div>
        <BoxArrowRight className='text-sm mx-1 font-bold ' />
        <label className=' mx-1 hover:underline font-medium' >Track My Order</label> |
        <GeoAltFill className=' text-sm' />
        <label className=' font-medium mx-1'> Store Location</label> |
        <label className=' text-green-600 font-medium mx-1'> Darley Road</label> |
        <Truck className=' mx-1 text-sm ' />
        <label className='mr-2'>Shipping Method</label>
        <label className='text-green-600 font-medium mx-1 '>Delivery</label> |
        <BoxArrowRight className=' mx-1 font-bold text-sm ' />
        <label className=' mx-1 hover:underline font-medium' >Sign Up</label>
      </div>
      <div style={{ backgroundColor: "#0B2F00" }} className='  text-sm flex flex-row items-center text-white w-screen  h-30'>
        <div className='md:ms-20'>
          <img className=' h-10 w-30' src={Logo} />
        </div>
        <div className=' flex flex-row'>
          <div className=' md:w-20'>

          </div>
          <label className=' mx-1 hover:underline font-medium' >Home</label>

          <label className=' font-medium mx-1'> Keells Products</label>
          <label className=' text-green-600 font-medium mx-1'> Keells Exclusive</label>

          <label className='mr-2'>All Promotions</label>

          <Receipt className='text-green-400  mx-1 font-bold text-xl ' />
          <label className='text-green-400 font-medium mx-1 '>Utility Bill Management</label>

          <HeartFill className='text-green-400  mx-1 font-bold text-xl ' />
          <label className=' mx-1 hover:underline font-medium' >Community</label>
        </div>
      </div>

      <div style={{ backgroundColor: "#0B2F00" }} className=' flex flex-row justify-center'>

        <div style={{ borderRight:"none",border: "medium solid white  ", borderTopRightRadius: '0px', borderBottomLeftRadius: '20px' }} className=' py-2  px-5 bg-white text-black  ' onClick={() => { console.log('hi') }}>
          Categories</div>
        <div className=' border border-white text-black bg-white flex flex-row items-center border-solid border-current py-2 '>
          <Search />
          <input style={{ border: "none", backgroundColor: "", outline: "none" }} className='ps-2 bg-white' placeholder='Search' />
        </div>

        <div style={{ border: "medium solid green  ", backgroundColor: "#51AC37", borderTopRightRadius: '20px', borderBottomLeftRadius: '0px' }} className=' py-2 px-5 text-white flex flex-row items-center' onClick={() => { console.log('hi') }}>Search Products<Search className=' mx-1' /></div>
      
      </div>
    </div>
  );
}

export default App;
