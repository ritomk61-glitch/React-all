import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const Calling = () => {

const [datas, setdatas] = useState([])
const callingg = async() => {
    const response =await axios.get('https://picsum.photos/v2/list')

    console.log(response.data)

    setdatas(response.data)
}

  return (
    <div>
      <p>{datas. author}</p>

      <button onClick={callingg}>click me </button>
    </div>
  )
}

export default Calling
