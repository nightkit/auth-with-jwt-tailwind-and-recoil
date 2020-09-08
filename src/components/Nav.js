import React, { useState } from 'react'
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

// State Imports
import { useRecoilValue } from 'recoil';
import { userState, isLoggedIn } from '../authentication/state';

export default function Nav() {
    const [mobileToggle, setMobileToggle] = useState(false);
    const loggedIn = useRecoilValue(isLoggedIn);
    const user = useRecoilValue(userState);

    const links = [
        {
            name: 'About',
            route: '/about'
        },
        {
            name: 'Unsecured Page',
            route: '/unsecured'
        }
    ];

    return (
        <>
        <div className="relative bg-white lg:shadow-md xl:shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                <div className="lg:w-0 lg:flex-1">
                    <Link to="/">
                        <img className="h-8 w-auto sm:h-10" src={logo} alt="NightKit" />
                    </Link>
                </div>
                <div className="-mr-2 -my-2 md:hidden">
                    <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out" onClick={() => setMobileToggle(true)}>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    </button>
                </div>
                <nav className="hidden md:flex space-x-10">
                {links.map(link => {
                    return (
                        <Link to={link.route} key={link.name}>
                            <button className="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150">
                            {link.name}
                            </button>
                        </Link>
                        
                    )
                })}
                </nav>
                <div className="hidden md:flex items-center justify-end space-x-8 md:flex-1 lg:w-0" >
                    <Link to={loggedIn ? "/profile" : "/login"}>
                        <button className="whitespace-no-wrap text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900">
                            {loggedIn ? (
                                <>
                                <svg className="fill-current w-5 h-5 inline-flex mr-2" viewBox="0 0 24 24"
                                >
                                    <circle cx="12" cy="8" r="5" />
                                    <path d="M3,21 h18 C 21,12 3,12 3,21"/>
                                </svg>
                                Profile
                                </>
                            ) : ( `Login` )
                            }
                        </button>
                    </Link>
                    {loggedIn ? (<>
                        <Link to="/logout">
                            <button className="whitespace-no-wrap text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900">
                                Logout
                            </button>
                        </Link>
                    </>) : (<></>)}
                    
                    <span className="inline-flex rounded-md shadow-sm">
                    {user.name ? (
                         <button className="whitespace-no-wrap inline-flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150" disabled>
                                 Hi {user.name}
                         </button>

                    ) : (
                         <Link to="/register">
                         <button className="whitespace-no-wrap inline-flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150">
                                 Register
                         </button>
                        </Link>
                    )}
                  
                    </span>
                </div>
                </div>
            </div>

            <div className={mobileToggle ? "absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden" : "hidden"}>
                <div className="rounded-lg shadow-lg">
                <div className="rounded-lg shadow-xs bg-white">
                    <div className="pt-5 pb-6 px-5 space-y-6">
                    <div className="flex items-center justify-between">
                        <div>
                        <img className="h-8 w-auto" src={logo} alt="Workflow" />
                        </div>
                        <div className="-mr-2">
                        <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out" onClick={() => setMobileToggle(false)}>
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        </div>
                    </div>
                  
                    </div>
                    <div className="py-6 px-5 space-y-6">
                    <div className="grid grid-cols-2 row-gap-4 col-gap-8">
                        {links.map(link => {
                            return (
                                <Link to={link.route} key={link.name}>
                                    <button className="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150">
                                     {link.name}
                                    </button>
                                </Link>
                                
                            )
                        })}
                    </div>
                    <div className="space-y-6">
                        <span className="w-full flex rounded-md shadow-sm">
                        <Link to={loggedIn ? "/profile" : "/register"}>
                            <button className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150">
                                {loggedIn ? "Profile" : "Register"}
                            </button>
                        </Link>
                        {loggedIn ? (<>
                        <Link to="/logout">
                            <button className="mx-2 w-full flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150">
                                Logout
                            </button>
                        </Link>
                        </>) : (<></>)}
                        </span>
                        {loggedIn ? (<></>) : (
                            <p className="text-center text-base leading-6 font-medium text-gray-500">
                            Already have an account?
                            <Link to="/login">
                                <button className="text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150">
                                    Login
                                </button>
                            </Link>
                            </p>
                        )}
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </>
    )
}
