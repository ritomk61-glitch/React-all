import React from 'react'
import { useParams } from 'react-router-dom'

const Coursee = () => {

     const param = useParams()
  return (
    <div>
      <h1 className='text-white text-2xl text-bold flex justify-center'>you enter the {param.id} in url thank you</h1>
    </div>
  )
}

export default Coursee
