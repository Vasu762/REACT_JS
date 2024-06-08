import React from 'react'


export function Button() {
    return (
        <>
            <button className='bg-purple-500  py-2 px-12 border-dotted border-red border-4'>Vasu</button>
        </>
    )
}



// arrow funtion

export const Button1 = () => {
    return (
        <>
            <button className='bg-red-500  py-2 px-12 border-desh border-red border-4'>Vasu  V.</button>
        </>
    )
}


export const Button2 = () => {
    return (
        <>
            <button className='bg-yellow-500  py-2 px-12 border-desh border-yellow border-4'>Vasu vaghasiya</button>
        </>
    )
}



export const Button3 = () => {
    return (
        <>
            <button className='bg-green-500  py-2 px-12 border-desh border-green border-4'>Vaghasiya Vasu</button>
        </>
    )
}



export const Button4 = () => {
    return (
        <>
            <button className='bg-blue-500  py-2 px-12 border-desh border-blue border-4'>Vasu</button>
        </>
    )
}








const Nested = () => {
    return (
        <div>
            < Button />
            <Button1 />
            <Button2 />
            <Button3 />
            <Button4 />
        </div>
    )
}

export default Nested
