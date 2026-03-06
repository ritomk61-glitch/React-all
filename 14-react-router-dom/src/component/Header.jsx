import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <div className='flex justify-between m-20'>
        <div className='text-5xl text-amber-600 font-bold'>
            <h1>vibe coder</h1>
        </div>

        <div className='flex gap-19 text-4xl font-bold  '>
           <Link to='/home'>Home</Link>
           <Link to='/about'>About</Link>
           <Link to='contact'>Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default Header
