import React from 'react'
import NavBar from '../../Components/NavBar'
import Content from './content/Content'

const Home = () => {
    return (
        <div
            className='h-screen w-full flex flex-col bg-gray-200'
        >
            <nav
                className=' w-full h-[5rem]  border border-black'
            >
                <NavBar />
            </nav>

            <div
                className=' overflow-y-auto'
            >
               {/*Content */}
               <Content/>
            </div>

        </div>
    )
}

export default Home