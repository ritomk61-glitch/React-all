import { Link } from 'react-router-dom'
import React from 'react'

const Navbar = () => {
  return (


    <div className=' text-white text-4xl flex bg-cyan-500 justify-between p-9'>
    <div>
        <h2>Milyky</h2>    
    </div>
    <div className='flex gap-9 '>  
        <Link to={'/Home'}>Home</Link>
        <Link to={'/About'}>About</Link>
        <Link to={'/Contact'}>Products</Link>
        <Link to={'/Course'}>Course</Link>
    </div>
    </div>
   
  )
}

export default Navbar
