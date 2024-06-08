import React from 'react'
import assets61 from '../assets/asset 61.svg'
import assets60 from '../assets/asset 60.svg'
import assets56 from '../assets/asset 56.svg'
import assets58 from '../assets/asset 58.svg'
import assets57 from '../assets/asset 57.svg'
import { Container, Row, Col } from 'react-bootstrap';

const BlogOne = () => {
    return (
        <div className='container px-2'>
            <div className='bg-red-100 pb-20'>
                <div className='pt-16'>
                    <p className='xl:text-center font-semibold text-lg lg:text-left'>Featured Posts</p>
                    <p className='xl:text-center font-bold text-4xl lg:text-start'>News & Insights From</p>
                    <p className='xl:text-center font-bold text-4xl lg:text-start'>Our Experts</p>
                </div>
                <div className='flex justify-between flex-wrap'>
                    <div class='object-fill xl:max-w-[800px] m-3 inline-block overflow-hidden max-h-[600px] max-w-[500px]'>
                        <img class='xl:max-w-[900px]  md:w-full hover:transform hover:scale-105 hover:scaleY-125 hover:opacity-75 object-cover h-full w-full transition-transform duration-300 ease-in-out' src="https://emart.wpthemedemos.com/wp-content/uploads/2022/10/blog-img-22.webp" alt="" />
                        <p class='mt-3 text-2xl font-bold'>How To Dress Appropriately For Any Occasion</p>
                        <p>Discover More</p>
                    </div>



                    <div className='mt-4 '>
                        <div class=''>
                            <div class='overflow-hidden inline-block max-h-[400px] md:max-w-[500px]'>
                                <img class='hover:scale-105 hover:opacity-75 transition-transform duration-300 object-cover h-full w-full ease-in-out' src="https://emart.wpthemedemos.com/wp-content/uploads/2022/10/blog-img-11.webp" alt="" />
                            </div>
                            <p class='text-2xl font-bold mt-3'>7 Ways To Stand Out With Your Personal Style</p>
                            <p>Discover More </p>
                        </div>



                        <div class=''>
                            <div class='overflow-hidden inline-block max-h-[400px] md:max-w-[500px]'>
                                <img class='hover:scale-105 hover:opacity-75 transition-transform duration-300 object-cover h-full w-full ease-in-out' src="https://emart.wpthemedemos.com/wp-content/uploads/2022/10/blog-img-12-1.webp" alt="" />
                            </div>
                            <p class='text-2xl font-bold mt-3'>5 Essential Wardrobe Staples For Every Fashionista</p>
                            <p>Discover More </p>
                        </div>
                    </div>

                </div>
            </div>

            <div className='mt-16'>
                <p className='font-semibold text-lg'>Other Posts</p>
                <p className='text-4xl font-bold mt-2'>Our Recent Blogs</p>

                <Container className='mt-4'>
                    <Row>
                        <Col lg={6} md={12} >
                            <div className='overflow-hidden inline-block max-h-[600px] max-w-[850px]'>
                                <img className='hover:opacity-50  hover:overflow-hidden hover:scale-105 duration-500 transition-transform ease-in-out object-cover h-full w-full' src="https://emart.wpthemedemos.com/wp-content/uploads/2021/05/blog-img-23.webp" alt="" />
                            </div>
                            <p className='mt-3 font-bold text-2xl'>How To Accessorize To Perfectly Compliment Your Outfit</p>
                        </Col>
                        <Col lg={6} md={12}>
                            <div className='overflow-hidden inline-block max-h-[600px] max-w-[850px]'>
                                <img className='hover:opacity-50  hover:overflow-hidden hover:scale-105 duration-500 transition-transform ease-in-out object-cover h-full w-full' src="https://emart.wpthemedemos.com/wp-content/uploads/2022/10/blog-img-12.webp" alt="" />
                            </div>
                            <p className='mt-3 font-bold text-2xl'>The Benefits Of Shopping Small And Local</p>
                        </Col>
                    </Row>
                </Container>
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
            <div className='xl:flex xl:mt-4 md:flex md:gap-1 lg:flex lg:gap-3 xl:gap-3 max-sm:flex max-sm:justify-center max-sm:gap-2 max-sm:mt-3'>
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

export default BlogOne
