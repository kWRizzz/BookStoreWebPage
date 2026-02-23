import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Login from '../pages/auth/Login';
const NavBar = () => {
    return (
        <div
            className=' w-full h-full flex justify-between items-center px-2  bg-slate-300 '
        >
            <div>
                <h1>
                    OrderIt
                </h1>
            </div>

            {/* login */}
            <div>



                <button>
                    <Link
                        to='/login'
                    >
                        Login
                    </Link>
                </button>
            </div>
        </div>
    )
}

export default NavBar