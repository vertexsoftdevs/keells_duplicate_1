import axios from 'axios';

import logo from './logo.svg';
import './App.css';

import { Border, Search, BoxArrowRight, GeoAltFill, Truck, Receipt, HeartFill, Clock, Send, Check2Circle, HandIndex, HandThumbsUp, CartFill } from 'react-bootstrap-icons';

import Logo from './imgs/logo.png';
import { Button, DropdownMenu } from 'reactstrap';

import { useEffect, useState } from 'react';
import Slide1 from './imgs/slide1.jpg';
import Slide2 from './imgs/slide2.jpg';
import Slide3 from './imgs/slide3.jpg';

import Banner1 from './imgs/banner1.jpg';
import Banner2 from './imgs/banner2.jpg';

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import Item1 from './imgs/items/1.jpg';
import Item2 from './imgs/items/2.jpg';
import Item3 from './imgs/items/3.jpg';


// import OwlCarousel from 'react-owl-carousel2';
// import 'react-owl-carousel2/style.css';



function Home() {
  const [isLoading, setIsLoading] = useState(true);
  
  const [productArray, setProductArray] = useState([]);

  const [isDropdownVisible, setDropdownVisible] = useState(false);

  

  const handleDropdown = (isVisible) => {
    setDropdownVisible(isVisible);
  };

  const [isDropdownVisible2, setDropdownVisible2] = useState([false, false, false]);

  const handleDropdown2 = (isVisible2, index) => {

    if (index == 0) {
      setDropdownVisible2([true, false, false]);
    } else if (index == 1) {
      setDropdownVisible2([false, true, false]);
    } else if (index == 2) {
      setDropdownVisible2([false, false, true]);
    }
  };

  const setProducts = async () => {

    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'http://localhost/keellsBackend/displayItems.php',
      headers: {}
    };

    try {
      const response = await axios.request(config);

      setProductArray(await response.data);

    } catch (e) {
      console.debug(e);
    }


  }

  useEffect(() => {
    // Simulate loading delay for demonstration purposes
    setTimeout(() => {
      setIsLoading(false); // Set loading state to false when data is loaded
    }, 15000); // 2000 milliseconds (2 seconds) delay for demonstration
  }, []); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        let config = {
          method: 'get',
          maxBodyLength: Infinity,
          url: 'http://localhost/keellsBackend/displayItems.php',
          headers: {}
        };
  
        const response = await axios.request(config);
        setProductArray(response.data);
      } catch (error) {
        console.error(error);
      }
    };
  
    // Delay the execution of fetchData by 10 seconds (10000 milliseconds) once
    const fetchDataTimeout = setTimeout(fetchData, 10000);
  
    // Clear the timeout to avoid subsequent executions if the component unmounts
    return () => {
      clearTimeout(fetchDataTimeout);
    };
  }, []);


  // setTimeout(setProducts, 10000);

  if (localStorage.getItem("loginObj"))

    return (
      isLoading ? <p>Loading...</p> : 
      <div className="App">
        <div className=' z-10 position-fixed top-0'>
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

              <div class="dropdown flex flex-row bg-white items-center">
                <button
                  style={{}}
                  className=" dropdown-toggle mt-2 "
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >Categories
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" style={{
                  position: 'relative', border: "none",
                  borderBottomRightRadius: "0px",
                  borderBottomLeftRadius: "20px",
                }}>
                  <div className=' d-grid grid-flow-row grid-cols-12'>
                    <div className=' col-span-6  flex flex-col '>
                      <div
                        onMouseEnter={() => handleDropdown2([], 0)}

                        style={{ border: "none" }}
                        class="my-2 rounded-md   " >
                        <div className=' flex flex-row '>
                          <label className=' mx-1'>&gt;</label>
                          <label>Vegetables</label>
                        </div>
                      </div>
                      <div
                        onMouseEnter={() => handleDropdown2([], 1)}

                        style={{ all: "unset", border: "none" }}
                        class="dropdown-item my-2" >
                        <div className=' flex flex-row'>
                          <label className=' mx-1'>&gt;</label>
                          <label>Fruits</label>
                        </div>
                      </div>
                      <div
                        onMouseEnter={() => handleDropdown2([], 2)}

                        style={{ all: "unset", border: "none" }}
                        class="dropdown-item my-2" >
                        <div className=' flex flex-row'>
                          <label className=' mx-1'>&gt;</label>
                          <label>Meat</label>
                        </div>
                      </div>
                    </div>
                    <div style={{ borderBottomLeftRadius: "20px" }} className=' col-span-6    '>
                      {isDropdownVisible2[0] && (

                        <div style={{ borderLeft: "1px solid black" }} className='absolute  h-30 w-60 ml-20 mb-20  bg-white pb-20 '>
                          <ul>
                            <li className=' my-3'>Pola</li>
                            <hr />
                            <li className=' my-3'>Organic</li>
                            <hr />
                            <li className=' my-3'>Packets and Units</li>
                            <hr />
                            <li className=' my-3'>Exotic</li>
                            <hr />
                            <li className=' my-3 flex flex-row'>Low Country Vegetables</li>
                            <hr />
                          </ul>
                        </div>
                      )}
                      {isDropdownVisible2[1] && (

                        <div style={{ borderLeft: "1px solid black" }} className='absolute  h-30 w-60 ml-20 mb-20 bg-white pb-20 '>
                          <ul>
                            <li className=' my-3'>Organic</li>
                            <hr />
                            <li className=' my-3'>Inorganic</li>
                            <hr />

                          </ul>
                        </div>
                      )}
                      {isDropdownVisible2[2] && (

                        <div style={{ borderLeft: "1px solid black" }} className='absolute  h-30 w-60 ml-20 mb-20 bg-white pb-20 '>
                          <ul>
                            <li className=' my-3'>Fresh Meat</li>
                            <hr />
                            <li className=' my-3'>Frozen Chicken</li>
                            <hr />

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
        <div className=' z-0 mt-20'>

          {/* Carousel */}
          <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100" src={Slide1} alt="First slide" />
              </div>
              <div class="carousel-item">
                <img className="d-block w-100" src={Slide2} alt="First slide" />
              </div>
              <div class="carousel-item">
                <img className="d-block w-100" src={Slide3} alt="First slide" />
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
          {/* Carousel */}
          {/* <img src={Slide1} /> */}


          <div className=' w-screen flex flex-row text-center justify-center mt-2 '>

            <Clock className='text-lime-500 mt-1' />
            <label className=' mr-10'>Delivery within 24 Hours</label>
            <Send className='text-lime-500 mt-1' />
            <label className=' mr-10'>Deliver to Doorstep</label>
            <Check2Circle className='text-lime-500 mt-1' />
            <label className=' mr-10'>Freshness Guaranteed</label>
            <HandIndex className='text-lime-500 mt-1' />
            <label className=' mr-10'>Click and Collect</label>
            <HandThumbsUp className='text-lime-500 mt-1' />
            <label>Amazing Deals</label>
          </div>

          <div className=' grid grid-flow-row grid-cols-12'>
            <div className=' col-span-12 md:col-span-6'>
              <img src={Banner1} />
            </div>
            <div className=' col-span-12 md:col-span-6'>
              <img src={Banner2} />
            </div>
          </div>

        </div>
        <div className=' flex flex-col h-10 w-screen text-center '>

          <label className=' text-center text-4xl'>Nexus&nbsp;Deals</label>

          <OwlCarousel responsive={{
            0: {
              items: 1, // Number of items to show at 0px and up screen width
            },
            600: {
              items: 2, // Number of items to show at 600px and up screen width
            },
            1000: {
              items: 4, // Number of items to show at 1000px and up screen width
            }
          }} className="owl-theme" loop margin={10} nav>
            {

              productArray.map((product, key) => {
                console.debug(productArray);
                return (
                  <div key={key} class="item text-center flex flex-col">
                    <img src={product.img} className=' h-[25rem] min-w-[60px]' />
                    <label className=' text-black font-semibold'>{product.name}</label>
                    <div className='  text-slate-400 font-semibold'>
                      <label className=' line-through'>Rs.{product.unit_price}.00</label> &nbsp;&nbsp;&nbsp;&nbsp;
                      <label className=' text-lime-500'>Rs.{product.unit_price -200}.00  </label>&nbsp;
                      <label className=' text-lime-500'>/ Unit</label>
                    </div>
                    <div>

                      <div className=' flex flex-row items-center justify-center'>
                        <CartFill className=' mb-2 mr-2' />
                        <label>Add to Cart</label>
                      </div>

                    </div>
                  </div>
                )
              })
            }

            {/* <div class="item text-center flex flex-col">
              <img src={Item1} className=' h-[25rem] min-w-[60px]' />
              <label className=' text-black font-semibold'>Orange Crush 1.5L</label>
              <div className='  text-slate-400 font-semibold'>
                <label className=' line-through'>Rs.425.00</label> &nbsp;&nbsp;&nbsp;&nbsp;
                <label className=' text-lime-500'>Rs.318.00  </label>&nbsp;
                <label className=' text-lime-500'>/ Unit</label>
              </div>
              <div>

                <div className=' flex flex-row items-center justify-center'>
                  <CartFill className=' mb-2 mr-2' />
                  <label>Add to Cart</label>
                </div>

              </div>
            </div>
            <div class="item text-center flex flex-col">
              <img src={Item2} className=' h-[25rem] min-w-[60px]' />
              <label className=' text-black font-semibold'>Chicken Drumsticks Skinless</label>
              <div className='  text-slate-400 font-semibold'>
                <label className=' text-lime-500'>Rs 1,980.00 </label>&nbsp;
                <label className=' text-lime-500'>/ kg</label>
              </div>
              <div>

                <div className=' flex flex-row items-center justify-center'>
                  <CartFill className=' mb-2 mr-2' />
                  <label>Add to Cart</label>
                </div>

              </div>
            </div>
            <div class="item text-center flex flex-col">
              <img src={Item3} className='h-[25rem] w-[60px]' />
              <label className=' text-black font-semibold'>Baraka Virgin Coconut Oil 750ml</label>
              <div className='  text-slate-400 font-semibold'>
                <label className=' line-through'>Rs 1,750.00</label> &nbsp;&nbsp;&nbsp;&nbsp;
                <label className=' text-lime-500'>Rs 1,312.00 / Unit </label>&nbsp;
                <label className=' text-lime-500'>/ Unit</label>
              </div>
              <div>

                <div className=' flex flex-row items-center justify-center'>
                  <CartFill className=' mb-2 mr-2' />
                  <label>Add to Cart</label>
                </div>

              </div>
            </div> */}


          </OwlCarousel>
        </div>
      </div>
    );

  else window.location.href = "http://localhost:3000/login";
}

export default Home;
