import React from 'react'

const Functiooon = () => {

const incresing = () => {
  console.log("why you click here")
}


// const btnclick = () => {
  //   console.log("button click");
  // };
  
  return (
    <div className='bg-black text-white'>

      <input type="text" placeholder='enter your name'
      onChange={(props)=>{
        incresing(props.target.value)
      }}/>
    <button onClick={()=>{
      incresing()
    }}>click me</button>
    </div>
  )
};


export default Functiooon
