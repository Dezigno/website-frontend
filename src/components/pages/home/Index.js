import React from 'react'
import Home from './HomePage/Home'
import Services from './Services/Services'
import Signup from '../SignUp/SignUp'
import Products from './Products/Products'
import Team from './Team/Team'
import Footer from './Footer/Footer'
import Navbar from './Navbar'


function Index() {
    return (
        <div>
            <Navbar />
            <div className="index-container">
                <Home id="home"/>
                <Products id="products"/>
                <Services id="services"/>
                <Team />
            </div>
            <Footer />
        </div>
    );
}

export default Index;