import React from 'react'
import Hero from './hero'
import CategoryPreviews from './categoryPreviews'
import Products from '../product'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Promo from './Promo'
import Marketing from './Marketing'


function index() {
    return (
        <div>
            <Header />
            <Hero />
            <Promo/>
            <Products />
            <CategoryPreviews />
            <Marketing/>
            <Footer/>
        </div>
    )
}

export default index