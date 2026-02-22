import React, { useState } from 'react'

const Count = () => {

const [Num, setNum] = useState(0)

function incresingNum(){
    setNum(Num+1)
}
function decresingNum(){
    setNum(Num-1)
}
function go0(){
    setNum(0)
}




  return (
    <div>
      <div className="flex gap-6 p-8 justify-center items-center h-70 shadow-lg my-6 text-2xl">
        
        <button onClick={decresingNum} className="shadow-lg rounded-lg px-5 py-2 bg-blue-200 text-emerald-950 font-bold">
          Decreasing
        </button>

        <h1 className='px-9 bg-blue-30 py-3 text-5xl'>{Num}</h1>

        <button onClick={incresingNum} className="shadow-lg rounded-lg px-5 py-2 bg-blue-200 text-emerald-950 font-bold" >
          Increasing
        </button>

        <button onClick={go0} className="shadow-lg rounded-lg px-5 py-2 bg-red-200 font-bold">
          Go to 0
        </button>

      </div>
    </div>
  )
}

export default Count
