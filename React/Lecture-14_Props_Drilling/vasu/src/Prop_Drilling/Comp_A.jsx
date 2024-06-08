import React from 'react'
import Comp_B from './Comp_B'

const Comp_A = ({name}) => {
  return (
    <div>
      <h1>this is A componates {name}</h1>
      <Comp_B name={"vasu"}/>
    </div>
  )
}

export default Comp_A
