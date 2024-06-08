import React from 'react'
import { useRef, useState } from 'react'

/*Use Ref Hookes in react*/

/* DOM manipulation */

const Use_Ref = () => {

    const [name, setname] = useState('vasu')

    const refElement = useRef('')    //Dom changes use this useref('') use funtion example ResetName() 
    const refElement1 = useRef('')



    function ResetName() {
        setname('')
        refElement.current.focus()
        // refElement.current.hover()

    }

    function Applycolor() {
        refElement1.current.style.backgroundColor = "orange"
    }

    return (
        <div className='flex justify-center items-center h-screen'>
            <div ref={refElement1} className='h-96 w-96'></div>
            <input type="text" ref={refElement} className='border-2 border-solid m-3' value={name} name="" onChange={(e) => setname(e.target.value)} id="" />
            <button className='border border-indigo-600 bg-orange-600' onClick={ResetName}>Reset</button>
            <button className='border border-indigo-600 bg-orange-600 m-4' onClick={Applycolor}>change color</button>

        </div>
    )
}




export default Use_Ref
