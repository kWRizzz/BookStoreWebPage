import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Login from '../pages/auth/Login';
import { CiSearch } from "react-icons/ci";

const NavBar = () => {
    return (
        <div
            className=' w-full h-full flex justify-between items-center px-11  bg-slate-300 '
        >
            <div
                className=' cursor-pointer transition-all ease-linear duration-300  hover:underline hover:text-slate-800'
            >
                <h1
                    className=' font-semibold text-4xl '
                >
                    BookStore
                </h1>
            </div>

            {/* login */}
            <div
                className=' flex justify-center items-center '
            >

                <div
                    className=' flex justify-center items-center mx-10 '
                >
                    {/* home */}
                    <div
                        className=' mx-2 cursor-pointer transition-all ease-in-out duration-150 rounded-lg hover:bg-slate-200 w-[5rem] flex justify-center '
                    >
                        <h1
                            className=' font-semibold text-lg text-slate-700'
                        >
                            Home
                        </h1>
                    </div>

                    {/* Courses */}
                    <div
                        className=' mx-2 cursor-pointer transition-all ease-in-out duration-150 rounded-lg hover:bg-slate-200 w-[5rem] flex justify-center '
                    >
                        <h1
                            className=' font-semibold text-lg text-slate-700'
                        >
                            Courses
                        </h1>
                    </div>

                    {/* contact */}

                    <div
                        className=' mx-2 cursor-pointer transition-all ease-in-out duration-150 rounded-lg hover:bg-slate-200 w-[5rem] flex justify-center '
                    >
                        <h1
                            className=' font-semibold text-lg text-slate-700'
                        >
                            Contact
                        </h1>
                    </div>

                    {/* About */}
                    <div
                        className=' mx-2 cursor-pointer transition-all ease-in-out duration-150 rounded-lg hover:bg-slate-200 w-[5rem] flex justify-center '
                    >
                        <h1
                            className=' font-semibold text-lg text-slate-700'
                        >
                            About
                        </h1>
                    </div>
                </div>


                {/* search bar */}

                <div
                    className=' mr-10 flex justify-center items-centerbg-slate-100 '
                >
                    <div
                        className=' bg-slate-100 h-[2rem] flex justify-center items-center'
                    >
                        <CiSearch 

                        />

                    <input
                        className=' bg-slate-100 '
                        placeholder='Search'
                        type="text"
                    />
                    </div>
                </div>


                <button
                    className=' bg-slate-950   text-slate-100 h-[2rem] w-[4rem] rounded-lg transition-all ease-in-out duration-150 hover:bg-slate-600  '
                >
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