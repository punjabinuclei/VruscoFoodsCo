import React from 'react'
import "../../Styles/HomePage.css"
import HeroImg from "../../Assets/Images/HomePage/HeroSection.png"

export const HeroSectionHome = () => {
    return (
        <div>

            <section class="text-gray-600 body-font px-20 ">
                <div class="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
                    <div
                        class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 class="title-font text-5xl mb-4 text-gray-900 font-medium">Order <span className='text-orange-500 font-semibold'> FINEST</span><br /> form of Ghee,<br />
                            Hing and all sort <br /> of spices<span className='text-orange-500 font-semibold'>.</span>
                            <br class="hidden lg:inline-block" />
                        </h1>
                        <p class="mb-8 leading-relaxed leading-5">We make sure whatever that we produce, excel all the legal as
                            well as moral quality checks and leaves our customers with
                            utmost faith and satisfaction in our products!</p>
                        <div class="flex justify-center">

                            <button
                                class="inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">Order
                                Now <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6 pt-1 pl-2">
                                    <path fill-rule="evenodd" d="M6 5v1H4.667a1.75 1.75 0 00-1.743 1.598l-.826 9.5A1.75 1.75 0 003.84 19H16.16a1.75 1.75 0 001.743-1.902l-.826-9.5A1.75 1.75 0 0015.333 6H14V5a4 4 0 00-8 0zm4-2.5A2.5 2.5 0 007.5 5v1h5V5A2.5 2.5 0 0010 2.5zM7.5 10a2.5 2.5 0 005 0V8.75a.75.75 0 011.5 0V10a4 4 0 01-8 0V8.75a.75.75 0 011.5 0V10z" clip-rule="evenodd" />
                                </svg>
                            </button>
                            <button
                                class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">Learn
                                More <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-7 h-7">
                                    <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img class="object-cover object-center rounded " alt="hero" src={HeroImg} />
                    </div>
                </div>
            </section>


        </div>
    )
}
