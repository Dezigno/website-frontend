import React from 'react'
import Home from './pages/HomePage/Home'
import Services from './pages/Services/Services'
import Signup from './pages/SignUp/SignUp'
import Products from './pages/Products/Products'
import Team from './pages/Team/Team'
import Footer from './pages/Footer/Footer'
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