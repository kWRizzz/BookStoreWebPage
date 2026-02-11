import React from 'react'

const SignIn = () => {
  return (
    <div
        className=' h-screen w-full flex justify-center items-center bg-white   '
    >
        <div
            className='  h-[35rem] w-[30rem] rounded-xl shadow-2xl  border-4 border-gray-600 py-5 stroke-slate-900 px-5' 
        >   
            <div
                className=' flex justify-center items-center'
            >
                <h1
                    className=' text-5xl font-semibold font-serif'
                >
                    Order-It
                </h1>
            </div>

            <div>

                <div
                    className=' flex items-center'
                >
                    <div>
                        <h1
                            className=' font-semibold'
                        >
                            UserName:
                        </h1>
                    </div>
                    <div>
                        <input 
                            className=' h-[2.5rem] border'
                            placeholder='Enter UserName'
                            type="text"
                         />
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default SignIn