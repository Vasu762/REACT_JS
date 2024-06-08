import React from 'react'
import { data} from "./Main_Copm";
import { useContext } from 'react';


const Comp_C = () => {

    const firstname = useContext(data)

    return (
        <div>
            <h1>My name is {firstname} And My Gender is </h1>
        </div>
    )
}


export default Comp_C
