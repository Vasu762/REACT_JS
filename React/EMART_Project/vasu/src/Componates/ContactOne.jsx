import React from 'react';

const ContainerComponent = () => {
    return (
        <div className='container mx-auto'>
            <div className='mt-36 flex justify-around flex-wrap'>
                <div className=''>
                    <p className='font-semibold  text-5xl'>Reach Out To Us</p>
                    <div className='mt-12'>
                        <div>
                            <p className='font-semibold text-2xl  text-current '>By Address</p>
                            <p className='mt-4 text-lg'>Please reach us: 121 King St, Melbourne VIC 3000, Australia</p>
                        </div>
                        <div>
                            <p className='font-semibold text-2xl text-current mt-4'>By email</p>
                            <p className='mt-4 text-lg'>Please email us and we’ll get back to you within 24 hours: info@example.com</p>
                        </div>
                        <div>
                            <p className='font-semibold text-2xl text-current mt-4'>By phone</p>
                            <p className='mt-4 text-lg'>Call our store: 888 123 4567</p>
                        </div>

                    </div>

                </div>







                <div className=''>
                    <p className='font-semibold  text-5xl'>Send Your Request</p>
                    <div>
                        <div>
                            <input type="text" placeholder='Name' className='border-2  border-solid border-inherit  min-w-[600px] h-12 mt-8' />
                        </div>
                        <div>
                            <input type="text" placeholder='Email Address' className='border-2  border-solid border-inherit  min-w-[600px] h-12 mt-8' />
                        </div>
                        <div>
                            <input type="text" placeholder='Phone' className='border-2  border-solid border-inherit  min-w-[600px] h-12 mt-8' />
                        </div>
                        <div>
                            <textarea name="" id="" className='border-2  border-solid border-inherit  min-w-[600px]  mt-8' cols="20" rows="10" placeholder='Massage'></textarea>
                        </div>
                        <div>
                            <button className='border-2 border-solid  border-black min-w-[600px] h-12 mt-8 text-white bg-black'>Send Message</button>
                        </div>


                    </div>
                </div>

                <div className='mt-8 font-bold'>
                    <hr />
                </div>
            </div>


            <div>
                <div className='mt-12'>
                    <p className='text-center semi-bold text-6xl'>Our Stores</p>
                </div>



                <div className='flex justify-around flex-wrap mt-8'>
                    <div className='object-fill max-w-[440px] '>
                        <img src="https://emart.wpthemedemos.com/wp-content/uploads/2023/03/store-img-1.jpg" alt="" />
                        <p className='mt-6 text-red-500'>NEWYORK</p>
                        <p className='mt-4 text-xl font-semibold'>Thrift</p>
                        <p className='mt-4'>There are many variations of passages of Lorem available denounce </p>
                    </div>

                    <div className='object-fill max-w-[440px]'>
                        <img src="https://emart.wpthemedemos.com/wp-content/uploads/2023/03/store-img-2.jpg" alt="" />
                        <p className='mt-6 text-red-500'>WASHINGTON</p>
                        <p className='mt-4 text-xl font-semibold'>Shophouse</p>
                        <p className='mt-4'>On the other hand, we denounce with righteous indignation </p>
                    </div>

                    <div className='object-fill max-w-[440px]'>
                        <img src="https://emart.wpthemedemos.com/wp-content/uploads/2023/03/store-img-3.jpg" alt="" />
                        <p className='mt-6 text-red-500'>LAS VEGAS</p>
                        <p className='mt-4 text-xl font-semibold'>Leisurewear</p>
                        <p className='mt-4'>Righteous indignation and dislike we denounce with righteous</p>
                    </div>
                </div>
            </div>






            <footer>
                <div className='bg-slate-300 mt-10'>

                    <div className=''>
                        <div className='pt-10'>
                            {/* 1 */}
                            <img src="https://emart.wpthemedemos.com/wp-content/uploads/2023/02/e-mart-logo-03.svg" alt="" />
                            <p className=''>Molestie vitae massa felis, aliquam lectus at. <br /> Ultricies et, quis sit fermentum.</p>
                        </div>
                        <div>
                            {/* 2 */}
                        </div>
                    </div>




                </div>
            </footer>

        </div>
    );
}

export default ContainerComponent;
