import React from 'react'
import Home from './pages/HomePage/Home'
import Services from './pages/Services/Services'
import Signup from './pages/SignUp/SignUp'
import Products from './pages/Products/Products'
import Team from './pages/Team/Team'


function Index() {
    return (
        <div className="index-container">
            <Home id="home"/>
            <Products id="products"/>
            <Services id="services"/>
            <Team />
        </div>
    );
}

export default Index;