import React from 'react'
import NavBar from '../../Components/NavBar'

const Home = () => {
  return (
    <div
        className='h-screen w-full bg-gray-200'
    >
        <nav
            className=' w-full h-[5rem] border border-black'
        >
            <NavBar/>
        </nav>

    </div>
  )
}

export default Home