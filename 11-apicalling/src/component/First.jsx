import React, { useState } from 'react'
import axios from 'axios'

const First = () => {

// * method-1 for api calling

// const calling =async () =>{
  
//   const newmain = await fetch('https://jsonplaceholder.typicode.com/todos')
//  const data = await newmain.json()
//   console.log(data)
// }

//* method-2 for api calling using axios

const [datas, setdatas] = useState([])
const calling = async () => {
  
const response = await axios.get('https://jsonplaceholder.typicode.com/todos')

setdatas(response.data)
//  console.log(data.data)
}



  return (
    <div>
  <button className='bg-white border text-black text-2xl ' onClick={calling}>click me</button>

  <div>
    {datas.map(function(elem,idx){
      return <h3>{idx}</h3>
    })}
  </div>


    </div>
 
  )
}

export default First

