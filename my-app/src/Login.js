import './App.css';
import { Border, } from 'react-bootstrap-icons';
import Logo from './imgs/logo.png';
import { Typeahead } from 'react-bootstrap-typeahead';

function Login() {
    return (
        <div className=''>
            <div className=' grid grid-flow-row grid-cols-12 w-screen h-screen  md:pt-20 md:pl-20 md:pr-20 md:pb-20 pb-5 '>
                <div style={{ backgroundColor: "#4F4F4F"}} className=' col-span-12 md:col-span-4 md:rounded-bl-[50px]  border-0  shadow-2xl    '>

                    <img className=' ms-4 mt-6 md:ms-8 h-10 w-30' src={Logo} alt='' />
                    <div className=' ms-4 md:ms-8 mt-4 flex flex-col  text-[14px] text-white'>
                        <label className='   font-bold'>Log In</label>
                        <label>Shopped with us before? Log in with your details </label>
                        <div className=' items-center'>
                            <label className=' font-normal '>New Member?</label>
                            <button className=' px-3 py-2 ml-1 md:ml-4 ' style={{ backgroundColor: "#51AC37", borderTopRightRadius: '20px', borderBottomLeftRadius: '20px', }}>Click here to register</button>
                        </div>
                        <p className=' hover:underline text-[12px] mt-10'>Have trouble logging in? Call us on 0112303500 (Daily operating hours 8.00a.m to 8.00p.m)</p>
                    </div>
                </div>
                <div style={{ borderRight: "1px solid black", borderTop: "1px solid black", borderBottom: "1px solid black" }} 
                className=' col-span-12 md:col-span-8 md:rounded-tr-[50px]  bg-white border-0 md:border-1 shadow-xl'>
                    <form className=' mt-3'>
                        <div className=' grid grid-cols-12 grid-flow-row '>
                            <div className="form-group mx-3 col-span-12 md:col-span-6 ">
                                <label for="exampleInputPassword1">Email</label>
                                <div style={{ borderTopRightRadius: "10px", borderBottomLeftRadius: "10px" }}
                                    className=' col-span-12 md:col-span-6  border border-slate-900 text-black  flex flex-row items-center py-2 '>
                                    <input type='text' style={{ border: "none", backgroundColor: "", outline: "none" }} className='ps-2 bg-white w-full' placeholder='Email' />
                                </div>
                            </div>

                            <div className="form-group mx-3 col-span-12 md:col-span-6  ">
                                <label for="exampleInputPassword1">Password</label>
                                <div style={{ borderTopRightRadius: "10px", borderBottomLeftRadius: "10px" }}
                                    className=' col-span-12 md:col-span-6  border border-slate-900 text-black  flex flex-row items-center py-2 '>
                                    <input type='password' style={{ border: "none", backgroundColor: "", outline: "none" }} className='ps-2 bg-white w-full' placeholder='Password' />
                                </div>
                            </div>

                        </div>

                        <div className="form-check ms-3">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                            <label class="form-check-label" for="exampleCheck1">Remember Me?</label>
                        </div>
                        <div className=' mr-3 flex flex-row justify-end'>
                            <button className='  px-10 py-2 text-white font-bold ' type="submit" style={{ backgroundColor: "#51AC37", borderTopRightRadius: '15px', borderBottomLeftRadius: '15px', }} >Log In</button>

                        </div>

                    </form>
                    <hr />
                    <div className='text-sm flex flex-col ms-3'>
                        <label className=' font-bold text-[12.5px] '>Or log in with your mobile number</label>
                        <label className=' mb-2 text-[14px]'>Enter your Nexus mobile or Mobile number</label>
                        <div className='  flex flex-row items-center'>
                            <div style={{ borderTopRightRadius: "10px", borderBottomLeftRadius: "10px" }}
                                className='w-[60%] h-12 bg-white border border-slate-900 text-black flex flex-row items-center   '>
                                {/* Auto Complete */}
                                <Typeahead
                                    style={{ border: "none" }}
                                    className=' h-full w-[30%] mt-2 border-white'
                                    labelKey={option => `${option.countryName} `}
                                    options={[
                                        { countryName: 'Sri Lanka' },
                                        { countryName: 'India' },
                                        { countryName: 'Australia' },
                                        { countryName: 'New Zealand' },
                                        { countryName: 'South Africa' },
                                    ]}
                                />
                                {/* Auto Complete */}

                                <input type='text' style={{ border: "none", backgroundColor: "", outline: "none" }}
                                    className=' h-full ps-2 bg-white' placeholder='07XXXXXXXX' />
                            </div>
                            <div className=' mr-3 flex flex-row justify-end'>
                                <button className='  px-10 py-2 text-white font-bold ' type="submit" style={{ backgroundColor: "#5C5C5C", borderTopRightRadius: '15px', borderBottomLeftRadius: '15px', }} >Verify Number</button>
                            </div>
                        </div>
                        <label className=' font-bold mt-1 text-[14px]'>OTP Number</label>
                        <div className='  flex flex-row items-center'>
                            <div style={{ borderTopRightRadius: "10px", borderBottomLeftRadius: "10px" }}
                                className='w-[60%] h-12 bg-white border border-slate-900 text-black flex flex-row items-center   '>
                             

                                <input type='text' style={{ border: "none", backgroundColor: "", outline: "none" }}
                                    className=' h-full ps-2 bg-white' placeholder='OTP Number' />
                            </div>
                            <div className=' mr-3 flex flex-row justify-end'>
                                <button className='  px-10 py-2 text-white font-bold ' type="submit" style={{ backgroundColor: "#5C5C5C", borderTopRightRadius: '15px', borderBottomLeftRadius: '15px', }} >Submit</button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
}


export default Login;