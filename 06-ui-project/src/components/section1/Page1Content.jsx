import React from 'react'
import Leftcontent from './Leftcontent'
import Rightcontent from './Rightcontent'

const Page1Content = () => {
  return (
    <div>
      <div className='px-20 py-15  h-[84vh] flex justify-between'>
       
        <Leftcontent/>
        <Rightcontent/>
        
      </div>
    </div>
  )
}

export default Page1Content
