import React from 'react'
import Login from './pages/auth/Login'
import SignIn from './pages/auth/SignIn'
import { createBrowserRouter, RouterProvider, Link, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
const App = () => {

  // const router=createBrowserRouter([

  //   {
  //     path:'/',
  //     element:<Login/>
  //   },
  //   {
  //     path:'/signin',
  //     element:<SignIn/>
  //   }
  // ])

  return (
    <div
      className=''
    >
      {/* button proto Type */}
      {/* <div>

        <Routes>
          <Route
            path='/login'
            element={<Login />}
          />
        </Routes>

        <button>
          <Link
            to='/login'
          >
            Login
          </Link>
        </button>
      </div> */}
      <Routes>
        <Route
          path='/login'
          element={<Login />}
        />
        <Route
          path='/signin'
          element={<SignIn/>}
        />
        <Route
          path='/'
          element={<Home/>}
        />
      </Routes>
     
    </div>
  )
}

export default App