import React from 'react'
import '../../Styles/HomePage.css'
import person1 from "../../Assets/Images/HomePage/Testimonials/test (1).jpg"
import person2 from "../../Assets/Images/HomePage/Testimonials/test (2).jpg"


const Testimonials = () => {
    return (
        <div>
            <section class='text-gray-600 body-font bg-orange-500 py-24'>
            </section>
            <section class="text-gray-600 body-font bg-orange-500">
                <div class="container px-5 py-24 mx-auto">

                    <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center bg-gray-100 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
                        <img alt="ecommerce" class=" mx-auto object-center block rounded-full pt-10 w-36"
                            src={person1} />
                        <p class="leading-relaxed text-lg pt-8">"Its had been a great quality and standards of products vrusco offers at such a great value. Always
                            recommended.”</p>
                        <span class="inline-block h-1 w-10 rounded bg-yellow-500 mt-8 mb-4"></span>
                        <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm text-orange-500 ">HOLDEN CAULFIELD</h2>
                        <p class="text-gray-500">Senior Product Designer</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonials
