import React from 'react'
import HomePage2 from "../../Assets/Images/HomePage/HomePage2.png"


const HeroSection2 = () => {
    return (
        <div>


            <section class="text-gray-600 body-font px-20">
                <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img class="object-cover object-center rounded object-scale-down" alt="hero" src={HomePage2}/>
                    </div>
                    <div
                        class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 class="title-font sm:text-6xl text-6xl mb-4 font-medium text-gray-900">More about
                            <br class="hidden lg:inline-block"/>Vrusco<span className='text-orange-500'>.</span>
                        </h1>
                        <p class="mb-8 text-lg">We are a team of passion-driven enthusiasts dominating the market for the last <span className='text-orange-500'> 15 years</span>. Quality has always been our driving factor, and we have been all over the toes to make sure whatever we manufacture is up to the standards as well as expectations of our esteem clientele.</p>
                        <div class="flex justify-center">
                            <button
                                class="inline-flex text-white border-0 py-2 px-6 focus:outline-non bg-orange-500 text-lg shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">Learn More <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-7 h-7">
                                    <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
                                </svg></button>
                            
                        </div>
                    </div>
                </div>
            </section>


        </div>
    )
}

export default HeroSection2