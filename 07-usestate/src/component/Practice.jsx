import React, { useState } from 'react'

const Practice = () => {

const [love, setlove] = useState("👇")
const [showimg, setshowimg] = useState(false)

const mine = () => {

  setlove("love you mam...love you love you love sooooo mucccchhhhhhhhhhhhh🥹")
  setshowimg(true)
}







  return (
     
    <div>
    
  
      <div>
        <div className='flex justify-center p-10'>
         <img src="https://i.pinimg.com/736x/27/cf/6d/27cf6d31f946823f8d82ab7b1cf3a572.jpg" alt="" className='h-77 rounded-lg' />
      </div>

      <div className='flex justify-center'>
        <h1 className='text-2xl uppercase'>Hey cutiepy❤️</h1>
      </div>

      <div className='flex justify-center'>
        <h2>I have something for you.If you wanna see this then click the button</h2>
        
      </div>
       {showimg && (
      <div className="flex justify-center p-10">
    <img
      src="https://i.pinimg.com/736x/fd/b4/1b/fdb41b9985defa09ae2159ade38f0dc8.jpg"
      alt=""
      className="h-77 "
      />
  </div>
    )}
      <h1 className='flex justify-center text-2xl  mx-25 shadow-lgborder'>{love}</h1>
      <div className='flex justify-center p-7'>
        <button onClick={mine} className=' p-2 bg-pink-300 text-2xl text-white font-sans shadow-lg rounded-lg'>Click Here mam👈 </button>
      </div>
    </div>
    </div>
  )
}

export default Practice
