import Comp_A from './Comp_A'
import { createContext } from 'react'

/* create  , provider , consumer */


const data = createContext()
const data1 = createContext()



const Main_Copm = () => {


  const name = "vasu"
  const gender = "Male"

  return (
    <div>
      <data.Provider value={name}>
        <data1.Provider value={gender}>
          <h1>this is main componates</h1>
          <Comp_A />
        </data1.Provider>
      </data.Provider>
    </div>
  )
}

export default Main_Copm
export { data , data1 }
