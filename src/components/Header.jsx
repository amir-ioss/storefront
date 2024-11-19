import React from 'react'
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="absolute z-50  border-red-600 w-full ">
            <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">Get free delivery on orders over $100</p>
            <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
                <div className="flex h-16  items-center ">
                    {/* <!-- Mobile menu toggle, controls the 'mobileMenuOpen' state. --> */}
                    <button type="button" className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden">
                        <span className="absolute -inset-0.5"></span>
                        <span className="sr-only">Open menu</span>
                        <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>

                    {/* <!-- Logo --> */}
                    <div className="ml-4 flex lg:ml-0">
                        <a href="#">
                            <span className="sr-only">Your Company</span>
                            <img className="h-8 w-auto" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600" alt="" />
                        </a>
                    </div>

                    {/* <!-- Flyout menus --> */}
                    <div className="hidden lg:ml-8 lg:block lg:self-stretch">
                        <div className="flex h-full space-x-8">
                            <a className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"><Link to="/" >Home</Link></a>
                            <a className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"><Link to="/shop" >Shop</Link></a>
                        </div>
                    </div>

                    <div className="ml-auto flex items-center">
                        <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                            <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">Sign in</a>
                            <span className="h-6 w-px bg-gray-200" aria-hidden="true"></span>
                            <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">Create account</a>
                        </div>

                        <div className="hidden lg:ml-8 lg:flex">
                            <a href="#" className="flex items-center text-gray-700 hover:text-gray-800">
                                <img src="https://tailwindui.com/plus/img/flags/flag-canada.svg" alt="" className="block h-auto w-5 shrink-0" />
                                <span className="ml-3 block text-sm font-medium">CAD</span>
                                <span className="sr-only">, change currency</span>
                            </a>
                        </div>

                        {/* <!-- Search --> */}
                        <div className="flex lg:ml-6">
                            <Link to="/shop" ><a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                                <span className="sr-only">Search</span>
                                <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>
                            </a></Link>
                        </div>

                        {/* <!-- Cart --> */}
                        <div className="ml-4 flow-root lg:ml-6">
                            <Link to="/order/id_7asd9" > <a href="#" className="group -m-2 flex items-center p-2">
                                <svg className="size-6 shrink-0 text-gray-400 group-hover:text-gray-500" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                </svg>
                                <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                                <span className="sr-only">items in cart, view bag</span>
                            </a></Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>

    )
}

export default Header