import React, { useState } from 'react';
import { Product } from '../Product';

const Card = () => {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((index + 1) % Product.length); // Increment index and loop back to 0 if at the end
  };

  const prev = () => {
    setIndex((index - 1 + Product.length) % Product.length); // Decrement index and loop to the end if at the beginning
  };

  const productData = Product[index];

  return (
    <div className='flex justify-center gap-10'>

        <button onClick={prev} className='btn mt-[15%] h-10 hover:bg-red-950'>Prev</button>
      <div className='text-center space-y-3'>
        <p>
        ({index + 1} of {Product.length})
        </p>
        <div className='w-[300px]  border-2 border-solid border-black rounded-xl p-4 shadow-lg shadow-cyan-500/50 '>
          <div className='text-center flex justify-center p-4'>
            <img className='h-[200px] w-[200px]' src={productData.image} alt="" />
          </div>

          <div className='bg-orange-600 rouner-2xl p-3 rounded-2xl'>
            <h1 className='font-bold'>{productData.title}</h1>
            <p className='hover:text-white'>{productData.description}</p>
            <span className='font-bold'>{productData.category}</span>
            <span className='font-bold ms-12'>${productData.price}</span>
          </div>
        </div>
      </div>

      
        <button onClick={next} className='btn mt-[15%]  h-10 hover:bg-red-950'>Next</button>
     
    </div>
  );
}

export default Card;
