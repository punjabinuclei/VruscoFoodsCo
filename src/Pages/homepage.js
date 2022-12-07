import React from 'react'
import { HeroSectionHome } from '../Components/HomePage/HeroSectionHome';
import Counter from '../Components/HomePage/Counter';
import HeroSection2 from '../Components/HomePage/HeroSection2';
import ShoppingCarts from '../Components/HomePage/ShoppingCarts';
import Goals from '../Components/HomePage/Goals';
import Testimonials from '../Components/HomePage/Testimonials';
import NewsLetter from '../Components/HomePage/NewsLetter';
import Footer from '../Components/HomePage/Footer';


import "../Styles/HomePage.css"


function HomePage() {

    return (
        <div>
            <HeroSectionHome />
            <Counter />
            <HeroSection2 />
            <ShoppingCarts />
            <Goals />
            <Testimonials/>
            <NewsLetter/>
            <Footer/>
            
        </div>
    );

}


export default HomePage
