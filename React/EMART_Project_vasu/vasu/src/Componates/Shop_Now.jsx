import React, { useEffect } from 'react'
import asset56 from '../assets/asset 56.svg'
import asset57 from '../assets/asset 57.svg'
import asset58 from '../assets/asset 58.svg'
import asset59 from '../assets/asset 59.svg'
import asset60 from '../assets/asset 60.svg'
import assset52 from '../assets/asset 52.svg'
import assset53 from '../assets/asset 53.svg'
import assset54 from '../assets/asset 54.svg'
import assset55 from '../assets/asset 55.svg'
import asset51 from '../assets/asset 51.svg'
import assset27 from '../assets/asset 27.svg'
import assset28 from '../assets/asset 28.svg'
import assset29 from '../assets/asset 29.svg'
import { addTocart, addToWishlist } from '../Product_data/Redux/Action'
import { productData } from '../Product_data/ProductRedux/ProductAction'
import { useDispatch, useSelector } from 'react-redux'

const Shop_Now = () => {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.ProductReducer)
  console.log('maindata', data);

  useEffect(() => {
    dispatch(productData())
  }, [])


  return (
    <>
      <div className='container p-5'>
        <p>Home / Shop</p>
        <p className='text-gray-500 mt-4 text-lg'>Showing all 11 results</p>




        <div className='grid xl:grid-cols-5  lg:grid-cols-5  md:grid-cols-3 max-sm:grid-cols-2 grid-cols-1 mt-3 gap-3'>
          {data.flat().map((item) => {
            return (
              <div className='xl:relative lg:relative md:relative 2xl:relative primary-img'>
                <div className='overflow-hidden inline-block'>
                  <img className='hover:scale-110 duration-500 ease-in-out' src={item.img} alt="" />
                </div>
                <div className='absolute left-0 top-0 z-10 shop-icon max-sm:hidden'>
                  <div className='p-3'>
                    <div className='p-[12px]  flex justify-center  rounded-full m-2  bg-white icon-1'>
                      <button className='' onClick={() => dispatch(addToWishlist(item))}>
                        <img className='icon-1' src={assset27} alt="" height={16} width={16} />
                      </button>
                    </div>
                    <div className='p-[12px] bg-white rounded-full m-2 flex justify-center icon-1'>

                      <img src={assset28} alt="" height={16} width={16} />

                    </div>
                    <div className='p-[12px] flex justify-center bg-white m-2  rounded-full icon-1'>
                      <button className='' onClick={() => dispatch(addTocart(item))}>
                        <img src={assset29} alt="" height={8} width={12} />
                      </button>

                    </div>
                  </div>
                </div>

                <p className='text-center mt-2 font-bold text-xl'>{item.name}</p>
                <div className='flex justify-center mt-2'>
                  <del className='text-gray-500'>{item.d_price}</del>
                  <p className='text-gray-500'>{item.price}</p>
                </div>
                <div>
                  <p className='xl:absolute lg:absolute 2xl:absolute md:absolute max-sm:hidden xl:top-2 xl:left-40 2xl:top-2 2xl:left-52 lg:top-2 lg:left-32 md:top-2 md:left-44  bg-black text-white  xl:p-1 '>-33%</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* <footer>
        <div>
          <div className='mt-24 xl:flex xl:justify-center lg:flex lg:justify-center md:flex md:justify-center max-sm:flex max-md:justify-center'>
            <img src={asset51} alt="" />
          </div>

          <p className='xl:text-center lg:text-center md:text-center max-sm:text-center mt-3 text-3xl font-semibold text-wrap'>Subscribe newsletter</p>
          <p className='xl:text-center lg:text-center md:text-center max-sm:text-center mt-3 text-md text-slate-500'>Subscribe Now and get more offers</p>

          <div className='xl:flex xl:justify-center lg:flex lg:justify-center md:flex-wrap md:text-center max-sm:flex max-sm:flex-wrap max-sm:justify-center mt-5'>
            <input className='border-2 border-solid border-inherit p-2 bg-slate-200 xl:w-[400px]  lg:w-[400px] md:w-[400px]   max-sm:w-[350px] ' placeholder='Your Email Address...' type="text" name="" id="" />
            <button className='bg-black text-white xl:p-3 md:p-2 lg:p-3 max-sm:p-2 xl:w-[220px] lg:w-[220px] lg:ms-3 md:ms-3 xl:ms-3  max-sm:ms-1 max-sm:mt-3 max-sm:w-[350px] '> Subscribe Now</button>
          </div>

          <div className='mt-28'>
            <hr />
          </div>


          <div className='xl:flex lg:flex lg:justify-betwee md:flex md:justify-between xl:justify-between max max-sm:justify-center '>
            <div className='xl:flex md:flex md:gap-1 lg:flex lg:gap-3 xl:gap-3 max-sm:flex max-sm:justify-center max-sm:gap-2 max-sm:mt-3 xl:mt-7 lg:mt-7
            md:mt-7 xl:ms-3'>
              <img src={assset52} alt="" />
              <img src={assset53} alt="" />
              <img src={assset54} alt="" />
              <img src={assset55} alt="" />
            </div>
            <div className='pt-11 max-sm:flex max-sm:justify-center'>
              <p className='inline-block text-slate-500'>Designed by : </p>
              <p className='inline-block font-bold text-slate-500'>Wpignite</p>
            </div>
            <div className='xl:flex lg:flex md:flex md:gap-2 xl:gap-3 lg:gap-2  max-sm:flex  max-sm:justify-center   max-sm:mt-3 xl:mt-7 lg:mt-7 md:mt-7 max-sm:gap-3'>
              <img src={asset56} alt="" />
              <img src={asset57} alt="" />
              <img src={asset58} alt="" />
              <img src={asset59} alt="" />
              <img src={asset60} alt="" />
            </div>
          </div>
        </div>
      </footer> */}
    </>
  )
}

export default Shop_Now
