import React from 'react'
import ContactUs from "../../Assets/Images/ContactUs/HeroSection.svg"
import Herotext from "../../Assets/Images/ContactUs/HeroText.svg"
import "../../Styles/ContactUs.css"

const HeroSection = () => {
    return (
        <div>
            <section>
                <div class="flex pt-24">
                    <div class="m-auto">
                        <img src={ContactUs} alt="contact me block" />
                    </div>
                </div>

                <div className='flex pt-6 pb-36'>
                    <div class="m-auto">
                        <img src={Herotext} alt="hero-text" />
                    </div>
                </div>
            </section>


            <section>

            </section>
        </div>
    )
}

export default HeroSection