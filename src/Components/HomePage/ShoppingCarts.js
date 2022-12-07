import React from 'react'
import "../../Styles/HomePage.css"
import cart1 from "../../Assets/Images/HomePage/Shop/aaa (1).jpg"
import cart2 from "../../Assets/Images/HomePage/Shop/aaa (2).jpg"
import cart3 from "../../Assets/Images/HomePage/Shop/aaa (3).jpg"
import cart4 from "../../Assets/Images/HomePage/Shop/aaa (4).jpg"
import cart5 from "../../Assets/Images/HomePage/Shop/aaa (5).jpg"
import cart6 from "../../Assets/Images/HomePage/Shop/aaa (6).jpg"
import cart7 from "../../Assets/Images/HomePage/Shop/aaa (1).jpg"
import cart8 from "../../Assets/Images/HomePage/Shop/aaa (2).jpg"
import cart9 from "../../Assets/Images/HomePage/Shop/aaa (3).jpg"
import cart10 from "../../Assets/Images/HomePage/Shop/aaa (4).jpg"


const ShoppingCarts = () => {
    return (
        <div>

            <section class="text-gray-600 body-font px-20">
                <div class="container mx-auto flex flex-col px-5 py-24 justify-center items-center">

                    <div class="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
                        <h1 class="title-font sm:text-6xl text-3xl mb-4 font-medium text-gray-900">Explore Our Range of <br/> Products.</h1>
                        <p class="mb-8 leading-relaxed">Kickstarter biodiesel roof party wayfarers cold-pressed. Palo santo
                            live-edge tumeric scenester copper mug flexitarian. Prism vice offal plaid everyday carry.
                            Gluten-free chia VHS squid listicle artisan.</p>

                    </div>

                    <div class="container px-5 py-10 mx-auto shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
                        <div class="flex flex-wrap -m-4 ">
                            <div class="lg:w-1/4 md:w-1/2 p-4 w-full ">
                                <a class="block relative h-48 rounded overflow-hidden">
                                    <img alt="ecommerce" class="object-cover object-center w-full h-full block "
                                        src={cart1} />
                                </a>
                                <div class="mt-4">
                                    <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                    <h2 class="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
                                    <p class="mt-1">$16.00</p>
                                </div>
                            </div>
                            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <a class="block relative h-48 rounded overflow-hidden">
                                    <img alt="ecommerce" class="object-cover object-center w-full h-full block"
                                        src={cart2}/>
                                </a>
                                <div class="mt-4">
                                    <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                    <h2 class="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
                                    <p class="mt-1">$21.15</p>
                                </div>
                            </div>
                            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <a class="block relative h-48 rounded overflow-hidden">
                                    <img alt="ecommerce" class="object-cover object-center w-full h-full block"
                                        src={cart3} />
                                </a>
                                <div class="mt-4">
                                    <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                    <h2 class="text-gray-900 title-font text-lg font-medium">Neptune</h2>
                                    <p class="mt-1">$12.00</p>
                                </div>
                            </div>
                            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <a class="block relative h-48 rounded overflow-hidden">
                                    <img alt="ecommerce" class="object-cover object-center w-full h-full block"
                                        src={cart6} />
                                </a>
                                <div class="mt-4">
                                    <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                    <h2 class="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
                                    <p class="mt-1">$18.40</p>
                                </div>
                            </div>
                            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <a class="block relative h-48 rounded overflow-hidden">
                                    <img alt="ecommerce" class="object-cover object-center w-full h-full block"
                                        src={cart5} />
                                </a>
                                <div class="mt-4">
                                    <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                    <h2 class="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
                                    <p class="mt-1">$16.00</p>
                                </div>
                            </div>
                            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <a class="block relative h-48 rounded overflow-hidden">
                                    <img alt="ecommerce" class="object-cover object-center w-full h-full block"
                                        src={cart6} />
                                </a>
                                <div class="mt-4">
                                    <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                    <h2 class="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
                                    <p class="mt-1">$21.15</p>
                                </div>
                            </div>
                            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <a class="block relative h-48 rounded overflow-hidden">
                                    <img alt="ecommerce" class="object-cover object-center w-full h-full block"
                                        src={cart1} />
                                </a>
                                <div class="mt-4">
                                    <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                    <h2 class="text-gray-900 title-font text-lg font-medium">Neptune</h2>
                                    <p class="mt-1">$12.00</p>
                                </div>
                            </div>
                            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <a class="block relative h-48 rounded overflow-hidden">
                                    <img alt="ecommerce" class="object-cover object-center w-full h-full block"
                                        src={cart2} />
                                </a>
                                <div class="mt-4">
                                    <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                    <h2 class="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
                                    <p class="mt-1">$18.40</p>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>



            </section>


        </div>
    )
}

export default ShoppingCarts