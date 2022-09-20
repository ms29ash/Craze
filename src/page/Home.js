import React from 'react'
import Ads from '../components/Ads'
import Categories from '../components/Categories'
import Deals from '../components/Deals.'
import Intro from '../components/Intro'
import Navbar from '../components/Navbar'
import NewArrival from '../components/NewArrival'
import TopBrands from '../components/TopBrands'

function Home() {
    return (
        <div>
            <Navbar />
            <Intro />
            <NewArrival />
            <Categories />
            <Deals />
            <TopBrands />
            <Ads />
        </div>
    )
}

export default Home
