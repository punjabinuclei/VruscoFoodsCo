import React from 'react'
import TopSection from "../Components/ShopPage/HeroSection"
import Products from '../Components/ShopPage/Products'
import HeroSection2 from '../Components/ShopPage/HeroSection2'
import Footer from '../Components/HomePage/Footer'

const Shop = () => {
    return (
        <div>
            <TopSection/>
            <Products/>
            <HeroSection2/>
            <Footer />
        </div>
    )
}

export default Shop