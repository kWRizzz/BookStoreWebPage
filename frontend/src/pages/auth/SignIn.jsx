import React from 'react'
import { useState } from 'react'

const SignIn = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)

    const handleSubmit= ()=>{
        console.log(name);
        console.log(email);
        console.log(password);
    }

    return (
        <div
            className=' h-screen w-full bg-gray-200 flex justify-center items-center'
        >
            <div
                className=' border h-[27rem] w-[21rem] transition-all ease-in-out duration-300 hover:h-[30rem] hover:w-[25rem] bg-gray-500 hover:bg-gray-400   shadow-black shadow-lg drop-shadow-lg   rounded-lg py-1 px-8'
            >

                {/* heading */}
                <div
                    className=' text-center flex justify-center '
                >
                    <h1
                        className=' font-extrabold font-mono text-5xl transition-all ease-in-out duration-500 delay-200 hover:underline'
                    >
                        OrderIt
                    </h1>
                </div>


                {/* userDetails */}
                <div
                    className=' mt-5  transition-all ease-in-out duration-300 hover:mt-8'
                >

                    {/* userName */}
                    <div
                        className='mt-2 transition-all ease-in-out duration-300 hover:mt-4'
                    >
                        <div
                            className='pb-2 px-3 font-semibold'
                        >
                            UserName:
                        </div>
                        <div
                            className=' w-full'
                        >
                            <input
                                className=' w-full rounded-lg h-[2.5rem] px-3'
                                placeholder='Enter The UserName'
                                type="email"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                    </div>


                    {/* Email */}
                    <div
                        className='mt-2 transition-all ease-in-out duration-300 hover:mt-4'
                    >
                        <div
                            className='pb-2 px-3 font-semibold'
                        >
                            UserEmail:
                        </div>
                        <div
                            className=' w-full'
                        >
                            <input
                                className=' w-full rounded-lg h-[2.5rem] px-3'
                                placeholder='Enter The UserEmail'
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>


                    {/* UserPassword */}
                    <div
                        className='mt-2 transition-all ease-in-out duration-300 hover:mt-4'
                    >
                        <div
                            className='pb-2 px-3 font-semibold'
                        >
                            UserPassword:
                        </div>
                        <div
                            className=' w-full'
                        >
                            <input
                                className=' w-full rounded-lg h-[2.5rem] px-3'
                                placeholder='Enter The UserName'
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>


                </div>

                {/* Button */}

                <div 
                    className=' flex justify-center items-center mt-10'
                >
                    <div
                        className=' bg-slate-700 transition-all ease-in-out duration-300 hover:bg-slate-500 rounded-xl    '
                    >
                        <input 
                            className=' h-[2rem] w-[5rem]  transition-all ease-in-out duration-300 rounded-xl '
                            onClick={handleSubmit}
                            type="submit"
                            name="submit"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn