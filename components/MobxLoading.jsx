import React from 'react'

function MobxLoading() {
    return (
        <div className="flex justify-center ">
            <div className="w-full max-w-sm animate-pulse">

                <div className="w-full max-w-sm justify-center" >
                    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 opacity-70 ">
                        <div className="flex justify-between items-center space-x-8 ">
                            <p className="text-gray-700 text-sm font-bold overflow-clip w-48 h-5 bg-slate-300 rounded-sm opacity-40 " ></p>
                            <div className="flex items-center space-x-4">
                                {/* <div className="form-check">
                                    <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
                                        type="checkbox"
                                    />
                                </div> */}
                                <button className="bg-red-600  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-20 h-10"
                                >

                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full max-w-sm justify-center" >
                    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 opacity-70 ">
                        <div className="flex justify-between items-center space-x-8 ">
                            <p className="text-gray-700 text-sm font-bold overflow-clip w-48 h-5 bg-slate-300 rounded-sm opacity-40 " ></p>
                            <div className="flex items-center space-x-4">
                                {/* <div className="form-check">
                                    <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
                                        type="checkbox"
                                    />
                                </div> */}
                                <button className="bg-red-600  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-20 h-10"
                                >

                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full max-w-sm justify-center" >
                    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 opacity-70 ">
                        <div className="flex justify-between items-center space-x-8 ">
                            <p className="text-gray-700 text-sm font-bold overflow-clip w-48 h-5 bg-slate-300 rounded-sm opacity-40 " ></p>
                            <div className="flex items-center space-x-4">
                                {/* <div className="form-check">
                                    <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
                                        type="checkbox"
                                    />
                                </div> */}
                                <button className="bg-red-600  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-20 h-10"
                                >

                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MobxLoading



export function MobxNull() {
    return (
        <div className="flex justify-center ">
            <div className="w-full max-w-sm ">

                <div className="w-full max-w-sm justify-center" >
                    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 opacity-90 ">
                        <div className="flex justify-between items-center space-x-8 ">
                            <p className="text-gray-700 text-sm font-bold overflow-clip w-48 h-5  " >There's Nothing To Display</p>
                            <div className="flex items-center space-x-4">
                                {/* <div className="form-check">
                                    <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
                                        type="checkbox"
                                    />
                                </div> */}
                                {/* <button className="bg-red-600  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-20 h-10"
                                >

                                </button> */}
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z" clip-rule="evenodd" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
