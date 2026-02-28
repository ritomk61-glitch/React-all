import React, { useEffect, useState } from 'react'

const First = () => {

const [num1, setnum1] = useState(0)

const [num2, setnum2] = useState(10)

useEffect(function(){
 console.log("useeffect is running ..... ")
},[num2])

  return (
    <div>
   <h1>{num1}</h1>
   <h1>{num2}</h1>

   <button onClick={()=>{
    setnum1(num1+1)
   }}>num1</button>

   <button onClick={()=>{
    setnum2(num2+10)
   }}>num2</button>
    </div>
  )
}

export default First
