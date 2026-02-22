import React from 'react'

const Scrolling = () => {

    const scrol = () =>{
        console.log("scrolling")
    }
  return (
    <div>
        <div onWheel={()=>{
          scrol()
        }}>

    <div className='h-180 bg-amber-500 hover:bg-black' onMouseEnter={()=>{;
    }}></div>
      <div className='h-189 bg-blue-500'>y</div>
      <div className='h-190 bg-emerald-400'>t</div>
    </div>
        </div>
  )
}

export default Scrolling
