import Image1 from './imgs/items/1.jpg';
import { CartFill, Cash, Facebook, Link, Link45deg, Twitter, Youtube } from 'react-bootstrap-icons';

const Page = () => {
    return (
        <>
            <div className=' p-5 flex md:flex-row flex-col'>
                <div className=" z-0  ">
                    <div className=' ps-4 rounded-tl-[0.45rem] rounded-br-[0.45rem] border-[2.5px] border-lime-500 h-40 w-52 '>
                        <img className=' h-32 w-36' src={Image1} alt='' />
                    </div>
                </div>
                <div className=' invisible mx-4'>
                    aa
                </div>
                <div className="rounded-tl-[0.45rem] rounded-br-[0.45rem] border-[3px] border-lime-500 z-10 w-80 ">
                    <img src={Image1} alt='' />
                </div>
                <div className=' invisible mx-4'>
                    aa
                </div>
                <div className=" z-10  ">
                    <div className=' flex flex-col'>
                        <h1 className=' font-semibold'>Eh Orange Crush 1.5L</h1>
                        <label className=' text-sm'>Keells #1961</label>
                        <div className=' flex flex-row items-center'>
                            <label>Rs.350.00</label>
                            <h3 className=' font-semibold ms-2 text-lime-500'>Rs 262.01 / Unit</h3>
                        </div>
                        <div className=' invisible h-4 md:h-8'>

                        </div>
                        <div style={{ borderTopLeftRadius: "1.5rem", borderBottomRightRadius: "1.5rem" }}
                            className=' w-[20rem] pr-10 hover:font-bold hover:text-white hover:bg-lime-400 flex flex-row items-center justify-center'>
                            <Cash className=' hover:text-white' />
                            <button className=' px-3 py-2 ml-1 md:ml-4 pl-10'>Pay Now</button>
                        </div>
                        <div style={{ borderTopLeftRadius: "1.5rem", borderBottomRightRadius: "1.5rem" }}
                            className=' w-[20rem] pr-10 hover:font-bold hover:text-white hover:bg-lime-400 flex flex-row items-center justify-center'>
                            <CartFill className=' hover:text-white' />
                            <button className=' px-3 py-2 ml-1 md:ml-4 pl-10'>Add to Cart</button>
                        </div>
                        <div className=' mt-3 flex  md:flex-row'>
                            <label className=' text-black font-normal text-lg me-3'>Tags</label>
                            <div className=' text-lime-400 font-bold  items-center'>
                                <label className='hover:text-black text-sm mx-2'>Beverages</label>
                                <label className=' hover:text-black  text-sm mx-2'>Juices & Carbonates </label>
                                <label className=' hover:text-black  text-sm mx-2'>Multiple Consumption RTD Beverages</label>
                            </div>
                        </div>
                        <div className=' mt-3 flex  md:flex-row'>
                            <label className=' text-black font-normal text-md me-3'>Share</label>
                            <div className=' mb-2 flex  md:flex-row  font-bold  items-center'>
                                <Facebook className='hover:text-black text-sm mx-2'/>
                                <Twitter  className='hover:text-black text-sm mx-2'/>
                                <Youtube  className='hover:text-black text-sm mx-2'/>
                                <Link45deg  className='hover:text-black text-sm mx-2'/>
                                {/* <label >Beverages</label>
                                <label className=' hover:text-black  text-sm mx-2'>Juices & Carbonates </label>
                                <label className=' hover:text-black  text-sm mx-2'>Multiple Consumption RTD Beverages</label> */}
                            </div>
                        </div>
                        <div>


                        </div>

                    </div>

                </div>
            </div>

        </>
    );
}

export default Page;
