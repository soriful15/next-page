import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BoltIcon, Bars3BottomRightIcon, XCircleIcon } from '@heroicons/react/24/solid'
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <div className='bg-gray-100 px-4 py-5 mx-auto md:max-w-full sm:max-w-xl lg:max-w-screen-xl md:px-24 lg:px-8'>


            <div className='flex items-center justify-between relative'>
                {/* logo section */}
                <div>
                    <Link to='/' className='inline-flex items-center'>
                        <BoltIcon className="h-6 w-6 text-blue-500" />
                        <span className='ml-2 text-2xl font-bold tracking-wid text-gray-800'>Next page</span>
                    </Link>
                </div>
                {/* nav item section */}
                <div>
                    <ul className='items-center hidden space-x-8 lg:flex'>

                        <li>
                            <NavLink
                                to='/'
                                title='Home Link'
                                className={({ isActive }) => (isActive ? 'text-blue-600' : '')}
                            >
                                Home
                            </NavLink>
                        </li>

                        <li>

                            <NavLink
                                to='/books'
                                title='Books Link'
                                className={({ isActive }) => (isActive ? 'text-blue-600' : '')}
                            >

                                Books</NavLink>
                        </li>
                        <li>

                            <NavLink
                                to='/about'
                                title='About Link'
                                className={({ isActive }) => (isActive ? 'text-blue-600' : '')}
                            >

                                About</NavLink>
                        </li>

                    </ul>

                </div>
               {/*  <div onClick={() => setIsMenuOpen(!isMenuOpen)} className='lg:hidden  px-4' >
                    <span>{isMenuOpen === true ? <XCircleIcon className="h-6 w-6 text-purple-500" /> : <Bars3BottomRightIcon className="h-6 w-6 text-purple-500" />}</span>
                    <ul className={`absolute ${isMenuOpen ? 'top-8' : '-top-24'} duration-500  bg-orange-200 pl-2`}>

                       <nav className='mr-12'>

                       <li className='hover:bg-purple-200'>
                            <Link to="/" className='default'>Home</Link>
                        </li>
                        <li className='hover:bg-purple-200'>
                            <Link to="/books" className='default'>Books</Link>
                        </li>
                        <li className='hover:bg-purple-200'>
                            <Link to="/about" className='default'>About</Link>
                        </li>

                       </nav>

                    </ul>

                </div> */}


                <div className='lg:hidden'>
                    <button title='OpenMenu' onClick={() => setIsMenuOpen(true)}>
                        <Bars3BottomRightIcon className="h-6 w-6 text-blue-500" />
                    </button>
                    {
                        isMenuOpen && (
                            <div className='absolute top-0 left-0 w-full z-0'>
                                <div className='p-5 bg-white border rounded shadow-sm'>
                                    <div className='flex items-center justify-between mb-4'>



                                        <div>
                                            <Link to='/' className='inline-flex items-center'>
                                                <BoltIcon className="h-6 w-6 text-blue-500" />
                                                <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
                                                    nextPage
                                                </span>
                                            </Link>
                                        </div>
                                        <div>
                                            <button title='Close Menu' onClick={() => setIsMenuOpen(false)}>
                                                <XCircleIcon className=" w-6 text-blue-500" />
                                            </button>
                                        </div>
                                    </div>
                                    <nav>


                                        <ul className='space-y-4'>
                                            <li>
                                                <Link to="/" className='default'>Home</Link>
                                            </li>
                                            <li>
                      <Link to="/books" className='font-medium hover:text-blue-400 text-gray-700 duration-200 tracking-wide transition-colors '>Books</Link>
                                            </li>
                                            <li>
                     <Link to="/about" className='font-medium hover:text-blue-400 text-gray-700 duration-200 tracking-wide transition-colors '>About</Link>
                                            </li>
                                        </ul>

                                    </nav>
                                </div>

                            </div>
                        )
                    }
                </div>



            </div>



        </div>
    );
};

export default Header;