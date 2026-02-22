import React from 'react'
import Photo from './components/Photo'

const App = () => {
  const details =[
    {
      name:"ritom",
      place:"bangladesh",
      img:"",
    },
    {
      name:"priya",
      place:"bangladesh",
      img:""
    },
  ]
  return (
    <div>
        {
          details.map(function(e){
            return <Photo name={e.name} place ={e.place} img={e.img}/>
          })
        }
    </div>
  )
}

export default App



