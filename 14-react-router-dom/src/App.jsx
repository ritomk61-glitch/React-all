import  Home  from './pages/Home'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import  Contact  from './pages/Contact'
import Header from './component/Header'

const App = () => {
  return (
    <div>
    
<Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/contact' element={<Contact />}/>

      </Routes>

    </div>
  )
}

export default App
