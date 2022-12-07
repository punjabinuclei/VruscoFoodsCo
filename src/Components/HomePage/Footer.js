import React from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'


import "../../Styles/HomePage.css"
import FooterLogo from "../../Assets/Images/HomePage/footerLogo.svg"

const Footer = () => {
    return (
        <div>

            <footer class="text-gray-100 body-font bg-orange-500">

                <section class="text-gray-600 body-font">
                    <div class="container px-5 pt-16 pb-8 mx-auto">
                        <div class="flex flex-wrap -m-4">
                            <div class="p-4 lg:w-1/3">

                                <a href='www.google.com'><img src={FooterLogo} alt="Logo" /> </a>

                            </div>
                            <div class="p-4 lg:w-1/3">

                                <h1 className='text-gray-100 font-semibold text-center mt-5'>QUICK LINKS</h1>
                                <nav class=" ">
                                    <Link class="mt-5 text-gray-100 font-normal text-center block text-sm hover:text-gray-50 hover:font-semibold" to="/">Home</Link>
                                    <Link class="text-gray-100 font-normal text-center block text-sm pt-1 hover:text-gray-50 hover:font-semibold" to="/about">360 Tour</Link>
                                    <Link class="text-gray-100 font-normal text-center block text-sm pt-1 hover:text-gray-50 hover:font-semibold" to="/shop">Shop</Link>
                                    <Link class="text-gray-100 font-normal text-center block text-sm pt-1 hover:text-gray-50 hover:font-semibold" to="/contact">Contact Us</Link>
                                </nav>

                            </div>
                            <div class="p-4 lg:w-1/3 pl-10">
                                <h1 className='text-gray-100 font-semibold mt-5'>CONTACT US</h1>

                                <h1 className='text-gray-100   mt-5'>For Business</h1>
                                <p className='text-xs text-gray-200'>business@zerogravitycommunications.com</p>

                                <h1 className='text-gray-100   mt-2'>Join The Team</h1>
                                <p className='text-xs text-gray-200'>info@zerogravitycommunications.com</p>
                            </div>
                        </div>


                        <div className='text-center pt-12'>
                            <a href='www.facebook.com' className='text-gray-100 text-2xl px-3 '><FontAwesomeIcon icon={faFacebook} /></a>
                            <a href='www.facebook.com' className='text-gray-100 text-2xl px-3'><FontAwesomeIcon icon={faTwitter} /></a>
                            <a href='www.facebook.com' className='text-gray-100 text-2xl px-3 '><FontAwesomeIcon icon={faLinkedin} /></a>
                            <a href='www.facebook.com' className='text-gray-100 text-2xl px-3 '><FontAwesomeIcon icon={faInstagram} /></a>
                        </div>


                        <div class="flex flex-wrap -m-4 pt-10">
                            <div class="pt-4 pl-4 lg:w-1/3 text-gray-100">
                                <p className='text-xs text-center'>©️2022 vruscofoodsupplyco, All Rights Reserved.</p>
                            </div>
                            <div class="pt-4 pl-4 lg:w-1/3 text-gray-100 text-center">

                                <a href='www.google.com' className='text-xs '>Privacy policy</a>
                            </div>
                            <div class="pt-4 pl-4 lg:w-1/3  text-gray-100">
                                <p className='text-xs text-center'>Terms & condition</p>

                            </div>
                        </div>


                    </div>
                </section>






            </footer>


        </div>
    )
}

export default Footer