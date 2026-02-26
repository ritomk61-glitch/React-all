import React, { useState } from 'react'


const Project = () => {
 const [head, sethead] = useState('')
 const [details, setdetails] = useState('')
//  const [delet, setdelet] = useState('')

const [main, setmain] = useState([])

  const submitted = (e)=>{
    e.preventDefault()
    
    const newmain = [...main]

    newmain.push({head , details})
     setmain(newmain)

    sethead('')
    setdetails('')
  }

  const deletnote = (idx) => {
    const newdelm=[...main]
    newdelm.splice(idx,1)

    setmain(newdelm)
  }


  return (
    <div className='h-screen lg:flex  bg-black text-white '>

      <form className=' p-10 flex flex-col gap-13 lg:w-1/2 border-r-2 ' onSubmit={(e)=>{
        submitted(e)
      }}>
<h1 className='font-bold text-2xl'>Add Notes</h1>
        <input type="text"
        placeholder='Enter Notes Heading'
        className='border-2 p-4  w-170 text-2xl rounded outline-none'
        value={head}
        onChange={(e)=>{
         sethead(e.target.value)
        }}
        
        />

         <textarea
        placeholder='Write Details'
        className='border-2 p-9 h-72 w-170 text-2xl rounded outline-none'
        value={details}
        onChange={(e)=>{
          setdetails(e.target.value)
        }}
        
        />
       


        <button className='bg-white text-black p-4 w-170 rounded font-bold text-2xl'>Add Note</button>


      </form>

     <div className=' p-22 gap-3 lg:w-1/2'> 
     <h1 className='font-bold text-2xl'>Your Notes</h1>
     <div className='flex flex-wrap gap-3 p-6'>
       {
        main.map(function(elem , idx){
          return <div key={idx} className='bg-white p-3 h-90 w-70 rounded text-black bg-[url(https://i.pinimg.com/736x/15/09/fd/1509fd074f6169632861a2f9f713037f.jpg)] bg-bg-cover bg-bg-center'>
            <h1 className='text-2xl flex justify-center font-bold overflow-y-auto'>{elem.head}</h1>
            <p className='p-2 font-mono '>{elem.details}</p>

            
            <div className='mt-[80%] flex justify-center'>

            <button onClick={()=> 

              deletnote(idx)} className='bg-red-600 text-white text-2xl rounded-lg px-4 py-2'>delete</button>
      
            </div>
          </div>

        })
       }
     
      
      
     </div>

     </div>
    </div>
  )
}

export default Project
