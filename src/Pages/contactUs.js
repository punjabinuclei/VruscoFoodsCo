import React from 'react'
import HeroSection from '../Components/ContactUsPage/HeroSection'
import ContactUsSection from '../Components/ContactUsPage/ContactUsSection'
import Map from '../Components/ContactUsPage/Map'
import NewsLetter from "../Components/HomePage/NewsLetter"
import Footer from "../Components/HomePage/Footer"

import "../Styles/ContactUs.css"

const contactUs = () => {
    return (
        <div>
            <HeroSection/>   
            <ContactUsSection/>
            <Map/>
            <NewsLetter/>
            <Footer/>


        </div>
    )
}

export default contactUs