import React from "react";
import { Outlet, Link } from "react-router-dom";
import "../../Styles/HomePage.css"
import Logo from "../../Assets/Images/HomePage/vruscoNavLogo.svg"


function Navbar() {
    return (
        <div>
            <header class="text-gray-600 body-font px-20 ?py-3 ">
                <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" to="/">
                        <img src={Logo} alt="" srcset="" />
                    </Link>
                    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <Link class="mr-7 hover-underline-animation  text-gray-700 font-normal" to="/">Home</Link>
                        <Link class="mr-7 hover-underline-animation  text-gray-700 font-normal" to="/about">360 Tour</Link>
                        <Link class="mr-7 hover-underline-animation  text-gray-700 font-normal" to="/shop">Shop</Link>
                        <Link class="mr-7 hover-underline-animation  text-gray-700 font-normal" to="/contact">Contact Us</Link>
                    </nav>

                    <Link to="/error">
                        <button
                            class=" text-gray-100 inline-flex items-center bg-orange-500 border-0 py-1 px-9 focus:outline-none  rounded text-base mt-4 md:mt-0 font-normal shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]"> Cart <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7 pl-2">
                                <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                            </svg>
                        </button>
                    </Link>
                </div>
            </header>
            <Outlet />

        </div>
    );
}

export default Navbar;
