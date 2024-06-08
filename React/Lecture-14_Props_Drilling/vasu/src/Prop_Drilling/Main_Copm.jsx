import React from 'react'
import Comp_A from './Comp_A'
 
const Main_Copm = () => {

  const name = "skillqude"

  return (
    <div>
      <h1>this is main componates</h1>
      <Comp_A name={name} />
    </div>
  )
}

export default Main_Copm
