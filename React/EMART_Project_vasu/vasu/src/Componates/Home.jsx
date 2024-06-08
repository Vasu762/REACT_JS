import React from 'react'
import image9 from "../assets/asset 9.webp";
import image10 from "../assets/asset 10.webp";
import image24 from "../assets/asset 24.webp"
import image25 from "../assets/asset 25.webp"
import image26 from "../assets/asset 26.webp"
import image11 from "../assets/asset 11.webp"
import image12 from "../assets/asset 12.webp"
import image13 from "../assets/asset 13.webp"
import image14 from "../assets/asset 14.webp"
import image15 from "../assets/asset 15.webp"
import image16 from "../assets/asset 16.webp"
import image17 from "../assets/asset 17.svg"
import image30 from "../assets/asset 30.webp"
import image21 from "../assets/asset 21.webp"
import image8 from "../assets/asset 8.svg"
import asset17 from "../assets/asset 17.svg"
import asset18 from "../assets/asset 18.svg"
import asset19 from "../assets/asset 19.svg"
import asset20 from "../assets/asset 20.svg"
import asset51 from '../assets/asset 51.svg'
import assset52 from '../assets/asset 52.svg'
import assset53 from '../assets/asset 53.svg'
import assset54 from '../assets/asset 54.svg'
import assset55 from '../assets/asset 55.svg'
import asset56 from '../assets/asset 56.svg'
import asset57 from '../assets/asset 57.svg'
import asset58 from '../assets/asset 58.svg'
import asset59 from '../assets/asset 59.svg'
import asset60 from '../assets/asset 60.svg'
import assset27 from '../assets/asset 27.svg'
import assset28 from '../assets/asset 28.svg'
import assset29 from '../assets/asset 29.svg'
import asset40 from '../assets/asset 40.svg'
import asset41 from '../assets/asset 41.svg'
import asset42 from '../assets/asset 42.svg'
import asset24 from '../assets/asset 24.webp'
import asset25 from '../assets/asset 25.webp'
import asset26 from '../assets/asset 26.webp'
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { productData } from "../Product_data/ProductRedux/ProductAction";


