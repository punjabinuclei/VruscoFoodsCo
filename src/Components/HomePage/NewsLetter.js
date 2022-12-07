import React from 'react'
import "../../Styles/HomePage.css"

const NewsLetter = () => {
    return (
        <div>

            <section class="text-gray-600 body-font px-20">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-col text-center w-full mb-12">
                        <h1 class="sm:text-4xl text-4xl font-bold title-font mb-4 text-gray-900 head-font-newsletter">Hurry up! Subscribe our <br/> newsletter and get 5% Off</h1>
                        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Limited time offer for this month. No credit card required.</p>
                    </div>
                    <div
                        class="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                        <div class="relative flex-grow w-full">
                            
                            <input type="text" id="full-name" placeholder='Email Address Here'
                                class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-transparent focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                        </div>

                        <button
                            class="text-white bg-orange-500 border-0 py-2 px-8 focus:outline-none hover:bg-orange-600 rounded text-lg shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">Subscribe</button>
                    </div>
                </div>
            </section>


        </div>
    )
}

export default NewsLetter