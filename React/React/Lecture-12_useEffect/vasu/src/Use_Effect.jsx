import React from 'react'
import { useState, useEffect } from 'react'

// react with useEffect Hookes


// useEffect(setup, dependencies?)

const Use_Effect = () => {

    const [data, setData] = useState(0)
    const [data1, setData1] = useState("")



    function handalClike() {
        setData(data + 1)
    }


    function handalClike2() {
        setData1("hello vasu")

    }

    useEffect(() => {
        console.log("vasu");
    }, [data])           // [] empty is not updated funtion but [data] is only data variable update value     


    // useEffect(() => { 
    //     console.log("vasu");
    // })                  // call funtion updata value

    return (
        <div>
            <span className='bg-red-100 ms-3'>{data}</span>
            <button className='bg-red-400 ms-5 hover:bg-orange-600' onClick={handalClike}>Clicke me</button>
            <span className='bg-red-100 ms-3'>{data1}</span>
            <button className='bg-red-400 ms-5 hover:bg-orange-600' onClick={handalClike2}>Clicke me</button>


        </div>
    )
}

export default Use_Effect
