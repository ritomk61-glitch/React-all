import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Products= () => {
  return (
    <div>
      <Link className='text-white flex justify-center text-4xl text-bold m-6' to="/Contact/Men">Men</Link>
      <Link className="text-white flex justify-center text-4xl text-bold" to="/Contact/Women">Women</Link>
      {/* <h1 className='text-white flex justify-center mt-59 text-9xl '>Welcome to the Products page</h1> */}
      <Outlet />
    </div>
  )
}

export default Products
