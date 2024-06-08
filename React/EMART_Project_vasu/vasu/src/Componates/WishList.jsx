import React from 'react'
import asset40 from '../assets/asset 40.svg'
import asset41 from '../assets/asset 41.svg'
import asset42 from '../assets/asset 42.svg'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Footer from './Footer'
import { useDispatch } from 'react-redux';
import { increment } from '../Product_data/Redux/Action'
import { decrement } from '../Product_data/Redux/Action'
import { addTocart, removeToWishlist } from '../Product_data/Redux/Action'




const WishList = () => {

    const add_Cart = (item) => {
        dispatch(addTocart(item));
        dispatch(removeToWishlist(item.id));
    }


    const dispatch = useDispatch();

    const wishlistData = useSelector((state) => state.reducer);
    const totalValue = () => {
        return wishlistData.reduce((total, item) => total + item.d_price * item.quantity, 0);
    };

    function GST() {
        const gst = totalValue() * 5 / 100;
        return GST = totalValue() + gst;
    }

    return (


        <>

            <div className=''>

                <div className='bg-black p-1 xl:flex justify-between hidden'>
                    <div className=''>
                        <p className='text-white'>Free delivery on orders over $1499. Don’t miss discount.</p>
                    </div>
                    <div className='flex'>
                        <div className='flex'>
                            <div className=''>
                                <img className='invert mt-1' src={asset40} alt="" />
                            </div>
                            <div className='ms-2'>
                                <p className='text-white'>Help & contact</p>
                            </div>
                            <div className="h-5 mt-1 ms-2 w-0 border border-gray-400 hidden lg:block"></div>
                        </div>

                        <div className='flex ms-4'>
                            <div className=''>
                                <img className='invert mt-1' src={asset41} alt="" />
                            </div>
                            <div className='ms-2'>
                                <p className='text-white'>Help & contact</p>
                            </div>
                            <div className="h-5 mt-1 ms-2 w-0 border border-gray-400 hidden lg:block"></div>
                        </div>

                        <div className='flex ms-4'>
                            <div className=''>
                                <img className='invert mt-1' src={asset42} alt="" />
                            </div>
                            <div className='ms-2'>
                                <p className='text-white'>Help & contact</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className=' xl:p-5'>
                <div className=' p-6 xl:w-full lg:w-full md:w-full sm:w-full shadow-md shadow-gray-500 mt-5'>
                    <p className=''>Your Wishlist is currently empty.</p>
                </div>
                <div className='bg-black  text-white xl:h-12 lg:h-12 md:h-12 sm:h-12 xl:max-w-[250px] lg:max-w-[250px] md:max-w-[240px] sm:max-w-[230px] mt-5 p-2 px-5 py-2  duration-500 ease-in-out hover:-translate-y-3'>
                    <NavLink className to='/shop_Now'>
                        <p className='mt-1 ms-3 '>Return To Shop</p>
                    </NavLink>
                </div>

                <div className="mt-4  flex justify-between">
                    <table className=" w-[900px]">
                        <thead className=' '>

                            <tr className="flex  justify-between pb-[20px] pt-[30px] ">
                                <th className="  font-normal ">Products</th>
                                <th className=" font-normal">Price</th>
                                <th className=" font-normal ">Quantity</th>
                                <th className=" font-normal">Total</th>
                            </tr>
                        </thead>
                        <hr />
                        {wishlistData.map((item) => {
                            return (
                                <tbody key={item.id} className=' bg-white'>
                                    <tr className="flex justify-between pt-[30px] items-center py-[30px] ">
                                        <td className="flex  items-center">
                                            <img
                                                className="max-w-[102px] w-[102px] h-[102px]  object-cover "
                                                src={item.img}
                                                alt=""
                                            />
                                            <td className=" text-white">{item.name}</td>

                                        </td>
                                        <td className=" ">{item.d_price}</td>
                                        <tr className="  items-center  w-12">
                                            <button onClick={() => dispatch(increment(item.id))} className=" border-2 border-solid border-white px-3  bg-black text-white">+</button>
                                            <td className=' flex justify-center'>{item.quantity}</td>
                                            <button onClick={() => dispatch(decrement(item.id))} className="w-[47px] border-2 border-solid border-white px-3 text-white bg-black ">-</button>
                                        </tr>
                                        <td className="">${item.d_price * item.quantity}</td>

                                    </tr>
                                    <button onClick={() => add_Cart(item)} className='btn btn-denger btn-sm border-2 border-solid border-black hover:bg-black hover:text-white'>
                                        Add_To_Cart
                                    </button>
                                    <hr />
                                </tbody>
                            );
                        })}
                    </table>

                    <div className="">


                        <div className="p-[25px]  mt-3  w-[500px]  font-extrabold">
                            <h4 className="my-[8px] ">Cart Totals</h4>
                            <hr className=' font-extrabold' />
                            <div className="flex justify-between mt-[30px] mb-[20px]">
                                <span className=' font-extrabold'>Subtotal</span>
                                <span className=' font-extrabold'>{totalValue()}</span>
                            </div>
                            <hr className=' font-extrabold' />
                            <div className="leading-10 my-[15px]">
                                <div className='flex justify-between '>
                                    {/* <h1 className='text-white font-extrabold'>Shipping</h1>
                                <span className='text-white'>-20</span> */}
                                </div>

                                <div className="flex justify-between">
                                    <span className=' font-extrabold'>GST:</span>
                                    <span className=''>%5</span>
                                </div>

                                <div className="flex justify-between">
                                    <span className=' font-extrabold'>Grand Total:</span>
                                    <span className=''>{GST()}</span>
                                </div>
                                <div className=' font-extrabold'>
                                    Shipping to <sapn className="font-bold">CA</sapn>
                                </div>
                                <h4 className=' font-extrabold'>Change address </h4>
                            </div>
                            <hr className=' font-extrabold' />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default WishList
