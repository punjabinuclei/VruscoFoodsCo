import React from 'react'
import HeroSectionImg from "../../Assets/Images/AboutUs/HeroSection.svg"
import AboutPageImg from "../../Assets/Images/AboutUs/AboutPage.svg"

const HeroSection = () => {
    return (
        <div>
        <img src={HeroSectionImg} alt="logo with text" className='px-14 pt-16 pb-36'  />
        <img src={AboutPageImg} alt="about" className='px-14 pt-2 pb-10'/>
        </div> 
    )
}

export default HeroSection