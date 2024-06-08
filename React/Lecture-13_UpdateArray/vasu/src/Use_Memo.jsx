import React from 'react'
import { useState, useMemo } from 'react'

/* React Hooks UseMemo() */

const Use_Memo = () => {

  const [add, setadd] = useState(0)
  const [count, setcount] = useState(0)


  function added() {
    console.log("added call");
    return setadd(add + 1)
  }


  function conter() {
    console.log("conter call");
    return setcount(count + 10)
  }

  const Mutliplication = useMemo(
    function multi() {
      console.log("multi call");
      return add * 10
    }, [add])      // add clicke call => multi and add two 






  return (
    <div>
      <h1 className='text-4xl'>React Hooks UseMemo</h1>
      <div className='border
      -2 border-current border-solid bg-orange-300 m-5'>multi :- {Mutliplication}</div>
      <div className='border-2 border-current border-solid bg-red-400 m-5'>add:- {add}</div>
      <button className='border-2 border-current border-solid bg-slate-300 m-4' onClick={added}>Click Add + 1</button>
      <div className='border-2 border-current border-solid bg-red-400 m-5'>count :-{count}</div>
      <button className='border-2 border-current border-solid bg-stone-500 m-4' onClick={conter}>Clicke Count + 10</button>



    </div>
  )
}

export default Use_Memo
