import logo from './logo.svg';
import './App.css';

import { Border, Search, BoxArrowRight, GeoAltFill, Truck, Receipt, HeartFill } from 'react-bootstrap-icons';

import Logo from './imgs/logo.png';
import { Button, DropdownMenu } from 'reactstrap';

import { useState } from 'react';



function App() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleDropdown = (isVisible) => {
    setDropdownVisible(isVisible);
  };

  const [isDropdownVisible2, setDropdownVisible2] = useState([false,false,false]);

  const handleDropdown2 = (isVisible2,index) => {
    
    if(index == 0){
      setDropdownVisible2([true,false,false]);
    }else if(index  == 1){
      setDropdownVisible2([false,true,false]);
    }else if(index == 2){
      setDropdownVisible2([false,false,true]);
    }
  };

  

  return (
    <div className="App">

      <div style={{ backgroundColor: "#051500" }} className='text-sm/[17px] flex flex-row items-center text-white w-screen bg-green-950 h-10'>
        <div className=' lg:w-1/2 md:ml-20 ml-20'>

        </div>
        <BoxArrowRight className='mx-1 font-bold ' />
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
        <div className='md:ms-20 hidden md:block '>
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

      <div style={{ backgroundColor: "#0B2F00" }} className=' pt-4 flex flex-row justify-center'>

        <div

          style={{ borderRight: "none", border: "medium solid white  ", borderTopRightRadius: '0px', borderBottomLeftRadius: '20px' }}
          className=' w-[10rem] sm:w-[10rem] text-sm/[12px] py-2  px-5 bg-white text-black  ' onClick={() => { console.log('hi') }}>

          <div class="dropdown flex flex-row">
            <button
              style={{ all: "unset" }}
              class=" dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Categories
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" style={{ position: 'relative', border: "none" }}>
              <div className=' d-grid grid-flow-row grid-cols-12'>
                <div className=' col-span-6  flex flex-col'>
                  <div
                    onMouseEnter={() => handleDropdown2([],0)}

                    style={{ all: "unset", border: "none" }}
                    class="dropdown-item my-2 rounded-md " >
                    <label>Vegetables</label>
                  </div>
                  <div
                    onMouseEnter={() => handleDropdown2([],1)}

                    style={{ all: "unset", border: "none" }}
                    class="dropdown-item my-2" >
                    Fruits
                  </div>
                  <div
                    onMouseEnter={() => handleDropdown2([],2)}

                    style={{ all: "unset", border: "none" }}
                    class="dropdown-item my-2" >
                    Meat
                  </div>
                </div>
                <div className=' col-span-6 ms-1'>
                  {isDropdownVisible2[0] && (

                    <div style={{ borderLeft: "1px solid black" }} className='absolute  h-20 w-screen ml-20 mb-20 '>
                      <ul>
                        <li className=' my-1'>Pola</li>
                        <li className=' my-1'>Organic</li>
                        <li className=' my-1'>Packets and Units</li>
                        <li className=' my-1'>Exotic</li>
                        <li className=' my-1 flex flex-row'>Low Country Vegetables</li>
                      </ul>
                    </div>
                  )}
                  {isDropdownVisible2[1] && (

                    <div style={{ borderLeft: "1px solid black" }} className='absolute  h-20 w-screen ml-20 mb-20 '>
                      <ul>
                        <li className=' my-1'>Organic</li>
                        <li className=' my-1'>Inorganic</li>
                      </ul>
                    </div>
                  )}
                  {isDropdownVisible2[2] && (

                    <div style={{ borderLeft: "1px solid black" }} className='absolute  h-20 w-screen ml-20 mb-20 '>
                      <ul>
                        <li className=' my-1'>Fresh Meat</li>
                        <li className=' my-1'>Frozen Chicken</li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>



            </div>

          </div>

        </div>
        <div className='w-30 sm:w-60 md:w-1/2 border border-white text-black bg-white flex flex-row items-center border-solid border-current py-2 '>
          <Search />
          <input style={{ border: "none", backgroundColor: "", outline: "none" }} className='ps-2 bg-white' placeholder='Search' />
        </div>

        <div style={{ border: "medium solid green  ", backgroundColor: "#51AC37", borderTopRightRadius: '20px', borderBottomLeftRadius: '0px' }}
          className='w-[10rem] sm:w-[15rem] text-sm/[2rem] py-2 px-5 text-white flex flex-row items-center' onClick={() => { console.log('hi') }}>Search Products<Search className=' mx-1' /></div>

      </div>

      {/* {isDropdownVisible && (
        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown button
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </div>
      )} */}
    </div>
  );
}

export default App;
