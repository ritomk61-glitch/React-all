import React from 'react'
import { useState } from 'react'


const Core = () => {

    const [name, setname] = useState('')

const submitted = (e)=>{
  e.preventDefault()
  console.log(name)
  setname('')
}
  return (
    <div>

  return (
    <div>
      
      <form onSubmit={(e)=>{
        submitted(e)
      }}>
      <input type="text" 
      placeholder='enter your name'
      value ={name}
      onChange={(e)=>{
        setname(e.target.value)
      }}

      />
       <button>submit</button>
      </form>
    </div>
  )
    </div>
  )
}

export default Core
