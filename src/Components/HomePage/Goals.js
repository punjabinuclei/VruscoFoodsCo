import React from 'react'
import GoalsImage from "../../Assets/Images/HomePage/Goals.png"
import "../../Styles/HomePage.css"

const Goals = () => {
    return (
        <div>
            <section class="text-gray-600 body-font px-20">



                <div class="w-full flex flex-col mb-16 items-center text-center">
                    <h1 class="title-font sm:text-6xl text-3xl mb-2 font-medium text-gray-900 goals-head">Our Goals<span className='text-orange-500'>.</span></h1>

                </div>

                <div class="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center">

                    <div
                        class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-semibold text-gray-900">Our vision and Mission
                        </h1>
                        <p class="mb-4 leading-500 ">Our mission is to reach every Indian household without taking the help of a middle man in order to eradicate the threat and danger of adulteration as well as commission, so that we can deliver our product at a cost-effective price for the
                            regular people. We want our USP to not be said but rather be smelled and felt through our products.</p>
                        <div class="justify-center">
                            {/* -------------------------------------Add List-------- */}
                            <ul class="list-none">
                                <li className='text-zinc-900 font-medium'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="5.5" stroke="#F46A06" class="w-8 h-8 inline pr-3">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                                    Quality at its best</li>

                            </ul>

                            <ul class="list-none">
                                <li className='text-zinc-900 font-medium'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="5.5" stroke="#F46A06" class="w-8 h-8 inline pr-3">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                                    Trusted since 15 years</li>

                            </ul>

                            <ul class="list-none">
                                <li className='text-zinc-900 font-medium'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="5.5" stroke="#F46A06" class="w-8 h-8 inline pr-3">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                                    No adulteration</li>

                            </ul>

                            <ul class="list-none">
                                <li className='text-zinc-900 font-medium'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="5.5" stroke="#F46A06" class="w-8 h-8 inline pr-3">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                                    Cost effective</li>

                            </ul>
                            <ul class="list-none">
                                <li className='text-zinc-900 font-medium'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="5.5" stroke="#F46A06" class="w-8 h-8 inline pr-3">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                                    Trusted since 15 years</li>

                            </ul>

                            <ul class="list-none">
                                <li className='text-zinc-900 font-medium'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="5.5" stroke="#F46A06" class="w-8 h-8 inline pr-3 ">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                                    No adulteration</li>
                            </ul>
                        </div>
                    </div>
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img class="object-cover object-center " alt="hero" src={GoalsImage} />
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Goals