const Home = () => {
  return (
    <div className='vasu'>

      <div className='bg-slate-600 p-1 xl:flex justify-between hidden mt-0'>
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



      <div className='flex xl:gap-8 lg:gap-4 md:gap-3 max-sm:flex-wrap text-center mt-5'>
        <div className='xl:ms-4 xl:mt-48 xl:w-[500px] lg:w-[500px] sm:w-full flex justify-center flex-col items-center vasu'>
          <p className='text-6xl font-semibold text-wrap md:mt-9 lg:mt-10 max-sm:text-center max-sm:text-5xl'>Plant a tree for better world</p>
          <p className='lg:mt-6 md:mt-4 max-sm:text-center max-sm:mt-3'>Rectangle follower distribute device layer. Library hand ellipse device strikethrough.</p>
          <button className='block mt-6 border-2 border-solid border-black p-2 duration-500 hover:-translate-y-2 hover:bg-black max-sm:mt-6 hover:text-white xl:w-44'><NavLink to='/shop_Now'>ShopNow</NavLink></button>
        </div>


        <div className='mt-16 xl:w-[700px]  2xl:max-h-[750px] 2xl:w-[500px]  xl:max-h-[700px]  lg:max-h-[400px] lg:w-[400px] md:max-h-[350px] md:w-[550px] lg:mt-24 md:mt-24'>
          <img className='object-fill xl:w-full xl:max-h-full 2xl:w-full 2xl:max-h-full lg:w-full lg:h-full md:w-full md:max-h-full hover:-translate-x-3 duration-300 max-sm:hidden' src="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/plants-banner-first.webp" alt="" />
        </div>

        <div className=' xl:w-[700px]   xl:max-h-[700px] 2xl:max-h-[750px] 2xl:w-[500px] lg:max-h-[400px] lg:w-[400px]  md:max-h-[350px] md:w-[500px]'>
          <img className='object-fill xl:w-full xl:h-full  2xl:w-full 2xl:max-h-full lg:w-full lg:max-h-full md:w-full md:max-h-full max-sm:w-full hover:-translate-x-3 duration-300' src="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/plants-banner-2nd.webp" alt="" />
        </div>
      </div>


      {/* Shop by categories */}

      <p className='xl:text-end lg:text-start sm:text-center font-semibold text-4xl  2xl:mt-28'>Shop by categories</p>
      <div className='grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2  sm:grid-cols-1 xl:mt-4 gap-4'>

        <div className='relative image'>
          <div className=''>
            <img className='' src={asset24} alt="" />
          </div>
          <div className='ovelay w-full  p-3  absolute bottom-0'>
            <div className='flex justify-between'>
              <p className=''>Aloe Vera</p>
              <svg className='hover:translate-x-2 duration-500' xmlns="http://www.w3.org/2000/svg" width="38" height="37" viewBox="0 0 38 37" fill="none"><path d="M19.0715 36.7273C9.0302 36.7273 0.890099 28.5872 0.890099 18.5459C0.890099 8.5046 9.0302 0.364502 19.0715 0.364502C29.1128 0.364502 37.2529 8.5046 37.2529 18.5459C37.2529 28.5872 29.1128 36.7273 19.0715 36.7273Z" fill="#C7B9B6"></path><path d="M19.0717 13.3512L24.2664 18.5459L19.0717 23.7406" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M13.877 18.5459H24.2664" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            </div>
          </div>
        </div>


        <div className='relative image'>
          <div className=''>
            <img className='' src={asset25} alt="" />
          </div>
          <div className='ovelay w-full  p-3  absolute bottom-0'>
            <div className='flex justify-between'>
              <p className=''>Aloe Vera</p>
              <svg className='hover:translate-x-2 duration-500' xmlns="http://www.w3.org/2000/svg" width="38" height="37" viewBox="0 0 38 37" fill="none"><path d="M19.0715 36.7273C9.0302 36.7273 0.890099 28.5872 0.890099 18.5459C0.890099 8.5046 9.0302 0.364502 19.0715 0.364502C29.1128 0.364502 37.2529 8.5046 37.2529 18.5459C37.2529 28.5872 29.1128 36.7273 19.0715 36.7273Z" fill="#C7B9B6"></path><path d="M19.0717 13.3512L24.2664 18.5459L19.0717 23.7406" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M13.877 18.5459H24.2664" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            </div>
          </div>
        </div>



        <div className='relative image'>
          <div className=''>
            <img className='' src={asset26} alt="" />
          </div>
          <div className='ovelay w-full  p-3  absolute bottom-0'>
            <div className='flex justify-between'>
              <p className=''>Aloe Vera</p>
              <svg className='hover:translate-x-2 duration-500' xmlns="http://www.w3.org/2000/svg" width="38" height="37" viewBox="0 0 38 37" fill="none"><path d="M19.0715 36.7273C9.0302 36.7273 0.890099 28.5872 0.890099 18.5459C0.890099 8.5046 9.0302 0.364502 19.0715 0.364502C29.1128 0.364502 37.2529 8.5046 37.2529 18.5459C37.2529 28.5872 29.1128 36.7273 19.0715 36.7273Z" fill="#C7B9B6"></path><path d="M19.0717 13.3512L24.2664 18.5459L19.0717 23.7406" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M13.877 18.5459H24.2664" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            </div>
          </div>
        </div>


        <div className='relative image'>
          <div className=''>
            <img className='' src={asset24} alt="" />
          </div>
          <div className='ovelay w-full  p-3  absolute bottom-0'>
            <div className='flex justify-between'>
              <p className=''>Aloe Vera</p>
              <svg className='hover:translate-x-2 duration-500' xmlns="http://www.w3.org/2000/svg" width="38" height="37" viewBox="0 0 38 37" fill="none"><path d="M19.0715 36.7273C9.0302 36.7273 0.890099 28.5872 0.890099 18.5459C0.890099 8.5046 9.0302 0.364502 19.0715 0.364502C29.1128 0.364502 37.2529 8.5046 37.2529 18.5459C37.2529 28.5872 29.1128 36.7273 19.0715 36.7273Z" fill="#C7B9B6"></path><path d="M19.0717 13.3512L24.2664 18.5459L19.0717 23.7406" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M13.877 18.5459H24.2664" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            </div>
          </div>
        </div>





      </div>

      {/* Best interior plants */}
      <p className='text-4xl text-center font-semibold xl:mt-14 max-sm:mt-12 max-sm:text-3xl lg:mt-7' >Best interior plants</p>
      <p className='text-center xl:mt-7 lg:mt-7 max-sm:mt-5 text-xl text-gray-500 text-wrap '>Rectangle follower library hand ellipse device strikethrough.</p>

      <div className='xl:mt-10 p-4 md:flex md:justify-between '>
        <div className=''>
          <img className='vasu xl:w-[570px] lg:w-[400px]  md:w-[300px] max-sm:w-full hover:-translate-x-3 duration-150' src="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/plant-gallery-left-img.webp" alt="" />
        </div>

        <div className='max-sm:grid max-sm:grid-cols-2 max-sm:gap-3 max-sm:mt-3 '>
          <div className='md:flex lg:gap-3 md:gap-2'>
            <div className='relative primary-img'>
              <div className='overflow-hidden'>
                <img className='hover:scale-110 duration-[1s] ease-in-out xl:w-[250px] lg:w-[160px] md:w-[120px]' src="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/Monstera.webp" alt="" />
              </div>
              <div className='mt-3 text-center'>
                <p className='text-slate-800 text-xl'>Monstera plant</p>
              </div>
              <div className='flex justify-center'>
                <del className='text-gray-500'>$60</del>
                <p className='ms-2 text-gray-500'> $48</p>
              </div>
              <div className='absolute left-0 top-0 z-10 shop-icon'>
                <div className='p-3'>
                  <div className='p-[12px]  rounded-full m-2  bg-white icon-1 '>
                    <a href="" className=' '>
                      <img className='icon-1' src={assset27} alt="" height={16} width={16} />
                    </a>
                  </div>
                  <div className='p-[12px] bg-white rounded-full m-2  flex justify-center icon-1'>
                    <a href="">
                      <img src={assset28} alt="" height={16} width={16} />
                    </a>
                  </div>
                  <div className='p-[12px] flex justify-center bg-white m-2  rounded-full icon-1'>
                    {/* <button onClick={() => dispatch(addToCart(item))}> */}
                    <a href="">
                      <img className=''  src={assset29} alt="" height={8} width={12} />
                    </a>
                    {/* </button> */}
                  </div>
                </div>
              </div>
              <div className='absolute xl:top-3 xl:left-44  lg:top-3 lg:left-16 md:top-3 md:left-10 max-sm:hidden'>
                <p className='ps-2 pe-2 border-2 border-solid border-black bg-black text-white'>-20%</p>
              </div>
            </div>


            <div className='relative primary-img'>
              <div className='overflow-hidden'>
                <img className='hover:scale-110 duration-[1s] ease-in-out xl:w-[250px] lg:w-[160px] md:w-[120px]' src="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/Haworthia.webp" alt="" />
              </div>
              <div className='mt-3 text-center'>
                <p className='text-slate-800 text-xl'>Haworthia</p>
              </div>
              <div className='flex justify-center'>
                <del className='text-gray-500'>$87</del>
                <p className='ms-2 text-gray-500'>$70</p>
              </div>
              <div className='absolute left-0 top-0 z-10 shop-icon'>
                <div className='p-3'>
                  <div className='p-[12px]  rounded-full m-2  bg-white icon-1 '>
                    <a href="" className=''>
                      <img className='icon-1' src={assset27} alt="" height={16} width={16} />
                    </a>
                  </div>
                  <div className='p-[12px] bg-white rounded-full m-2  flex justify-center icon-1'>
                    <a href="">
                      <img src={assset28} alt="" height={16} width={16} />
                    </a>
                  </div>
                  <div className='p-[12px] flex justify-center bg-white m-2  rounded-full icon-1'>
                    <a href="">
                      <img className='' onClick={() => dispatch(addToCart(item))} src={assset29} alt="" height={8} width={12} />
                    </a>
                  </div>
                </div>
              </div>
              <div className='absolute xl:top-3 xl:left-44  lg:top-3 lg:left-16 md:top-3 md:left-10 max-sm:hidden'>
                <p className='ps-2 pe-2 border-2 border-solid border-black bg-black text-white'>-20%</p>
              </div>
            </div>

            <div className='relative primary-img'>
              <div className='overflow-hidden'>
                <img className='hover:scale-110 duration-[1s] ease-in-out xl:w-[250px] lg:w-[160px] md:w-[120px]' src="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/Birds-nest-fern-01.webp" alt="" />
              </div>
              <div className='mt-3 text-center'>
                <p className='text-slate-800 text-xl'>Bird's nest fern</p>
              </div>
              <div className='flex justify-center'>
                <del className='text-gray-500'>$68</del>
                <p className='ms-2 text-gray-500'>  $54</p>
              </div>
              <div className='absolute left-0 top-0 z-10 shop-icon'>
                <div className='p-3'>
                  <div className='p-[12px]  rounded-full m-2  bg-white icon-1'>
                    <a href="" className=' '>
                      <img className='icon-1' src={assset27} alt="" height={16} width={16} />
                    </a>
                  </div>
                  <div className='p-[12px] bg-white rounded-full m-2  flex justify-center icon-1'>
                    <a href="">
                      <img src={assset28} alt="" height={16} width={16} />
                    </a>
                  </div>
                  <div className='p-[12px] flex justify-center bg-white m-2  rounded-full icon-1'>
                    <a href="">
                      <img className='' onClick={() => dispatch(addToCart(item))} src={assset29} alt="" height={8} width={12} />
                    </a>
                  </div>
                </div>
              </div>
              <div className='absolute xl:top-3 xl:left-44  lg:top-3 lg:left-16 md:top-3 md:left-10 max-sm:hidden'>
                <p className='ps-2 pe-2 border-2 border-solid border-black bg-black text-white'>-21%</p>
              </div>
            </div>
          </div>

          {/* -- */}
          <div className='md:flex xl:mt-10  lg:gap-3 lg:mt-28 md:mt-16 md:gap-2'>
            <div className='relative'>
              <div className='overflow-hidden'>
                <img className='hover:scale-110 duration-[1s] ease-in-out xl:w-[250px] lg:w-[160px] md:w-[120px]' src="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/peace-lily-02.webp" alt="" />
              </div>
              <div className='mt-3 text-center'>
                <p className='text-slate-800 text-xl'>Peace lily</p>
              </div>
              <div className='flex justify-center'>
                <del className='text-gray-500'>$72</del>
                <p className='ms-2 text-gray-500'> $64</p>
              </div>
              <div className='absolute xl:top-3 xl:left-44  lg:top-3 lg:left-16 md:top-3 md:left-10 max-sm:hidden'>
                <p className='ps-2 pe-2 border-2 border-solid border-black bg-black text-white'>-11%</p>
              </div>
            </div>

            <div className='relative'>
              <div className='overflow-hidden'>
                <img className='hover:scale-110 duration-[1s] ease-in-out xl:w-[250px] lg:w-[160px] md:w-[120px]' src="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/barrel-cactus-01.webp" alt="" />
              </div>
              <div className='mt-3 text-center'>
                <p className='text-slate-800 text-xl'>Barrel cactus</p>
              </div>
              <div className='flex justify-center'>
                <p className='ms-2 text-gray-500'>$67.00</p>
              </div>

            </div>

            <div className='relative'>
              <div className='overflow-hidden'>
                <img className='hover:scale-110 duration-[1s] ease-in-out xl:w-[250px] lg:w-[160px] md:w-[120px]' src="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/Snake-Plant.webp" alt="" />
              </div>
              <div className='mt-3 text-center'>
                <p className='text-slate-800 text-xl'>Snake plant</p>
              </div>
              <div className='flex justify-center'>
                <del className='text-gray-500'>$54</del>
                <p className='ms-2 text-gray-500'> $40</p>
              </div>
              <div className='absolute xl:top-3 xl:left-44  lg:top-3 lg:left-16 md:top-3 md:left-10 max-sm:hidden'>
                <p className='ps-2 pe-2 border-2 border-solid border-black bg-black text-white'>-26%</p>
              </div>
            </div>
          </div>
        </div>
      </div>




      <div className=' xl:p-5 lg:p-10 md:p-7  bg-gray-300 grid xl:grid-cols-4 lg:grid-cols-2  md:grid-cols-2 max-sm:grid-cols-1 mt-24'>
        <div className='md:flex xl:mt-4 max-sm:mt-8 xl:ms-5 vasu'>
          <div className='mt-3 max-sm:flex max-sm:justify-center'>
            <img className=' w-8 hover:-translate-x-3 duration-200 ' src={asset17} alt="" />
          </div>
          <div className='ms-4 max-sm:text-center'>
            <p className='font-bold text-xl'>Free shipping</p>
            <p className='xl:mt-3 lg:mt-2 md:mt-1 max-sm:mt-2'>On order over $1499</p>
          </div>
        </div>


        <div className='md:flex xl:mt-4 max-sm:mt-8 vasu' >
          <div className='mt-3  max-sm:flex max-sm:justify-center'>
            <img className='w-5 hover:-translate-x-3 duration-200' src={asset18} alt="" />
          </div>
          <div className='ms-4 max-sm:text-center'>
            <p className='font-bold text-xl'>Quick payment</p>
            <p className='xl:mt-3 lg:mt-2 md:mt-1 max-sm:mt-2'>Online quick payment</p>
          </div>
        </div>

        <div className='md:flex lg:mt-10 md:mt-10 xl:mt-4 max-sm:mt-8 vasu'>
          <div className='mt-3 max-sm:flex max-sm:justify-center'>
            <img className='w-8 hover:-translate-x-3 duration-200' src={asset19} alt="" />
          </div>
          <div className='ms-4 max-sm:text-center'>
            <p className='font-bold text-xl'>Easy return</p>
            <p className='xl:mt-3 lg:mt-2 md:mt-1 max-sm:mt-2'>Retrn within 24 hours</p>
          </div>
        </div>

        <div className='md:flex lg:mt-10 xl:mt-4 md:mt-10 max-sm:mt-8 max-sm:mb-8 vasu'>
          <div className='mt-3 max-sm:flex max-sm:justify-center'>
            <img className='w-8 hover:-translate-x-3 duration-200' src={asset20} alt="" />
          </div>
          <div className='ms-4 max-sm:text-center'>
            <p className='font-bold text-xl'>24/7 Support</p>
            <p className='xl:mt-3 lg:mt-2 md:mt-1 max-sm:mt-2'>Customer Support</p>
          </div>
        </div>
      </div>


      {/* image */}

      {/* <div className='bg-hero-pattern'>

      </div> */}

      <div className='relative  lg:h-[400px] lg:w-full  md:h-[500px] md:w-[768px] max-sm:h-[400px] max-sm:w-[425px]  overflow-hidden'>
        <div className="bg-cover bg-center   xl:h-[450px] xl:w-full lg:h-[400px] lg:w-full md:h-[350px] md:w-[968px]   max-sm:h-[350px] max-sm:w-[968px]" style={{ backgroundImage: "url('/src/assets/asset 30.webp')" }}>
          {/* Content goes here */}
        </div>
        <p className='absolute xl:top-24 xl:pe-44 text-wrap  text-white text-5xl xl:left-[900px] lg:top-24 lg:left-[500px] md:top-24 md:left-[350px]  max-sm:top-16 max-sm:text-center max-sm:text-4xl'>Find your perfect gardening tools on best price</p>
        <button className='border-2 border-solid ps-5 pe-5 p-3  hover:-translate-y-3 duration-300 hover:text-white hover:bg-black absolute xl:top-72 xl:left-[900px] lg:top-72 lg:left-[500px] md:top-72 md:left-[350px] max-sm:top-60 max-sm:left-32'><NavLink to='/shop_Now'>ShopNow</NavLink></button>
      </div>


 

      <p className='mt-10 text-4xl font-semibold p-3 vasu1'>New arrivals</p>

      <div className='grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 max-sm:grid-cols-2 gap-4 p-4'>
        <div className='relative'>
          <div className='relative primary-img'>
            <div className='overflow-hidden inline-block relative '>
              <img className='hover:scale-110  duration-500 ' src="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/Birds-Nest-Leslie-Fern.webp" alt="" />
            </div>
            {/* icon */}
            <div className='absolute left-0 top-0 z-10 shop-icon'>
              <div className='p-3'>
                <div className='p-[12px]  rounded-full m-2  bg-white icon'>
                  <a href="" className=''>
                    <img className='icon-1' src={assset27} alt="" height={16} width={16} />
                  </a>
                </div>
                <div className='p-[12px] bg-white rounded-full m-2 flex justify-center icon-1'>
                  <a href="">
                    <img src={assset28} alt="" height={16} width={16} />
                  </a>
                </div>
                <div className='p-[12px] flex justify-center bg-white m-2  rounded-full icon-1'>
                  <a href="">
                    <img src={assset29} alt="" height={8} width={12} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className='mt-2'>
            <p className='text-center text-2xl text-gray-800'>Bird’s nest leslie</p>
            <div className='flex justify-center'>
              <del className='text-gray-500'>$45</del>
              <p className='ms-2 text-gray-500'>$30</p>
            </div>
          </div>

          <div className='bg-black text-white absolute p-1 2xl:top-3 2xl:left-72  xl:top-3 xl:left-96 lg:top-3 lg:left-60 md:top-3 md:left-72 max-sm:top-3 max-sm:left-32'>
            -33%
          </div>
        </div>


        <div className='relative primary-img'>
          <div className='overflow-hidden inline-block'>
            <img className='hover:scale-110  duration-1000' src="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/Monstera.webp" alt="" />
          </div>
          <div className='absolute left-0 top-0 z-10 shop-icon'>
            <div className='p-3'>
              <div className='p-[12px]  rounded-full m-2  bg-white icon'>
                <a href="" className=''>
                  <img className='icon-1' src={assset27} alt="" height={16} width={16} />
                </a>
              </div>
              <div className='p-[12px] bg-white rounded-full m-2 flex justify-center icon-1'>
                <a href="">
                  <img src={assset28} alt="" height={16} width={16} />
                </a>
              </div>
              <div className='p-[12px] flex justify-center bg-white m-2  rounded-full icon-1'>
                <a href="">
                  <img src={assset29} alt="" height={8} width={12} />
                </a>
              </div>
            </div>
          </div>
          <div className='mt-2'>
            <p className='text-center text-2xl text-gray-800'>Monstera plant</p>
            <div className='flex justify-center'>
              <del className='text-gray-500'>$60</del>
              <p className='ms-2 text-gray-500'>$48</p>
            </div>
          </div>

          <div className='bg-black text-white absolute p-1 2xl:top-3 2xl:left-72  xl:top-3 xl:left-96 lg:top-3 lg:left-60 md:top-3 md:left-72 max-sm:top-3 max-sm:left-32'>
            -33%
          </div>

        </div>



        <div className='relative primary-img'>
          <div className='overflow-hidden inline-block'>
            <img className='hover:scale-110  duration-1000' src="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/Haworthia.webp" alt="" />
          </div>
          <div className='absolute left-0 top-0 z-10 shop-icon'>
            <div className='p-3'>
              <div className='p-[12px]  rounded-full m-2  bg-white icon'>
                <a href="" className=''>
                  <img className='icon-1' src={assset27} alt="" height={16} width={16} />
                </a>
              </div>
              <div className='p-[12px] bg-white rounded-full m-2 flex justify-center icon-1'>
                <a href="">
                  <img src={assset28} alt="" height={16} width={16} />
                </a>
              </div>
              <div className='p-[12px] flex justify-center bg-white m-2  rounded-full icon-1'>
                <a href="">
                  <img src={assset29} alt="" height={8} width={12} />
                </a>
              </div>
            </div>
          </div>
          <div className='mt-2'>
            <p className='text-center text-2xl text-gray-800'>Haworthia</p>
            <div className='flex justify-center'>
              <del className='text-gray-500'>$87</del>
              <p className='ms-2 text-gray-500'>$70</p>
            </div>
          </div>

          <div className='bg-black text-white absolute p-1 2xl:top-3 2xl:left-72  xl:top-3 xl:left-96 lg:top-3 lg:left-60 md:top-3 md:left-72 max-sm:top-3 max-sm:left-32'>
            -33%
          </div>

        </div>



        <div className='relative primary-img'>
          <div className='overflow-hidden inline-block'> 
            <img className='hover:scale-110  duration-1000' src="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/Monstera.webp" alt="" />
          </div>
          <div className='absolute left-0 top-0 z-10 shop-icon'>
            <div className='p-3'>
              <div className='p-[12px]  rounded-full m-2  bg-white icon'>
                <a href="" className=''>
                  <img className='icon-1' src={assset27} alt="" height={16} width={16} />
                </a>
              </div>
              <div className='p-[12px] bg-white rounded-full m-2 flex justify-center icon-1'>
                <a href="">
                  <img src={assset28} alt="" height={16} width={16} />
                </a>
              </div>
              <div className='p-[12px] flex justify-center bg-white m-2  rounded-full icon-1'>
                <a href="">
                  <img src={assset29} alt="" height={8} width={12} />
                </a>
              </div>
            </div>
          </div>
          <div className='mt-2'>
            <p className='text-center text-2xl text-gray-800'>Monsterae plant</p>
            <div className='flex justify-center'>
              <p className='ms-2 text-gray-500'>$60.00</p>
            </div>
          </div>

          <div className='bg-black text-white absolute p-1 2xl:top-3 2xl:left-72  xl:top-3 xl:left-96 lg:top-3 lg:left-60 md:top-3 md:left-72 max-sm:top-3 max-sm:left-32'>
            -33%
          </div>

        </div>



        <div className='relative primary-img'>
          <div className='overflow-hidden inline-block'>
            <img className='hover:scale-110  duration-1000' src="https://emart.wpthemedemos.com/plant-garden/wp-content/uploads/sites/10/2022/12/Birds-nest-fern-01.webp" alt="" />
          </div>
          <div className='absolute left-0 top-0 z-10 shop-icon'>
            <div className='p-3'>
              <div className='p-[12px]  rounded-full m-2  bg-white icon'>
                <a href="" className=''>
                  <img className='icon-1' src={assset27} alt="" height={16} width={16} />
                </a>
              </div>
              <div className='p-[12px] bg-white rounded-full m-2 flex justify-center icon-1'>
                <a href="">
                  <img src={assset28} alt="" height={16} width={16} />
                </a>
              </div>
              <div className='p-[12px] flex justify-center bg-white m-2  rounded-full icon-1'>
                <a href="">
                  <img src={assset29} alt="" height={8} width={12} />
                </a>
              </div>
            </div>
          </div>
          <div className='mt-2'>
            <p className='text-center text-2xl text-gray-800'>Bird’s nest leslie</p>
            <div className='flex justify-center'>
              <del className='text-gray-500'>$68</del>
              <p className='ms-2 text-gray-500'> $54</p>
            </div>
          </div>

          <div className='bg-black text-white absolute p-1 2xl:top-3 2xl:left-72  xl:top-3 xl:left-96 lg:top-3 lg:left-60 md:top-3 md:left-72 max-sm:top-3 max-sm:left-32'>
            -33%
          </div>

        </div>

      </div>


      <footer>
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


          <div className='xl:flex lg:flex lg:justify-betwee md:flex md:justify-between xl:justify-between max max-sm:justify-center'>
            <div className='xl:flex xl:mt-4 md:flex md:gap-1 lg:flex lg:gap-3 xl:gap-3 max-sm:flex max-sm:justify-center max-sm:gap-2 max-sm:mt-3 '>
              <img className='w-9' src={assset52} alt="" />
              <img className='w-9' src={assset53} alt="" />
              <img className='w-9' src={assset54} alt="" />
              <img className='w-9' src={assset55} alt="" />
            </div>
            <div className='mt-4 max-sm:flex max-sm:justify-center'>
              <p className='inline-block text-slate-500'>Designed by : </p>
              <p className='inline-block font-bold text-slate-500'>Wpignite</p>
            </div>
            <div className='xl:flex lg:flex md:flex md:gap-2 xl:gap-3 lg:gap-2  max-sm:flex  max-sm:justify-center  max-sm:gap-1 max-sm:mt-3'>
              <img src={asset56} alt="" />
              <img src={asset57} alt="" />
              <img src={asset58} alt="" />
              <img src={asset59} alt="" />
              <img src={asset60} alt="" />
            </div>
          </div>
        </div>
      </footer>



    </div>
  )
}

export default Home
