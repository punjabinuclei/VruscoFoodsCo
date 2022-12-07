import React from 'react'
import "../../Styles/HomePage.css"


const Counter = () => {
    return (
        <div>

            <section class="text-gray-100 body-font bg-orange-500">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-wrap -m-4 text-center">
                        <div class="p-4 sm:w-1/4 w-1/2">
                            <h2 class=" font-medium sm:text-4xl text-3xl text-gray-100">1287+</h2>
                            <p class="leading-relaxed">Orders</p>
                        </div>
                        <div class="p-4 sm:w-1/4 w-1/2">
                            <h2 class=" font-medium sm:text-4xl text-3xl text-gray-100">5786+</h2>
                            <p class="leading-relaxed">Repeated Customers</p>
                        </div>
                        <div class="p-4 sm:w-1/4 w-1/2">
                            <h2 class=" font-medium sm:text-4xl text-3xl text-gray-100">1440+</h2>
                            <p class="leading-relaxed">Varieties</p>
                        </div>
                        <div class="p-4 sm:w-1/4 w-1/2">
                            <h2 class=" font-medium sm:text-4xl text-3xl text-gray-100">15 YEARS</h2>
                            <p class="leading-relaxed">Trusted</p>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    )
}

export default Counter