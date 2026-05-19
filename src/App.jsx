import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Details from './pages/Details'
import Home from './pages/Home'
import { Link } from 'react-router-dom'

function App() {
  return (
    <>

     <div className='w-full mt-2 flex justify-between items-center'>
        <Link to="/">
            <h1 className='text-xl font-bold mx-2'>MovieDB</h1>
        </Link>
        <div>
            <p className='text-center text-gray-500 mt-2 mx-2'>Explore movies and their details</p>
        </div>
     </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:title" element={<Details />} />
      </Routes>
    </>
  )
}

export default App